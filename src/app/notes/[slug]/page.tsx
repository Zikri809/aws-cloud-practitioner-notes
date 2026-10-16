import { notFound } from "next/navigation";
import { getChapter, getChapters } from "@/lib/content";
import { Reader } from "@/components/reader";

export const dynamicParams = false;
export function generateStaticParams() {
  return getChapters().map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title:
      getChapters().find((chapter) => chapter.slug === slug)?.title ??
      "Chapter not found",
  };
}
export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = await getChapter(slug);
  if (!chapter) notFound();
  const chapters = getChapters();
  const index = chapters.findIndex((chapter) => chapter.slug === slug);
  return (
    <Reader
      key={slug}
      chapter={chapters[index]}
      html={chapter.html}
      headings={chapter.headings}
      index={index}
      previous={chapters[index - 1]}
      next={chapters[index + 1]}
    />
  );
}
