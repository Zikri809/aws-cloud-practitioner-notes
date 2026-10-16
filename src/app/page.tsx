import { StudyOverview } from "@/components/study-overview";
import { getChapters, getExams } from "@/lib/content";

export default function Home() {
  return <StudyOverview chapters={getChapters()} exams={getExams()} />;
}
