import Link from "next/link";

const advancedDemos = [
  { number: 1, slug: "1-complex-svg-animation-demo", title: "Complex SVG Animation" },
  { number: 2, slug: "2-interactive-editor-demo", title: "Interactive Editor" },
  { number: 3, slug: "3-scroll-reveal-animation-demo", title: "Scroll Reveal Animation" },
  { number: 4, slug: "4-shape-morphing-demo", title: "Shape Morphing" },
  { number: 5, slug: "5-multi-layer-clips-demo", title: "Multi-Layer Clips" },
  { number: 6, slug: "6-perspective-3d-demo", title: "Perspective 3D" },
  { number: 7, slug: "7-css-variables-animation-demo", title: "CSS Variables Animation" },
  { number: 8, slug: "8-geometric-patterns-demo", title: "Geometric Patterns" },
  { number: 9, slug: "9-blend-modes-clip-demo", title: "Blend Modes Clip" },
  { number: 10, slug: "10-drawing-reveal-demo", title: "Drawing Reveal" },
  { number: 11, slug: "11-cursor-following-demo", title: "Cursor Following" },
  { number: 12, slug: "12-parallax-clipping-demo", title: "Parallax Clipping" },
  { number: 13, slug: "13-complex-transitions-demo", title: "Complex Transitions" },
  { number: 14, slug: "14-filter-combinations-demo", title: "Filter Combinations" },
  { number: 15, slug: "15-svg-path-morphing-demo", title: "SVG Path Morphing" },
];

export default function AdvancedIndexPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-orange-600 hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Advanced Clip-Path Examples</h1>
          <p className="text-lg text-gray-600">
            Master advanced techniques with these 15 examples covering complex animations, interactions, and cutting-edge effects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedDemos.map((demo) => (
            <Link
              key={demo.number}
              href={`/clip-path/advanced/${demo.slug}`}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-orange-600">{demo.number}</span>
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

