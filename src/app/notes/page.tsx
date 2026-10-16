import { NotesLibrary } from "@/components/study-overview";
import { getChapters } from "@/lib/content";

export const metadata = { title: "Study notes" };
export default function NotesPage() {
  return <NotesLibrary chapters={getChapters()} />;
}
