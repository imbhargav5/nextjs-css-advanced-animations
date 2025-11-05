import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Advanced Examples",
  description: "Master complex compositions, 3D effects, and cutting-edge blend mode techniques with these 15 examples.",
  category: "blend-modes",
  level: "advanced",
});

const advancedDemos = [
  { number: 1, slug: "1-complex-multi-layer-blend-demo", title: "Complex Multi-Layer Blend" },
  { number: 2, slug: "2-interactive-blend-editor-demo", title: "Interactive Blend Editor" },
  { number: 3, slug: "3-blend-mode-morphing-demo", title: "Blend Mode Morphing" },
  { number: 4, slug: "4-3d-blend-effects-demo", title: "3D Blend Effects" },
  { number: 5, slug: "5-blend-mode-with-clipping-demo", title: "Blend Mode with Clipping" },
  { number: 6, slug: "6-animated-blend-transitions-demo", title: "Animated Blend Transitions" },
  { number: 7, slug: "7-blend-mode-patterns-demo", title: "Blend Mode Patterns" },
  { number: 8, slug: "8-blend-mode-with-svg-demo", title: "Blend Mode with SVG" },
  { number: 9, slug: "9-blend-mode-reveal-effects-demo", title: "Blend Mode Reveal Effects" },
  { number: 10, slug: "10-cursor-following-blend-demo", title: "Cursor Following Blend" },
  { number: 11, slug: "11-parallax-blend-effects-demo", title: "Parallax Blend Effects" },
  { number: 12, slug: "12-complex-blend-compositions-demo", title: "Complex Blend Compositions" },
  { number: 13, slug: "13-blend-mode-filters-demo", title: "Blend Mode Filters" },
  { number: 14, slug: "14-svg-path-blend-demo", title: "SVG Path Blend" },
  { number: 15, slug: "15-blend-mode-transforms-demo", title: "Blend Mode Transforms" },
];

export default function AdvancedIndexPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/blend-modes" className="text-rose-600 hover:underline mb-4 inline-block">
            ← Back to Blend Modes
          </Link>
          <h1 className="text-4xl font-bold mb-4">Advanced Blend Modes Examples</h1>
          <p className="text-lg text-gray-600">
            Master complex compositions, 3D effects, and cutting-edge blend mode techniques with these 15 examples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedDemos.map((demo) => (
            <Link
              key={demo.number}
              href={`/blend-modes/advanced/${demo.slug}`}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-rose-600">{demo.number}</span>
                <h2 className="text-xl font-semibold">{demo.title}</h2>
              </div>
              <p className="text-sm text-gray-600">View Demo →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

