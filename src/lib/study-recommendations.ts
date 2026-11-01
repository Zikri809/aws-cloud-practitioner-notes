export type CheckedResponse = {
  examSlug: string;
  questionId: number;
  revision: string;
  chapterSlugs: string[];
  correct: boolean;
  checkedAt: string;
};

export type ChapterRecommendation = {
  chapterSlug: string;
  answered: number;
  correct: number;
  mistakes: number;
  accuracy: number;
  limitedEvidence: boolean;
};

export function gradeAnswer(selected: string[], expected: string[]): boolean {
  const actual = new Set(selected);
  const correct = new Set(expected);
  return selected.length === expected.length && actual.size === selected.length &&
    correct.size === expected.length && [...correct].every((key) => actual.has(key));
}

export function recommendChapters(responses: CheckedResponse[], revision: string) {
  const latest = new Map<string, CheckedResponse>();
  for (const response of responses) {
    if (response.revision !== revision || !Number.isFinite(Date.parse(response.checkedAt))) continue;
    const key = `${response.examSlug}:${response.questionId}`;
    const previous = latest.get(key);
    if (!previous || Date.parse(response.checkedAt) > Date.parse(previous.checkedAt)) {
      latest.set(key, response);
    }
  }

  const chapters = new Map<string, ChapterRecommendation>();
  for (const response of latest.values()) {
    for (const chapterSlug of new Set(response.chapterSlugs)) {
      const chapter = chapters.get(chapterSlug) ?? {
        chapterSlug, answered: 0, correct: 0, mistakes: 0, accuracy: 0, limitedEvidence: true,
      };
      chapter.answered++;
      if (response.correct) chapter.correct++;
      else chapter.mistakes++;
      chapter.accuracy = chapter.correct / chapter.answered;
      chapter.limitedEvidence = chapter.answered < 5;
      chapters.set(chapterSlug, chapter);
    }
  }
  return [...chapters.values()].sort((a, b) =>
    Number(a.limitedEvidence) - Number(b.limitedEvidence) ||
    a.accuracy - b.accuracy || b.mistakes - a.mistakes ||
    a.chapterSlug.localeCompare(b.chapterSlug),
  );
}
