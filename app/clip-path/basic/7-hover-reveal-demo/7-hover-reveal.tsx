"use client";

import { DemoBlock } from "@/components/demo-block";

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
          clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
          transition: clip-path 0.3s ease-out;
        }
        .group:hover .top-reveal {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        .horizontal-reveal {
          clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
          transition: clip-path 0.3s ease-out;
        }
        .group:hover .horizontal-reveal {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        .diagonal-reveal {
          clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%);
          transition: clip-path 0.3s ease-out;
        }
        .group:hover .diagonal-reveal {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        .diagonal-reveal-2 {
          clip-path: polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%);
          transition: clip-path 0.3s ease-out;
        }
        .group:hover .diagonal-reveal-2 {
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
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold mb-8">Hover Reveal Effect</h2>

        <DemoBlock
          title="Circle Reveal"
          code={`/* CSS */
.circle-reveal {
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 0.3s ease-out;
}
.group:hover .circle-reveal {
  clip-path: circle(150% at 50% 50%);
}

/* JSX */
<div className="group relative w-full h-64 cursor-pointer">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500" />
  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 circle-reveal" />
</div>`}
        >
          <div className="flex justify-center">
            <div className="group relative w-64 h-64 overflow-hidden rounded-lg cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 circle-reveal" />
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Top Reveal"
          code={`/* CSS */
.top-reveal {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transition: clip-path 0.3s ease-out;
}
.group:hover .top-reveal {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

/* JSX */
<div className="group relative w-full h-64 cursor-pointer">
  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 top-reveal" />
</div>`}
        >
          <div className="flex justify-center">
            <div className="group relative w-64 h-64 overflow-hidden rounded-lg cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 top-reveal" />
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Horizontal Reveal"
          code={`/* CSS */
.horizontal-reveal {
  clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
  transition: clip-path 0.3s ease-out;
}
.group:hover .horizontal-reveal {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

/* JSX */
<div className="group relative w-full h-64 cursor-pointer">
  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500" />
  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 horizontal-reveal" />
</div>`}
        >
          <div className="flex justify-center">
            <div className="group relative w-64 h-64 overflow-hidden rounded-lg cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 horizontal-reveal" />
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Diagonal Reveal"
          code={`/* CSS */
.diagonal-reveal {
  clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%);
  transition: clip-path 0.3s ease-out;
}
.group:hover .diagonal-reveal {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

/* JSX */
<div className="group relative w-full h-64 cursor-pointer">
  <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500" />
  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-pink-500 diagonal-reveal" />
</div>`}
        >
          <div className="flex justify-center">
            <div className="group relative w-64 h-64 overflow-hidden rounded-lg cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-pink-500 diagonal-reveal" />
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Diagonal Reveal 2"
          code={`/* CSS */
.diagonal-reveal-2 {
  clip-path: polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%);
  transition: clip-path 0.3s ease-out;
}
.group:hover .diagonal-reveal-2 {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

/* JSX */
<div className="group relative w-full h-64 cursor-pointer">
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-blue-500" />
  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 diagonal-reveal-2" />
</div>`}
        >
          <div className="flex justify-center">
            <div className="group relative w-64 h-64 overflow-hidden rounded-lg cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-blue-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 diagonal-reveal-2" />
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Ellipse Reveal"
          code={`/* CSS */
.ellipse-reveal {
  clip-path: ellipse(0% 0% at 50% 50%);
  transition: clip-path 0.3s ease-out;
}
.group:hover .ellipse-reveal {
  clip-path: ellipse(100% 100% at 50% 50%);
}

/* JSX */
<div className="group relative w-full h-64 cursor-pointer">
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500" />
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 ellipse-reveal" />
</div>`}
        >
          <div className="flex justify-center">
            <div className="group relative w-64 h-64 overflow-hidden rounded-lg cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 ellipse-reveal" />
            </div>
          </div>
        </DemoBlock>
      </div>
    </>
  );
}
