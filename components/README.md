# Projects Section

## Overview
The projects section features a beautiful stacking card effect as you scroll, with each card displaying project details and images.

## Customizing Projects

Edit `components/ProjectsSection.tsx` to add or modify projects. Each project has:

- **title**: Project name
- **description**: Detailed description of what you built
- **tags**: Array of technologies used
- **demoLink**: URL to live demo (optional - button only shows if provided)
- **githubLink**: URL to GitHub repo (optional - button only shows if provided)
- **images**: Array of image paths (optional)
  - 1 image: Takes up full right side
  - Multiple images: Auto-adjusts to fit, stacked vertically
- **gradient**: Tailwind gradient classes for card background

## Adding Project Images

1. Place your project images in the `public/projects/` folder
2. Reference them in the project config like: `images: ["/projects/my-project-1.jpg"]`

Example:
```typescript
{
  title: "My Project",
  description: "Project description...",
  tags: ["React", "TypeScript"],
  demoLink: "https://demo.com",
  githubLink: "https://github.com/user/repo",
  images: ["/projects/screenshot1.jpg", "/projects/screenshot2.jpg"],
  gradient: "bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800"
}
```

## Available Gradients

```typescript
// Purple/Indigo
"bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800"

// Blue/Cyan
"bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700"

// Green/Emerald
"bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700"

// Orange/Red
"bg-gradient-to-br from-orange-600 via-red-600 to-pink-700"

// Gray/Dark
"bg-gradient-to-br from-slate-700 via-gray-800 to-zinc-900"

// Pink/Purple
"bg-gradient-to-br from-pink-600 via-purple-600 to-violet-700"
```
