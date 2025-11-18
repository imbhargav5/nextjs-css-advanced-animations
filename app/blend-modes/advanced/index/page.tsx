import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Advanced Examples",
  description: "Master complex compositions, 3D effects, and cutting-edge blend mode techniques with these 15 examples.",
  category: "blend-modes",
  level: "advanced",
});

const advancedDemos = [
  { number: 1, slug: "1-complex-multi-layer-blend-demo", title: "Complex Multi-Layer Blend" },
  { number: 2, slug: "2-interactive-blend-editor-demo", title: "Interactive Blend Editor" },
  { number: 3, slug: "3-blend-mode-morphing-demo", title: "Blend Mode Morphing" },
  { number: 4, slug: "4-3d-blend-effects-demo", title: "3D Blend Effects" },
  { number: 5, slug: "5-blend-mode-with-clipping-demo", title: "Blend Mode with Clipping" },
  { number: 6, slug: "6-animated-blend-transitions-demo", title: "Animated Blend Transitions" },
  { number: 7, slug: "7-blend-mode-patterns-demo", title: "Blend Mode Patterns" },
  { number: 8, slug: "8-blend-mode-with-svg-demo", title: "Blend Mode with SVG" },
  { number: 9, slug: "9-blend-mode-reveal-effects-demo", title: "Blend Mode Reveal Effects" },
  { number: 10, slug: "10-cursor-following-blend-demo", title: "Cursor Following Blend" },
  { number: 11, slug: "11-parallax-blend-effects-demo", title: "Parallax Blend Effects" },
  { number: 12, slug: "12-complex-blend-compositions-demo", title: "Complex Blend Compositions" },
  { number: 13, slug: "13-blend-mode-filters-demo", title: "Blend Mode Filters" },
  { number: 14, slug: "14-svg-path-blend-demo", title: "SVG Path Blend" },
  { number: 15, slug: "15-blend-mode-transforms-demo", title: "Blend Mode Transforms" },
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
                <Link href="/blend-modes">Blend Modes</Link>
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
            <h1 className="text-4xl font-bold mb-4">Advanced Blend Modes Examples</h1>
            <p className="text-lg text-muted-foreground">
              Master complex compositions, 3D effects, and cutting-edge blend mode techniques with these 15 examples.
            </p>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {advancedDemos.length} Examples
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedDemos.map((demo) => (
            <Link key={demo.number} href={`/blend-modes/advanced/${demo.slug}`} className="group">
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

