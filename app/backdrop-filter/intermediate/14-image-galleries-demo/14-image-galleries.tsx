"use client";

export function ImageGalleriesDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Image Galleries</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Image with blur overlay */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Image with Blur Overlay</h3>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                alt="Landscape"
                className="w-full h-48 object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 bg-white/30 p-4"
                style={{
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="text-gray-800 font-semibold">Image Title</p>
                <p className="text-sm text-gray-700">Overlay with blur</p>
              </div>
            </div>
          </div>

          {/* Example 2: Image info overlay */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Info Overlay</h3>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                alt="Landscape"
                className="w-full h-48 object-cover"
              />
              <div
                className="absolute inset-0 bg-black/20 flex items-center justify-center"
                style={{
                  backdropFilter: "blur(5px)",
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-gray-800 font-semibold">Full Overlay</p>
                </div>
              </div>
            </div>
          </div>

          {/* Example 3: Hover overlay */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Hover Overlay</h3>
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                alt="Landscape"
                className="w-full h-48 object-cover"
              />
              <div
                className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  backdropFilter: "blur(8px)",
                }}
              >
                <p className="text-white font-semibold">Hover to reveal</p>
              </div>
            </div>
          </div>

          {/* Example 4: Card overlay */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Card Overlay</h3>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                alt="Landscape"
                className="w-full h-48 object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{
                  backdropFilter: "blur(15px) brightness(0.8)",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                <p className="text-white font-semibold">Gallery Item</p>
                <p className="text-sm text-white/90">Complex overlay effect</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`.image-overlay {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
}
/* Backdrop filters on image overlays */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

