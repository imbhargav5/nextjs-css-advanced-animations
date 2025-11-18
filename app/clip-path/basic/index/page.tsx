import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Basic Examples",
  description: "Learn the fundamentals of CSS clip-path with these 10 basic examples.",
  category: "clip-path",
  level: "basic",
});

const basicDemos = [
  { number: 1, slug: "1-simple-circle-clip-demo", title: "Simple Circle Clip" },
  { number: 2, slug: "2-ellipse-clip-demo", title: "Ellipse Clip" },
  { number: 3, slug: "3-triangle-polygon-demo", title: "Triangle Polygon" },
  { number: 4, slug: "4-inset-rectangle-demo", title: "Inset Rectangle" },
  { number: 5, slug: "5-multiple-circles-demo", title: "Multiple Circles" },
  { number: 6, slug: "6-hexagon-polygon-demo", title: "Hexagon Polygon" },
  { number: 7, slug: "7-hover-reveal-demo", title: "Hover Reveal" },
  { number: 8, slug: "8-image-crop-demo", title: "Image Crop" },
  { number: 9, slug: "9-star-polygon-demo", title: "Star Polygon" },
  { number: 10, slug: "10-inset-rounded-demo", title: "Inset Rounded" },
];

export default function BasicIndexPage() {
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
              <BreadcrumbPage>Basic</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Basic Clip-Path Examples</h1>
            <p className="text-lg text-muted-foreground">
              Learn the fundamentals of CSS clip-path with these 10 basic examples.
            </p>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {basicDemos.length} Examples
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {basicDemos.map((demo) => (
            <Link key={demo.number} href={`/clip-path/basic/${demo.slug}`} className="group">
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

