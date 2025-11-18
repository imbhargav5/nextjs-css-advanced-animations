import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Intermediate Examples",
  description: "Explore animations, interactions, and practical backdrop-filter applications with these 15 examples.",
  category: "backdrop-filter",
  level: "intermediate",
});

const intermediateDemos = [
  { number: 1, slug: "1-animated-blur-transitions-demo", title: "Animated Blur Transitions" },
  { number: 2, slug: "2-glass-morphism-card-demo", title: "Glass Morphism Card" },
  { number: 3, slug: "3-modal-overlay-demo", title: "Modal Overlay" },
  { number: 4, slug: "4-navigation-bar-demo", title: "Navigation Bar" },
  { number: 5, slug: "5-scroll-triggered-blur-demo", title: "Scroll-Triggered Blur" },
  { number: 6, slug: "6-hover-filter-effects-demo", title: "Hover Filter Effects" },
  { number: 7, slug: "7-dropdown-menus-demo", title: "Dropdown Menus" },
  { number: 8, slug: "8-card-hover-effects-demo", title: "Card Hover Effects" },
  { number: 9, slug: "9-sidebar-with-blur-demo", title: "Sidebar with Blur" },
  { number: 10, slug: "10-filter-combinations-demo", title: "Filter Combinations" },
  { number: 11, slug: "11-dynamic-filter-switching-demo", title: "Dynamic Filter Switching" },
  { number: 12, slug: "12-gradient-backdrop-demo", title: "Gradient Backdrop" },
  { number: 13, slug: "13-text-overlay-effects-demo", title: "Text Overlay Effects" },
  { number: 14, slug: "14-image-galleries-demo", title: "Image Galleries" },
  { number: 15, slug: "15-interactive-filter-control-demo", title: "Interactive Filter Control" },
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
                <Link href="/backdrop-filter">Backdrop Filter</Link>
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
            <h1 className="text-4xl font-bold mb-4">Intermediate Backdrop Filter Examples</h1>
            <p className="text-lg text-muted-foreground">
              Explore animations, interactions, and practical backdrop-filter applications with these 15 examples.
            </p>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {intermediateDemos.length} Examples
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {intermediateDemos.map((demo) => (
            <Link key={demo.number} href={`/backdrop-filter/intermediate/${demo.slug}`} className="group">
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

