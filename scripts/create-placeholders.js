// Simple placeholder generator - creates SVG files that can be used temporarily
const fs = require('fs');
const path = require('path');

const projects = [
  { name: 'trajectory', count: 4, color: '#6366f1', title: 'TRAJECTORY.AI' },
  { name: 'vq', count: 2, color: '#8b5cf6', title: 'VQ' },
  { name: 'stitchable', count: 1, color: '#ec4899', title: 'STITCHABLE' },
  { name: 'postpal', count: 1, color: '#06b6d4', title: 'POSTPAL' },
  { name: 'blackjack', count: 1, color: '#10b981', title: 'BLACKJACK AI' }
];

const outputDir = path.join(__dirname, '../public/projects');

// Ensure directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

projects.forEach(project => {
  for (let i = 1; i <= project.count; i++) {
    const svg = `<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="800" fill="${project.color}"/>
  <text x="600" y="380" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="white" text-anchor="middle">${project.title}</text>
  <text x="600" y="460" font-family="Arial, sans-serif" font-size="40" fill="rgba(255,255,255,0.8)" text-anchor="middle">Placeholder Image ${i}</text>
</svg>`;
    
    const filename = `${project.name}-${i}.svg`;
    fs.writeFileSync(path.join(outputDir, filename), svg);
    console.log(`Created ${filename}`);
  }
});

console.log('\nPlaceholder images created! Replace these SVG files with your actual PNG/JPG images.');
