import { Metadata } from "next";
import { notFound } from "next/navigation";
import { shorthandLessons } from "../../../../data/shorthand/lessons";
import { LessonRunner } from "../../../../components/shorthand/LessonRunner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return shorthandLessons.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = shorthandLessons.find((l) => l.slug === slug);
  if (!lesson) return { title: "Lesson Not Found - TypeHindi Shorthand" };

  return {
    title: `${lesson.title} - Level ${lesson.level} | Pitman Shorthand | TypeHindi`,
    description: lesson.subtitle,
    keywords: [
      "shorthand",
      lesson.title.toLowerCase(),
      "pitman shorthand lesson",
      "learn shorthand online",
      "stenography lesson"
    ]
  };
}

export default async function ShorthandLessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = shorthandLessons.find((l) => l.slug === slug);

  if (!lesson) {
    notFound();
  }

  return <LessonRunner lesson={lesson} />;
}
