import type { Metadata } from "next";

interface MetadataOptions {
  title: string;
  description: string;
  category?: "clip-path" | "blend-modes" | "backdrop-filter";
  level?: "basic" | "intermediate" | "advanced";
}

export function generateMetadata({
  title,
  description,
  category,
  level,
}: MetadataOptions): Metadata {
  const categoryMap = {
    "clip-path": "Clip-Path",
    "blend-modes": "Blend Modes",
    "backdrop-filter": "Backdrop Filter",
  };

  const levelMap = {
    basic: "Basic",
    intermediate: "Intermediate",
    advanced: "Advanced",
  };

  let fullTitle = title;
  if (category && level) {
    fullTitle = `${title} | ${levelMap[level]} ${categoryMap[category]} Examples`;
  } else if (category) {
    fullTitle = `${title} | ${categoryMap[category]} Examples`;
  }

  return {
    title: fullTitle,
    description,
  };
}

