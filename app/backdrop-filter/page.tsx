import Link from "next/link";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Backdrop Filter Examples",
  description: "Explore 40 diverse examples of CSS backdrop-filter, from basic effects to advanced compositions and interactions.",
};

const levels = [
  {
    title: "Basic Examples",
    href: "/backdrop-filter/basic/index",
    count: 10,
    description: "Learn the fundamentals of backdrop-filter with blur, brightness, contrast, and more.",
    level: "basic",
  },
  {
    title: "Intermediate Examples",
    href: "/backdrop-filter/intermediate/index",
    count: 15,
    description: "Explore animations, interactions, and practical backdrop-filter applications.",
    level: "intermediate",
  },
  {
    title: "Advanced Examples",
    href: "/backdrop-filter/advanced/index",
    count: 15,
    description: "Master complex compositions, 3D effects, and cutting-edge backdrop-filter techniques.",
    level: "advanced",
  },
];

export default function BackdropFilterIndexPage() {
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
              <BreadcrumbPage>Backdrop Filter</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Backdrop Filter Examples</h1>
          <p className="text-lg text-muted-foreground">
            Explore 40 diverse examples of CSS backdrop-filter, from basic effects to advanced compositions and interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {levels.map((level) => (
            <Link key={level.level} href={level.href} className="group">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{level.count} Examples</Badge>
                    <Badge variant="outline" className="capitalize">{level.level}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{level.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{level.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <span className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Examples
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

