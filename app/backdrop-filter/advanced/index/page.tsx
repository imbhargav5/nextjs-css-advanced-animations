import Link from "next/link";

const advancedDemos = [
  { number: 1, slug: "1-complex-multi-layer-blur-demo", title: "Complex Multi-Layer Blur" },
  { number: 2, slug: "2-interactive-filter-editor-demo", title: "Interactive Filter Editor" },
  { number: 3, slug: "3-morphing-filter-transitions-demo", title: "Morphing Filter Transitions" },
  { number: 4, slug: "4-3d-perspective-effects-demo", title: "3D Perspective Effects" },
  { number: 5, slug: "5-backdrop-filter-with-clip-path-demo", title: "Backdrop Filter with Clip-Path" },
  { number: 6, slug: "6-animated-filter-sequences-demo", title: "Animated Filter Sequences" },
  { number: 7, slug: "7-pattern-overlays-demo", title: "Pattern Overlays" },
  { number: 8, slug: "8-backdrop-filter-with-svg-demo", title: "Backdrop Filter with SVG" },
  { number: 9, slug: "9-reveal-effects-demo", title: "Reveal Effects" },
  { number: 10, slug: "10-cursor-following-effects-demo", title: "Cursor Following Effects" },
  { number: 11, slug: "11-parallax-backdrop-effects-demo", title: "Parallax Backdrop Effects" },
  { number: 12, slug: "12-complex-filter-compositions-demo", title: "Complex Filter Compositions" },
  { number: 13, slug: "13-backdrop-filter-with-blend-modes-demo", title: "Backdrop Filter with Blend Modes" },
  { number: 14, slug: "14-svg-path-backdrop-demo", title: "SVG Path Backdrop" },
  { number: 15, slug: "15-backdrop-filter-transforms-demo", title: "Backdrop Filter Transforms" },
];

export default function AdvancedIndexPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/backdrop-filter" className="text-sky-600 hover:underline mb-4 inline-block">
            ← Back to Backdrop Filter
          </Link>
          <h1 className="text-4xl font-bold mb-4">Advanced Backdrop Filter Examples</h1>
          <p className="text-lg text-gray-600">
            Master complex compositions, 3D effects, and cutting-edge backdrop-filter techniques with these 15 examples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedDemos.map((demo) => (
            <Link
              key={demo.number}
              href={`/backdrop-filter/advanced/${demo.slug}`}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-sky-600">{demo.number}</span>
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

