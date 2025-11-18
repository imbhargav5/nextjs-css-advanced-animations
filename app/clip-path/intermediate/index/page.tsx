import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Intermediate Examples",
  description: "Explore intermediate techniques with these 15 examples covering animations, interactions, and complex shapes.",
  category: "clip-path",
  level: "intermediate",
});

const intermediateDemos = [
  { number: 1, slug: "1-animated-circle-expansion-demo", title: "Animated Circle Expansion" },
  { number: 2, slug: "2-polygon-morphing-demo", title: "Polygon Morphing" },
  { number: 3, slug: "3-clip-with-transforms-demo", title: "Clip with Transforms" },
  { number: 4, slug: "4-responsive-polygon-demo", title: "Responsive Polygon" },
  { number: 5, slug: "5-hover-reveal-advanced-demo", title: "Advanced Hover Reveal" },
  { number: 6, slug: "6-layered-polygons-demo", title: "Layered Polygons" },
  { number: 7, slug: "7-svg-path-clip-demo", title: "SVG Path Clip" },
  { number: 8, slug: "8-gradient-clip-demo", title: "Gradient Clip" },
  { number: 9, slug: "9-text-clipping-demo", title: "Text Clipping" },
  { number: 10, slug: "10-scroll-triggered-demo", title: "Scroll Triggered" },
  { number: 11, slug: "11-inset-animation-demo", title: "Inset Animation" },
  { number: 12, slug: "12-polygon-fan-demo", title: "Polygon Fan" },
  { number: 13, slug: "13-mask-reveal-demo", title: "Mask Reveal" },
  { number: 14, slug: "14-dynamic-polygon-demo", title: "Dynamic Polygon" },
  { number: 15, slug: "15-backdrop-filter-clip-demo", title: "Backdrop Filter Clip" },
];

export default function IntermediateIndexPage() {
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
                <Link href="/clip-path">Clip-Path</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Intermediate</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Intermediate Clip-Path Examples</h1>
            <p className="text-lg text-muted-foreground">
              Explore intermediate techniques with these 15 examples covering animations, interactions, and complex shapes.
            </p>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {intermediateDemos.length} Examples
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {intermediateDemos.map((demo) => (
            <Link key={demo.number} href={`/clip-path/intermediate/${demo.slug}`} className="group">
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

