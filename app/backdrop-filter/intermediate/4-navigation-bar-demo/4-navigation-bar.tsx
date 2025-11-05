"use client";

export function NavigationBarDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Glassmorphism Navigation Bar</h2>
        
        {/* Example 1: Fixed navbar */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Fixed Glass Navbar</h3>
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 -z-10 h-32" />
            <nav
              className="relative px-6 py-4 flex items-center justify-between border-b border-white/20"
              style={{
                backdropFilter: "blur(20px) saturate(180%)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="text-white font-bold text-xl">Logo</div>
              <div className="flex gap-4">
                <a href="#" className="text-white/90 hover:text-gray-900">Home</a>
                <a href="#" className="text-white/90 hover:text-gray-900">About</a>
                <a href="#" className="text-white/90 hover:text-gray-900">Contact</a>
              </div>
            </nav>
          </div>
        </div>

        {/* Example 2: Sticky navbar */}
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Sticky Glass Navbar</h3>
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 -z-10 h-32" />
            <nav
              className="relative px-6 py-4 flex items-center justify-between border-b border-white/30"
              style={{
                backdropFilter: "blur(15px) brightness(1.1)",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="text-white font-bold text-xl">Brand</div>
              <div className="flex gap-4">
                <a href="#" className="text-white/90 hover:text-gray-900">Services</a>
                <a href="#" className="text-white/90 hover:text-gray-900">Portfolio</a>
                <a href="#" className="text-white/90 hover:text-gray-900">Blog</a>
              </div>
            </nav>
          </div>
        </div>

        {/* Example 3: Compact navbar */}
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Compact Glass Navbar</h3>
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 -z-10 h-20" />
            <nav
              className="relative px-6 py-3 flex items-center justify-between"
              style={{
                backdropFilter: "blur(25px) saturate(200%)",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="text-white font-bold">Nav</div>
              <div className="flex gap-3 text-sm">
                <a href="#" className="text-white/90 hover:text-gray-900">Item 1</a>
                <a href="#" className="text-white/90 hover:text-gray-900">Item 2</a>
                <a href="#" className="text-white/90 hover:text-gray-900">Item 3</a>
              </div>
            </nav>
          </div>
        </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`nav {
  backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
/* Glassmorphism navigation bar */`}</code>
          </pre>
        </div>
      </div>
  );
}

