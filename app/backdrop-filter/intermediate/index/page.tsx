import Link from "next/link";

const intermediateDemos = [
  { number: 1, slug: "1-animated-blur-transitions-demo", title: "Animated Blur Transitions" },
  { number: 2, slug: "2-glass-morphism-card-demo", title: "Glass Morphism Card" },
  { number: 3, slug: "3-modal-overlay-demo", title: "Modal Overlay" },
  { number: 4, slug: "4-navigation-bar-demo", title: "Navigation Bar" },
  { number: 5, slug: "5-scroll-triggered-blur-demo", title: "Scroll-Triggered Blur" },
  { number: 6, slug: "6-hover-filter-effects-demo", title: "Hover Filter Effects" },
  { number: 7, slug: "7-dropdown-menus-demo", title: "Dropdown Menus" },
  { number: 8, slug: "8-card-hover-effects-demo", title: "Card Hover Effects" },
  { number: 9, slug: "9-sidebar-with-blur-demo", title: "Sidebar with Blur" },
  { number: 10, slug: "10-filter-combinations-demo", title: "Filter Combinations" },
  { number: 11, slug: "11-dynamic-filter-switching-demo", title: "Dynamic Filter Switching" },
  { number: 12, slug: "12-gradient-backdrop-demo", title: "Gradient Backdrop" },
  { number: 13, slug: "13-text-overlay-effects-demo", title: "Text Overlay Effects" },
  { number: 14, slug: "14-image-galleries-demo", title: "Image Galleries" },
  { number: 15, slug: "15-interactive-filter-control-demo", title: "Interactive Filter Control" },
];

export default function IntermediateIndexPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/backdrop-filter" className="text-cyan-600 hover:underline mb-4 inline-block">
            ← Back to Backdrop Filter
          </Link>
          <h1 className="text-4xl font-bold mb-4">Intermediate Backdrop Filter Examples</h1>
          <p className="text-lg text-gray-600">
            Explore animations, interactions, and practical backdrop-filter applications with these 15 examples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {intermediateDemos.map((demo) => (
            <Link
              key={demo.number}
              href={`/backdrop-filter/intermediate/${demo.slug}`}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-cyan-600">{demo.number}</span>
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

