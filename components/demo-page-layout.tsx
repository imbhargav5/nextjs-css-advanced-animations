"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Github } from "lucide-react";
import Link from "next/link";

interface DemoPageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  concepts: string[];
  technicalDetails: string;
  category: "basic" | "intermediate" | "advanced";
  demoNumber: number;
  section?: "clip-path" | "blend-modes" | "backdrop-filter";
}

export function DemoPageLayout({
  children,
  title,
  description,
  concepts,
  technicalDetails,
  category,
  demoNumber,
  section = "clip-path",
}: DemoPageLayoutProps) {
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
  const categoryPath = `/${section}/${category}`;

  const sectionTitles = {
    "clip-path": "Clip-Path",
    "blend-modes": "Blend Modes",
    "backdrop-filter": "Backdrop Filter",
  };

  const sectionTitle = sectionTitles[section];

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-2">
              <SidebarTrigger />
              <span className="font-semibold">Demo Info</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Demo Information</SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="space-y-4 p-4">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="default">{demoNumber}</Badge>
                      <Badge variant="outline" className="capitalize">{category}</Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Concepts</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                      {concepts.map((concept, idx) => (
                        <li key={idx}>{concept}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technical Details</h4>
                    <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
                      <code>{technicalDetails}</code>
                    </pre>
                  </div>

                  <div className="pt-4 border-t">
                    <Link
                      href={`${categoryPath}/index`}
                      className="text-sm text-primary hover:underline"
                    >
                      ← Back to {categoryTitle} Examples
                    </Link>
                  </div>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarSeparator />
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="View on GitHub">
                  <Link
                    href="https://github.com/imbhargav5/nextjs-css-advanced-animations"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-4" />
                    <span>Found a bug or want to contribute? Check out the GitHub repo</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="p-4">
            <div className="mb-4 flex items-center gap-4">
              <SidebarTrigger />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href={`/${section}`}>{sectionTitle}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href={`${categoryPath}/index`}>{categoryTitle}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

