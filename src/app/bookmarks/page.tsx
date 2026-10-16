import { NotesLibrary } from "@/components/study-overview";
import { getChapters } from "@/lib/content";

export const metadata = { title: "Bookmarks" };
export default function BookmarksPage() {
  return <NotesLibrary chapters={getChapters()} bookmarked />;
}
