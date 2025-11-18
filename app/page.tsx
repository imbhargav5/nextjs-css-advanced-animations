import Link from "next/link";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  description: "Explore diverse CSS techniques and examples organized by category including clip-path, blend modes, and backdrop-filter effects.",
};

const sections = [
  {
    name: "Clip-Path",
    href: "/clip-path",
    description: "Explore CSS clip-path examples from basic shapes to advanced animations",
    icon: "✂️",
  },
  {
    name: "Blend Modes",
    href: "/blend-modes",
    description: "Explore CSS blend modes examples from basic effects to advanced compositions",
    icon: "🎨",
  },
  {
    name: "Backdrop Filter",
    href: "/backdrop-filter",
    description: "Explore CSS backdrop-filter examples from basic effects to advanced compositions",
    icon: "✨",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-center py-16 px-8">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold">
            CSS Examples Showcase
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore diverse CSS techniques and examples organized by category.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {sections.map((section) => (
            <Link key={section.name} href={section.href} className="group">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <CardTitle className="text-2xl">{section.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {section.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="justify-center">
                  <span className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Section
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
