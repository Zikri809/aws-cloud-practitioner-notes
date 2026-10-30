import { notFound } from "next/navigation";
import { SprintDocument } from "@/components/sprint-document";
import { getSprintAssessment, sprintAssessments } from "@/lib/final-sprint";

export const dynamicParams = false;

export function generateStaticParams() {
  return sprintAssessments.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const document = await getSprintAssessment(slug);
  return { title: document?.title ?? "Assessment review" };
}

export default async function SprintAssessmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const document = await getSprintAssessment(slug);
  if (!document) notFound();
  return <SprintDocument {...document} assessment />;
}
