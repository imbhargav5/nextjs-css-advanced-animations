import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Basic Examples",
  description: "Learn the fundamentals of backdrop-filter with blur, brightness, contrast, and more.",
  category: "backdrop-filter",
  level: "basic",
});

const basicDemos = [
  { number: 1, slug: "1-simple-blur-demo", title: "Simple Blur" },
  { number: 2, slug: "2-brightness-demo", title: "Brightness" },
  { number: 3, slug: "3-contrast-demo", title: "Contrast" },
  { number: 4, slug: "4-grayscale-demo", title: "Grayscale" },
  { number: 5, slug: "5-hue-rotate-demo", title: "Hue Rotate" },
  { number: 6, slug: "6-invert-demo", title: "Invert" },
  { number: 7, slug: "7-opacity-demo", title: "Opacity" },
  { number: 8, slug: "8-saturate-demo", title: "Saturate" },
  { number: 9, slug: "9-sepia-demo", title: "Sepia" },
  { number: 10, slug: "10-multiple-filters-demo", title: "Multiple Filters" },
];

export default function BasicIndexPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/backdrop-filter" className="text-teal-600 hover:underline mb-4 inline-block">
            ← Back to Backdrop Filter
          </Link>
          <h1 className="text-4xl font-bold mb-4">Basic Backdrop Filter Examples</h1>
          <p className="text-lg text-gray-600">
            Learn the fundamentals of CSS backdrop-filter with these 10 basic examples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {basicDemos.map((demo) => (
            <Link
              key={demo.number}
              href={`/backdrop-filter/basic/${demo.slug}`}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-teal-600">{demo.number}</span>
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

