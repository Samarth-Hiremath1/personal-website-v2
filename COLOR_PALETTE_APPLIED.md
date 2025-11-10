# Robot-Inspired Color Palette - Applied Changes

## Color Palette

### Core Colors
- **Background (Primary)**: `#0A0812` - Deep black-violet base
- **Surface / Card Background**: `#131024` - Slightly lighter dark surface
- **Card Background (Projects/Leadership)**: `#18132C` - Card-specific background
- **Primary Accent (Violet)**: `#6C1FFF` - Electric violet for emphasis
- **Highlight Text**: `#A85CFF` - Softer lilac-violet for keywords
- **Secondary Accent (Plum/Navy)**: `#2B1F3F` - Deep plum-navy blend
- **Text Primary**: `#FFFFFF` - Crisp white
- **Text Secondary**: `#B3A9C9` - Muted lavender-gray
- **Border / Divider**: `rgba(108, 31, 255, 0.2)` - Soft violet transparency
- **Subtle Glow**: `rgba(108, 31, 255, 0.3)` - Ambient glow for hover states

### Gradient Accent
- **Hot Gradient**: `linear-gradient(90deg, #FF007F 0%, #FF5E00 100%)` - Neon pink → orange for CTAs

### Globe Colors
- **Globe Base**: `#1A1728` - Deep graphite-violet
- **Arc Colors**: `#7B3EFF`, `#FF3D8A`, `#FF6B00` - Metallic violet, neon magenta, warm orange

## Applied Changes by Section

### Global Styles (globals.css)
- Updated body background to `#0A0812`
- Changed spotlight card backgrounds to `#131024`
- Updated borders to `rgba(108, 31, 255, 0.15)`
- Modified hover effects with new violet glow
- Added global transition: `0.25s ease-in-out`
- Updated glass-morphism effects with violet tints

### Tailwind Config
- Updated primary: `#6C1FFF`
- Updated secondary: `#A85CFF`
- Updated accent: `#2B1F3F`
- Updated dark: `#0A0812`
- Added surface: `#131024`
- Added card: `#18132C`
- Added text-primary: `#FFFFFF`
- Added text-secondary: `#B3A9C9`

### Hero Section
- Added radial gradient background: `radial-gradient(circle at 60% 40%, rgba(108, 31, 255, 0.25), transparent 70%)`
- Updated quote text colors
- Updated 3D model placeholder gradient
- Updated arrow color to `#6C1FFF`

### About Section
- Background: `#0D0A18`
- Text color: `#B3A9C9` with `letterSpacing: 0.3px`
- Highlighted keywords: `#A85CFF`
- Email link: `#6C1FFF`

### Globe (About Me)
- Globe color: `#1A1728` (metallic graphite-violet)
- Arc colors: `#7B3EFF`, `#FF3D8A`, `#FF6B00`
- Atmosphere: `#6C1FFF`
- Polygon color: `rgba(168, 92, 255, 0.3)`

### Professional Experience (Timeline)
- Background: `#0D0A18`
- Timeline line: `rgba(108, 31, 255, 0.3)` with gradient fill
- Logo borders: `#6C1FFF` with glow
- Text colors: `#FFFFFF` for headings, `#B3A9C9` for body
- Experience tags: `rgba(108, 31, 255, 0.1)` background with `#A85CFF` text

### Featured Projects
- Background gradient: `linear-gradient(180deg, #0A0812 0%, #131024 100%)`
- Card background: `#18132C`
- Card borders: `rgba(108, 31, 255, 0.15)`
- Card shadow: `0 0 20px rgba(108, 31, 255, 0.15)`
- Buttons: Hot gradient `linear-gradient(90deg, #FF007F 0%, #FF5E00 100%)`
- Tag backgrounds: `rgba(108, 31, 255, 0.2)` with `#A85CFF` text

### Leadership
- Background: `#131024`
- Card background: `#18132C`
- Card borders: `rgba(108, 31, 255, 0.15)`
- Card shadow: `0 0 20px rgba(108, 31, 255, 0.15)`
- Headings: `#FFFFFF` with hover to `#6C1FFF`
- Body text: `#B3A9C9`

### Navbar
- Text color: `#B3A9C9` with hover to `#FFFFFF`
- Contact button: Hot gradient with `boxShadow: 0 0 25px rgba(255,94,0,0.5)`

### Experience Menu (Bento Grid)
- Border dividers: `rgba(108, 31, 255, 0.2)`
- Hover background: Hot gradient
- Text: `#FFFFFF`

## Typography
- All headings: `font-weight: 700`, `color: #FFFFFF`
- All paragraphs: `font-weight: 400`, `color: #B3A9C9`, `letter-spacing: 0.3px`

## Hover Effects
- Scale: `1.03`
- Box shadow: `0 0 15px rgba(108, 31, 255, 0.4)`
- Transition: `0.25s ease-in-out`
