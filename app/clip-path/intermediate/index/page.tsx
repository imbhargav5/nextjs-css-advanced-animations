import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Intermediate Examples",
  description: "Explore intermediate techniques with these 15 examples covering animations, interactions, and complex shapes.",
  category: "clip-path",
  level: "intermediate",
});

const intermediateDemos = [
  { number: 1, slug: "1-animated-circle-expansion-demo", title: "Animated Circle Expansion" },
  { number: 2, slug: "2-polygon-morphing-demo", title: "Polygon Morphing" },
  { number: 3, slug: "3-clip-with-transforms-demo", title: "Clip with Transforms" },
  { number: 4, slug: "4-responsive-polygon-demo", title: "Responsive Polygon" },
  { number: 5, slug: "5-hover-reveal-advanced-demo", title: "Advanced Hover Reveal" },
  { number: 6, slug: "6-layered-polygons-demo", title: "Layered Polygons" },
  { number: 7, slug: "7-svg-path-clip-demo", title: "SVG Path Clip" },
  { number: 8, slug: "8-gradient-clip-demo", title: "Gradient Clip" },
  { number: 9, slug: "9-text-clipping-demo", title: "Text Clipping" },
  { number: 10, slug: "10-scroll-triggered-demo", title: "Scroll Triggered" },
  { number: 11, slug: "11-inset-animation-demo", title: "Inset Animation" },
  { number: 12, slug: "12-polygon-fan-demo", title: "Polygon Fan" },
  { number: 13, slug: "13-mask-reveal-demo", title: "Mask Reveal" },
  { number: 14, slug: "14-dynamic-polygon-demo", title: "Dynamic Polygon" },
  { number: 15, slug: "15-backdrop-filter-clip-demo", title: "Backdrop Filter Clip" },
];

export default function IntermediateIndexPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-purple-600 hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Intermediate Clip-Path Examples</h1>
          <p className="text-lg text-gray-600">
            Explore intermediate techniques with these 15 examples covering animations, interactions, and complex shapes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {intermediateDemos.map((demo) => (
            <Link
              key={demo.number}
              href={`/clip-path/intermediate/${demo.slug}`}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-purple-600">{demo.number}</span>
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

