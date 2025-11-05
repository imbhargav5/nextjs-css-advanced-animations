"use client";

export function ImageCropDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Image Crop with Clip-Path</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Diamond crop */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Diamond Crop</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                alt="Mountain"
                className="w-full h-64 object-cover"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Octagon crop */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Octagon Crop</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                alt="Mountain"
                className="w-full h-64 object-cover"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Inset crop */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Frame Crop</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                alt="Mountain"
                className="w-full h-64 object-cover"
                style={{
                  clipPath: "inset(10% 15% 10% 15%)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Arrow crop */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Arrow Shape</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                alt="Mountain"
                className="w-full h-64 object-cover"
                style={{
                  clipPath: "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`img {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
/* Creates diamond shape without image editing */
/* Non-destructive cropping */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

