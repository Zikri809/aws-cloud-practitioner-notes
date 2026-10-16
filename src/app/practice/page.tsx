import { ExamLibrary } from "@/components/exams";
import { getExams } from "@/lib/content";

export const metadata = { title: "Practice exams" };
export default function ExamsPage() {
  return <ExamLibrary exams={getExams()} />;
}
