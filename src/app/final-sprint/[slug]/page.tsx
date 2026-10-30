import { notFound } from "next/navigation";
import { SprintDocument } from "@/components/sprint-document";
import { getSprintMaterial, sprintMaterials } from "@/lib/final-sprint";

export const dynamicParams = false;

export function generateStaticParams() {
  return sprintMaterials
    .filter((material) => material.slug !== "plan")
    .map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const document = await getSprintMaterial(slug);
  return { title: document?.title ?? "Final sprint" };
}

export default async function SprintMaterialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const document = await getSprintMaterial(slug);
  if (!document || slug === "plan") notFound();
  return <SprintDocument {...document} active={slug} />;
}
