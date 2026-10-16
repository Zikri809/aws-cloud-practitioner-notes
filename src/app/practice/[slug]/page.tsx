import { notFound } from "next/navigation";
import { getExam, getExams } from "@/lib/content";
import { ExamPlayer } from "@/components/exams";

export const dynamicParams = false;
export function generateStaticParams() {
  return getExams().map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title:
      getExams().find((exam) => exam.slug === slug)?.title ?? "Exam not found",
  };
}
export default async function ExamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exam = await getExam(slug);
  if (!exam) notFound();
  const summary = getExams().find((item) => item.slug === slug)!;
  return <ExamPlayer key={slug} exam={summary} questions={exam.questions} />;
}
