#!/usr/bin/env node

/**
 * Script to help identify demos that need refactoring to use DemoBlock component
 */

const fs = require('fs');
const path = require('path');

function findDemoFiles(dir, files = []) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      // Skip index directories
      if (item.name !== 'index' && item.name !== 'node_modules' && item.name !== '.next') {
        findDemoFiles(fullPath, files);
      }
    } else if (item.isFile() && item.name.endsWith('.tsx') && item.name !== 'page.tsx') {
      // Check if file needs refactoring (doesn't import DemoBlock)
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('export function') && !content.includes('import { DemoBlock }')) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

// Find all demo files that need refactoring
const appDir = path.join(__dirname, '..', 'app');
const demoFiles = findDemoFiles(appDir);

console.log(`Found ${demoFiles.length} demo files that need refactoring:\n`);

// Group by section
const grouped = {};
for (const file of demoFiles) {
  const match = file.match(/app\/([^/]+)\/([^/]+)\//);
  if (match) {
    const section = match[1];
    const level = match[2];
    const key = `${section}/${level}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(file);
  }
}

// Display grouped results
for (const [key, files] of Object.entries(grouped)) {
  console.log(`\n${key}: ${files.length} files`);
  files.forEach(f => console.log(`  - ${path.basename(f)}`));
}

console.log(`\n\nTotal: ${demoFiles.length} files need refactoring`);
