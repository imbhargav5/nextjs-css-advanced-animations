import Link from "next/link";

const basicDemos = [
  { number: 1, slug: "1-simple-circle-clip-demo", title: "Simple Circle Clip" },
  { number: 2, slug: "2-ellipse-clip-demo", title: "Ellipse Clip" },
  { number: 3, slug: "3-triangle-polygon-demo", title: "Triangle Polygon" },
  { number: 4, slug: "4-inset-rectangle-demo", title: "Inset Rectangle" },
  { number: 5, slug: "5-multiple-circles-demo", title: "Multiple Circles" },
  { number: 6, slug: "6-hexagon-polygon-demo", title: "Hexagon Polygon" },
  { number: 7, slug: "7-hover-reveal-demo", title: "Hover Reveal" },
  { number: 8, slug: "8-image-crop-demo", title: "Image Crop" },
  { number: 9, slug: "9-star-polygon-demo", title: "Star Polygon" },
  { number: 10, slug: "10-inset-rounded-demo", title: "Inset Rounded" },
];

export default function BasicIndexPage() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Basic Clip-Path Examples</h1>
          <p className="text-lg text-gray-600">
            Learn the fundamentals of CSS clip-path with these 10 basic examples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {basicDemos.map((demo) => (
            <Link
              key={demo.number}
              href={`/clip-path/basic/${demo.slug}`}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-blue-600">{demo.number}</span>
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

