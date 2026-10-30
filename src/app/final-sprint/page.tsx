import { SprintDocument } from "@/components/sprint-document";
import { getSprintMaterial } from "@/lib/final-sprint";
import { notFound } from "next/navigation";

export const metadata = { title: "Your final sprint" };

export default async function FinalSprintPage() {
  const document = await getSprintMaterial("plan");
  if (!document) notFound();
  return <SprintDocument {...document} active="plan" />;
}
