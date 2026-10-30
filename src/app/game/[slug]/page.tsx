import { Metadata } from "next";
import { notFound } from "next/navigation";
import { GAME_CATALOG, GameInfo } from "../../../data/gameData";
import { GameRunnerClient } from "../../../components/games/GameRunnerClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return GAME_CATALOG.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = GAME_CATALOG.find((g) => g.slug === slug);

  if (!game) {
    return {
      title: "Game Not Found - TypeHindi.in",
    };
  }

  const url = `https://typehindi.in/game/${slug}`;
  return {
    title: `${game.title} (${game.hindiTitle}) - Hindi Typing Game | TypeHindi.in`,
    description: `${game.description} Play ${game.title} on TypeHindi.in to improve your Hindi typing speed, accuracy, and keyboard mastery.`,
    alternates: {
      canonical: url,
    },
    keywords: [
      game.title,
      game.hindiTitle,
      "Hindi typing game",
      "learn Hindi typing",
      "Hindi typing practice",
      "Hindi keyboard game",
      "online typing game",
    ],
    openGraph: {
      title: `${game.title} - Hindi Typing Game | TypeHindi.in`,
      description: game.description,
      url,
      type: "website",
    },
  };
}

export default async function DedicatedGamePage({ params }: PageProps) {
  const { slug } = await params;
  const game = GAME_CATALOG.find((g) => g.slug === slug);

  if (!game) {
    notFound();
  }

  return <GameRunnerClient game={game} />;
}
