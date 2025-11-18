import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Advanced Examples",
  description: "Master complex compositions, 3D effects, and cutting-edge backdrop-filter techniques with these 15 examples.",
  category: "backdrop-filter",
  level: "advanced",
});

const advancedDemos = [
  { number: 1, slug: "1-complex-multi-layer-blur-demo", title: "Complex Multi-Layer Blur" },
  { number: 2, slug: "2-interactive-filter-editor-demo", title: "Interactive Filter Editor" },
  { number: 3, slug: "3-morphing-filter-transitions-demo", title: "Morphing Filter Transitions" },
  { number: 4, slug: "4-3d-perspective-effects-demo", title: "3D Perspective Effects" },
  { number: 5, slug: "5-backdrop-filter-with-clip-path-demo", title: "Backdrop Filter with Clip-Path" },
  { number: 6, slug: "6-animated-filter-sequences-demo", title: "Animated Filter Sequences" },
  { number: 7, slug: "7-pattern-overlays-demo", title: "Pattern Overlays" },
  { number: 8, slug: "8-backdrop-filter-with-svg-demo", title: "Backdrop Filter with SVG" },
  { number: 9, slug: "9-reveal-effects-demo", title: "Reveal Effects" },
  { number: 10, slug: "10-cursor-following-effects-demo", title: "Cursor Following Effects" },
  { number: 11, slug: "11-parallax-backdrop-effects-demo", title: "Parallax Backdrop Effects" },
  { number: 12, slug: "12-complex-filter-compositions-demo", title: "Complex Filter Compositions" },
  { number: 13, slug: "13-backdrop-filter-with-blend-modes-demo", title: "Backdrop Filter with Blend Modes" },
  { number: 14, slug: "14-svg-path-backdrop-demo", title: "SVG Path Backdrop" },
  { number: 15, slug: "15-backdrop-filter-transforms-demo", title: "Backdrop Filter Transforms" },
];

export default function AdvancedIndexPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/backdrop-filter">Backdrop Filter</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Advanced</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Advanced Backdrop Filter Examples</h1>
            <p className="text-lg text-muted-foreground">
              Master complex compositions, 3D effects, and cutting-edge backdrop-filter techniques with these 15 examples.
            </p>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {advancedDemos.length} Examples
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedDemos.map((demo) => (
            <Link key={demo.number} href={`/backdrop-filter/advanced/${demo.slug}`} className="group">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge className="text-lg px-3 py-1">{demo.number}</Badge>
                    <CardTitle className="text-xl">{demo.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardFooter>
                  <span className="text-sm text-muted-foreground flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Demo
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

