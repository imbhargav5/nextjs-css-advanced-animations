import Link from "next/link";

const sections = [
  {
    name: "Clip-Path",
    href: "/clip-path",
    description: "Explore CSS clip-path examples from basic shapes to advanced animations",
    icon: "✂️",
  },
  {
    name: "Blend Modes",
    href: "/blend-modes",
    description: "Explore CSS blend modes examples from basic effects to advanced compositions",
    icon: "🎨",
  },
  {
    name: "Backdrop Filter",
    href: "/backdrop-filter",
    description: "Explore CSS backdrop-filter examples from basic effects to advanced compositions",
    icon: "✨",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-center py-16 px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            CSS Examples Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore diverse CSS techniques and examples organized by category.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {sections.map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-400"
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{section.name}</h2>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <div className="text-blue-600 font-semibold group-hover:underline">
                  View Section →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
