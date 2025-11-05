"use client";

import { useEffect, useState } from "react";

export function ScrollTriggeredBlurDemo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blurAmount = Math.min(scrollY / 10, 30);

  return (
    <div className="flex flex-col items-center justify-center min-h-[200vh] p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Scroll-Triggered Blur</h2>
        
        <div className="space-y-4 mb-32">
          <p className="text-gray-900 text-center">Scroll down to see blur intensity change</p>
        </div>

        {/* Fixed element with dynamic blur */}
        <div className="sticky top-8 z-10">
          <div
            className="bg-white/20 rounded-xl shadow-xl p-8 border border-white/30"
            style={{
              backdropFilter: `blur(${blurAmount}px)`,
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Dynamic Blur: {blurAmount.toFixed(0)}px
            </h3>
            <p className="text-white/90">
              This element's blur increases as you scroll down the page.
            </p>
          </div>
        </div>

        <div className="h-screen flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
              <code>{`const blurAmount = Math.min(scrollY / 10, 30);
backdrop-filter: blur(\${blurAmount}px);
/* Blur intensity changes based on scroll position */`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

