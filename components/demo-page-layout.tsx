"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";

interface DemoPageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  concepts: string[];
  technicalDetails: string;
  category: "basic" | "intermediate" | "advanced";
  demoNumber: number;
}

export function DemoPageLayout({
  children,
  title,
  description,
  concepts,
  technicalDetails,
  category,
  demoNumber,
}: DemoPageLayoutProps) {
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
  const categoryPath = `/${category}`;

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
                    <h3 className="font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Concepts</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
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
        </Sidebar>
        <SidebarInset>
          <div className="p-4">
            <div className="mb-4">
              <SidebarTrigger />
            </div>
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

