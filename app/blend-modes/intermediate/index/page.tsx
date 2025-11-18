import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Intermediate Examples",
  description: "Explore animations, interactions, and more complex blend mode techniques with these 15 examples.",
  category: "blend-modes",
  level: "intermediate",
});

const intermediateDemos = [
  { number: 1, slug: "1-image-overlay-blend-demo", title: "Image Overlay Blend" },
  { number: 2, slug: "2-text-blend-modes-demo", title: "Text Blend Modes" },
  { number: 3, slug: "3-multiple-blend-layers-demo", title: "Multiple Blend Layers" },
  { number: 4, slug: "4-blend-mode-transitions-demo", title: "Blend Mode Transitions" },
  { number: 5, slug: "5-gradient-blend-modes-demo", title: "Gradient Blend Modes" },
  { number: 6, slug: "6-hover-blend-effects-demo", title: "Hover Blend Effects" },
  { number: 7, slug: "7-background-blend-mode-demo", title: "Background Blend Mode" },
  { number: 8, slug: "8-isolated-blend-groups-demo", title: "Isolated Blend Groups" },
  { number: 9, slug: "9-blend-mode-with-filters-demo", title: "Blend Mode with Filters" },
  { number: 10, slug: "10-scroll-triggered-blend-demo", title: "Scroll Triggered Blend" },
  { number: 11, slug: "11-dynamic-blend-switching-demo", title: "Dynamic Blend Switching" },
  { number: 12, slug: "12-blend-mode-with-gradients-demo", title: "Blend Mode with Gradients" },
  { number: 13, slug: "13-text-outline-blend-demo", title: "Text Outline Blend" },
  { number: 14, slug: "14-blend-mode-animations-demo", title: "Blend Mode Animations" },
  { number: 15, slug: "15-blend-mode-layers-demo", title: "Blend Mode Layers" },
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
                <Link href="/blend-modes">Blend Modes</Link>
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
            <h1 className="text-4xl font-bold mb-4">Intermediate Blend Modes Examples</h1>
            <p className="text-lg text-muted-foreground">
              Explore animations, interactions, and more complex blend mode techniques with these 15 examples.
            </p>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {intermediateDemos.length} Examples
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {intermediateDemos.map((demo) => (
            <Link key={demo.number} href={`/blend-modes/intermediate/${demo.slug}`} className="group">
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

