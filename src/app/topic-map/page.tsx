import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { groups } from "@/lib/catalog";
import { getChapters, getChapter } from "@/lib/content";

export const metadata = { title: "Topic map" };
export default async function TopicMapPage() {
  const chapters = await Promise.all(
    getChapters().map((chapter) => getChapter(chapter.slug)),
  );
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <div className="page-kicker">
            <span className="orange-line" />
            See how it fits together
          </div>
          <h1>The bigger picture.</h1>
          <p>
            A linked outline of the collection. Jump straight to the concept you
            need.
          </p>
        </div>
      </div>
      <div className="topic-map">
        {groups.map((group) => (
          <section key={group} className="map-group">
            <h2>{group}</h2>
            <div className="map-branches">
              {chapters
                .filter((chapter) => chapter?.group === group)
                .map(
                  (chapter) =>
                    chapter && (
                      <details key={chapter.slug} className="map-chapter">
                        <summary>
                          {chapter.title}
                          <span>{chapter.topics} topics</span>
                        </summary>
                        <Link
                          className="map-chapter-link"
                          href={`/notes/${chapter.slug}`}
                        >
                          Read chapter
                          <ArrowUpRight size={15} />
                        </Link>
                        <ul>
                          {chapter.headings
                            .filter((heading) => heading.level === 2)
                            .map((heading) => (
                              <li key={heading.id}>
                                <Link
                                  href={`/notes/${chapter.slug}#${heading.id}`}
                                >
                                  {heading.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </details>
                    ),
                )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
