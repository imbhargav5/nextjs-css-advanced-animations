import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blend Modes Examples",
  description: "Explore 40 diverse examples of CSS blend modes, from basic effects to advanced compositions and interactions.",
};

export default function BlendModesIndexPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-center py-16 px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Blend Modes Examples Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore 40 diverse examples of CSS blend modes, from basic effects to advanced compositions and interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {/* Basic Examples */}
          <Link
            href="/blend-modes/basic/index"
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-200 hover:border-purple-400"
          >
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                10
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">Basic Examples</h2>
              <p className="text-gray-600 mb-4">
                Learn the fundamentals of blend modes with multiply, screen, overlay, and more.
              </p>
              <div className="text-purple-600 font-semibold group-hover:underline">
                View Examples →
              </div>
            </div>
          </Link>

          {/* Intermediate Examples */}
          <Link
            href="/blend-modes/intermediate/index"
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-200 hover:border-pink-400"
          >
            <div className="text-center">
              <div className="text-6xl font-bold text-pink-600 mb-4 group-hover:scale-110 transition-transform">
                15
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">Intermediate Examples</h2>
              <p className="text-gray-600 mb-4">
                Explore animations, interactions, and more complex blend mode techniques.
              </p>
              <div className="text-pink-600 font-semibold group-hover:underline">
                View Examples →
              </div>
            </div>
          </Link>

          {/* Advanced Examples */}
          <Link
            href="/blend-modes/advanced/index"
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-rose-200 hover:border-rose-400"
          >
            <div className="text-center">
              <div className="text-6xl font-bold text-rose-600 mb-4 group-hover:scale-110 transition-transform">
                15
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">Advanced Examples</h2>
              <p className="text-gray-600 mb-4">
                Master complex compositions, 3D effects, and cutting-edge blend mode techniques.
              </p>
              <div className="text-rose-600 font-semibold group-hover:underline">
                View Examples →
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>Total: 40 examples covering all aspects of CSS blend modes</p>
        </div>
      </main>
    </div>
  );
}

