import Link from "next/link";

const basicDemos = [
  { number: 1, slug: "1-simple-multiply-demo", title: "Simple Multiply Blend" },
  { number: 2, slug: "2-screen-blend-demo", title: "Screen Blend" },
  { number: 3, slug: "3-overlay-blend-demo", title: "Overlay Blend" },
  { number: 4, slug: "4-darken-blend-demo", title: "Darken Blend" },
  { number: 5, slug: "5-lighten-blend-demo", title: "Lighten Blend" },
  { number: 6, slug: "6-color-dodge-demo", title: "Color Dodge Blend" },
  { number: 7, slug: "7-color-burn-demo", title: "Color Burn Blend" },
  { number: 8, slug: "8-difference-blend-demo", title: "Difference Blend" },
  { number: 9, slug: "9-exclusion-blend-demo", title: "Exclusion Blend" },
  { number: 10, slug: "10-hard-light-demo", title: "Hard Light Blend" },
];

export default function BasicIndexPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/blend-modes" className="text-purple-600 hover:underline mb-4 inline-block">
            ← Back to Blend Modes
          </Link>
          <h1 className="text-4xl font-bold mb-4">Basic Blend Modes Examples</h1>
          <p className="text-lg text-gray-600">
            Learn the fundamentals of CSS blend modes with these 10 basic examples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {basicDemos.map((demo) => (
            <Link
              key={demo.number}
              href={`/blend-modes/basic/${demo.slug}`}
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

