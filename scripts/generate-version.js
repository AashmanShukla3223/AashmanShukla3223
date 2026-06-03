import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));

const manifest = {
  version: pkg.version,
  buildTime: new Date().toISOString(),
  homepage: 'https://aashman-homepage.vercel.app',
};

if (!existsSync('public')) mkdirSync('public', { recursive: true });
writeFileSync('public/version.json', JSON.stringify(manifest, null, 2));

console.log(`✓ Generated public/version.json → v${pkg.version}`);
