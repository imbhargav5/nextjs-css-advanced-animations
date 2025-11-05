import Link from "next/link";

const intermediateDemos = [
  { number: 1, slug: "1-image-overlay-blend-demo", title: "Image Overlay Blend" },
  { number: 2, slug: "2-text-blend-modes-demo", title: "Text Blend Modes" },
  { number: 3, slug: "3-multiple-blend-layers-demo", title: "Multiple Blend Layers" },
  { number: 4, slug: "4-blend-mode-transitions-demo", title: "Blend Mode Transitions" },
  { number: 5, slug: "5-gradient-blend-modes-demo", title: "Gradient Blend Modes" },
  { number: 6, slug: "6-hover-blend-effects-demo", title: "Hover Blend Effects" },
  { number: 7, slug: "7-background-blend-mode-demo", title: "Background Blend Mode" },
  { number: 8, slug: "8-isolated-blend-groups-demo", title: "Isolated Blend Groups" },
  { number: 9, slug: "9-blend-mode-with-filters-demo", title: "Blend Mode with Filters" },
  { number: 10, slug: "10-scroll-triggered-blend-demo", title: "Scroll Triggered Blend" },
  { number: 11, slug: "11-dynamic-blend-switching-demo", title: "Dynamic Blend Switching" },
  { number: 12, slug: "12-blend-mode-with-gradients-demo", title: "Blend Mode with Gradients" },
  { number: 13, slug: "13-text-outline-blend-demo", title: "Text Outline Blend" },
  { number: 14, slug: "14-blend-mode-animations-demo", title: "Blend Mode Animations" },
  { number: 15, slug: "15-blend-mode-layers-demo", title: "Blend Mode Layers" },
];

export default function IntermediateIndexPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/blend-modes" className="text-pink-600 hover:underline mb-4 inline-block">
            ← Back to Blend Modes
          </Link>
          <h1 className="text-4xl font-bold mb-4">Intermediate Blend Modes Examples</h1>
          <p className="text-lg text-gray-600">
            Explore animations, interactions, and more complex blend mode techniques with these 15 examples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {intermediateDemos.map((demo) => (
            <Link
              key={demo.number}
              href={`/blend-modes/intermediate/${demo.slug}`}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-pink-600">{demo.number}</span>
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

