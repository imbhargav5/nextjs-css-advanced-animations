"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Code2 } from "lucide-react";

interface DemoBlockProps {
  title: string;
  code: string;
  children: React.ReactNode;
}

export function DemoBlock({ title, code, children }: DemoBlockProps) {
  return (
    <div className="mb-8 border rounded-lg overflow-hidden bg-card">
      <Tabs defaultValue="preview" className="w-full">
        {/* Custom header with title on left, tab triggers on right */}
        <div className="flex items-center justify-between border-b px-4 py-3 bg-muted/30">
          <h3 className="text-lg font-semibold">{title}</h3>
          <TabsList>
            <TabsTrigger value="preview" className="gap-2">
              <Eye className="size-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="gap-2">
              <Code2 className="size-4" />
              Code
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Preview tab content */}
        <TabsContent value="preview" className="m-0 p-6 min-h-[300px]">
          {children}
        </TabsContent>

        {/* Code tab content */}
        <TabsContent value="code" className="m-0 p-6">
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">{code}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  );
}
