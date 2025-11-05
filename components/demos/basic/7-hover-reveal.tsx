"use client";

export function HoverRevealDemo() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .circle-reveal {
          clip-path: circle(0% at 50% 50%);
          transition: clip-path 0.3s ease-out;
        }
        .group:hover .circle-reveal {
          clip-path: circle(150% at 50% 50%);
        }
        .top-reveal {
          clip-path: inset(100% 0% 0% 0%);
          transition: clip-path 0.3s ease-out;
        }
        .group:hover .top-reveal {
          clip-path: inset(0% 0% 0% 0%);
        }
        .diagonal-reveal {
          clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
          transition: clip-path 0.3s ease-out;
        }
        .group:hover .diagonal-reveal {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        .ellipse-reveal {
          clip-path: ellipse(0% 0% at 50% 50%);
          transition: clip-path 0.3s ease-out;
        }
        .group:hover .ellipse-reveal {
          clip-path: ellipse(100% 100% at 50% 50%);
        }
      `}} />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-4xl w-full space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">Hover Reveal Effect</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example 1: Circle reveal */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Circle Reveal</h3>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="group relative w-full h-64 overflow-hidden rounded-lg cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 circle-reveal" />
                </div>
              </div>
            </div>

            {/* Example 2: Top reveal */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Top Reveal</h3>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="group relative w-full h-64 overflow-hidden rounded-lg cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 top-reveal" />
                </div>
              </div>
            </div>

            {/* Example 3: Diagonal reveal */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Diagonal Reveal</h3>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="group relative w-full h-64 overflow-hidden rounded-lg cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 diagonal-reveal" />
                </div>
              </div>
            </div>

            {/* Example 4: Ellipse reveal */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Ellipse Reveal</h3>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="group relative w-full h-64 overflow-hidden rounded-lg cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-pink-500 ellipse-reveal" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Code Example</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
              <code>{`/* Use CSS transitions with clip-path */
.element {
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 0.3s ease-out;
}

.element:hover {
  clip-path: circle(150% at 50% 50%);
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}

