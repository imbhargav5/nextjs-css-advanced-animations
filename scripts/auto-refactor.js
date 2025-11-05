#!/usr/bin/env node

/**
 * Automated script to refactor demo files to use DemoBlock component
 */

const fs = require('fs');
const path = require('path');

function extractDemoBlocks(content) {
  // Extract the main title
  const titleMatch = content.match(/<h2[^>]*>([^<]+)<\/h2>/);
  const mainTitle = titleMatch ? titleMatch[1] : '';

  // Extract individual examples
  const examples = [];
  const exampleRegex = /{\/\* Example \d+:([^*]+)\*\/}[\s\S]*?<h3[^>]*>([^<]+)<\/h3>[\s\S]*?(?={\/\* Example \d+:|<div className="mt-8)/g;

  let match;
  let remainingContent = content;

  // Find all example blocks
  const exampleMatches = content.matchAll(/{\/\* Example \d+:([^*]+)\*\/}([\s\S]*?)(?={\/\* Example \d+:|<div className="mt-8 bg-white|<\/div>\s+<\/div>\s+<\/div>\s+\);)/g);

  for (const match of exampleMatches) {
    const comment = match[1].trim();
    const exampleCode = match[2];

    // Extract title from h3
    const h3Match = exampleCode.match(/<h3[^>]*>([^<]+)<\/h3>/);
    const title = h3Match ? h3Match[1] : comment;

    // Extract the JSX content (the actual demo)
    // Find the inner content between the shadow-lg div
    const contentMatch = exampleCode.match(/<div className="bg-white p-6 rounded-lg shadow-lg">([\s\S]*?)<\/div>\s+<\/div>/);
    if (contentMatch) {
      examples.push({
        title,
        content: contentMatch[1].trim()
      });
    }
  }

  // Extract code example from bottom
  const codeMatch = content.match(/<pre[^>]*>\s*<code>([^<]+)<\/code>/);
  const codeExample = codeMatch ? codeMatch[1] : '';

  return { mainTitle, examples, codeExample };
}

function generateRefactoredCode(componentName, data) {
  const { mainTitle, examples, codeExample } = data;

  let code = `"use client";\n\nimport { DemoBlock } from "@/components/demo-block";\n\n`;
  code += `export function ${componentName}() {\n`;
  code += `  return (\n`;
  code += `    <div className="max-w-6xl mx-auto space-y-8">\n`;
  code += `      <h2 className="text-3xl font-bold mb-8">${mainTitle}</h2>\n\n`;

  // Generate DemoBlock for each example
  examples.forEach((example, idx) => {
    // Clean up the content
    const cleanContent = example.content
      .replace(/\n\s+/g, '\n        ');

    // Create a simplified code snippet
    const codeSnippet = cleanContent
      .replace(/"/g, '"')
      .trim();

    code += `      <DemoBlock\n`;
    code += `        title="${example.title}"\n`;
    code += `        code={\`${codeSnippet}\n\n${idx === 0 && codeExample ? codeExample : ''}\`}\n`;
    code += `      >\n`;
    code += `        <div className="flex justify-center">\n`;
    code += `          ${cleanContent}\n`;
    code += `        </div>\n`;
    code += `      </DemoBlock>\n\n`;
  });

  code += `    </div>\n`;
  code += `  );\n`;
  code += `}\n`;

  return code;
}

function refactorFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Skip if already refactored
    if (content.includes('import { DemoBlock }')) {
      console.log(`⏭️  Skipped (already refactored): ${path.basename(filePath)}`);
      return false;
    }

    // Extract component name
    const componentMatch = content.match(/export function (\w+)/);
    if (!componentMatch) {
      console.log(`⚠️  No component found in: ${path.basename(filePath)}`);
      return false;
    }

    const componentName = componentMatch[1];

    // Extract demo data
    const data = extractDemoBlocks(content);

    if (data.examples.length === 0) {
      console.log(`⚠️  No examples found in: ${path.basename(filePath)}`);
      return false;
    }

    // Generate refactored code
    const refactoredCode = generateRefactoredCode(componentName, data);

    // Write back to file
    fs.writeFileSync(filePath, refactoredCode, 'utf8');
    console.log(`✅ Refactored: ${path.basename(filePath)} (${data.examples.length} examples)`);
    return true;

  } catch (error) {
    console.error(`❌ Error refactoring ${path.basename(filePath)}:`, error.message);
    return false;
  }
}

function findAndRefactorDemos(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  let refactoredCount = 0;

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      if (item.name !== 'index' && item.name !== 'node_modules' && item.name !== '.next' && item.name !== 'scripts') {
        refactoredCount += findAndRefactorDemos(fullPath);
      }
    } else if (item.isFile() && item.name.endsWith('.tsx') && item.name !== 'page.tsx') {
      if (refactorFile(fullPath)) {
        refactoredCount++;
      }
    }
  }

  return refactoredCount;
}

// Main execution
const appDir = path.join(__dirname, '..', 'app');
console.log('🚀 Starting automated refactoring...\n');

const refactoredCount = findAndRefactorDemos(appDir);

console.log(`\n✨ Refactoring complete! Processed ${refactoredCount} files.`);
