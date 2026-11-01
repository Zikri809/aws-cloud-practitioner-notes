import "server-only";
import fs from "node:fs";
import path from "node:path";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { chapters } from "@/lib/catalog";
import { getExams, parseExam } from "@/lib/content";
import { validateStudySnapshot, type AnswerBank } from "@/lib/validate-study";

export const dynamic = "force-dynamic";
let cachedBank: AnswerBank | undefined;

function answerBank(): AnswerBank {
  cachedBank ??= Object.fromEntries(getExams().map(({ slug }) => [
    slug,
    parseExam(fs.readFileSync(path.join(process.cwd(), "practice-exam", `${slug}.md`), "utf8")),
  ]));
  return cachedBank;
}

async function clients() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishable = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const secret = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !publishable || !secret) return null;
  const cookieStore = await cookies();
  const auth = createServerClient(url, publishable, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (values) => { for (const { name, value, options } of values) cookieStore.set(name, value, options); },
    },
  });
  const { data: { user }, error } = await auth.auth.getUser();
  if (error || !user) return null;
  return { user, admin: createClient(url, secret, { auth: { persistSession: false, autoRefreshToken: false } }) };
}

function response(data: unknown, status = 200) {
  return Response.json(data, { status, headers: { "Cache-Control": "private, no-store" } });
}

export async function GET(request: Request) {
  const context = await clients();
  if (!context) return response({ error: "Sign in to access progress." }, 401);
  if (request.headers.get("x-study-user") !== context.user.id) return response({ error: "Account changed. Sign in again." }, 401);
  const { data, error } = await context.admin.from("study_progress").select("snapshot, version").eq("user_id", context.user.id).maybeSingle();
  return error ? response({ error: "Could not load progress." }, 503) : response({ progress: data });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) return response({ error: "Invalid request origin." }, 403);
  const context = await clients();
  if (!context) return response({ error: "Sign in to save progress." }, 401);
  if (request.headers.get("x-study-user") !== context.user.id) return response({ error: "Account changed. Sign in again." }, 401);
  let payload: { snapshot?: unknown; version?: unknown };
  let validated: ReturnType<typeof validateStudySnapshot>;
  try {
    const body = await request.text();
    if (body.length > 2_000_000) return response({ error: "Progress is too large." }, 413);
    payload = JSON.parse(body);
    if (!payload || typeof payload !== "object" || (payload.version !== null && (!Number.isSafeInteger(payload.version) || Number(payload.version) < 1))) throw new Error("Invalid version");
    validated = validateStudySnapshot(payload.snapshot, answerBank(), chapters.map((chapter) => chapter.slug));
  } catch {
    return response({ error: "Progress could not be validated. Your device copy has been kept." }, 400);
  }
  const version = payload.version as number | null;
  const query = version === null
    ? context.admin.from("study_progress").insert({ user_id: context.user.id, snapshot: validated, version: 1 }).select("snapshot, version").maybeSingle()
    : context.admin.from("study_progress").update({ snapshot: validated, version: version + 1, updated_at: new Date().toISOString() }).eq("user_id", context.user.id).eq("version", version).select("snapshot, version").maybeSingle();
  const { data, error } = await query;
  if (error?.code === "23505" || (!error && !data)) return response({ error: "Progress changed on another device." }, 409);
  return error ? response({ error: "Could not save progress." }, 503) : response({ progress: data });
}
