import { AttemptHistoryPage } from "@/components/attempt-history";
import { getExam, getExams } from "@/lib/content";

export default async function ProgressPage() {
  const exams = await Promise.all(getExams().map((exam) => getExam(exam.slug)));
  const answers = Object.fromEntries(exams.filter((exam) => exam !== null).map((exam) => [
    exam.slug,
    Object.fromEntries(exam.questions.map((question) => [String(question.id), question.answers])),
  ]));
  return <AttemptHistoryPage answers={answers} />;
}
