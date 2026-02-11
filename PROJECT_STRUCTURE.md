# 📁 Project Structure - Wedding Invitation

```
wedding-invitation-complete/
│
├── 📄 Configuration Files
│   ├── package.json                    # NPM dependencies & scripts
│   ├── tsconfig.json                   # TypeScript configuration
│   ├── next.config.js                  # Next.js configuration
│   ├── postcss.config.js               # PostCSS + Tailwind setup
│   ├── tailwind.config.ts              # Tailwind CSS theme
│   ├── .gitignore                      # Git ignore rules
│   └── .env.example                    # Environment variables template
│
├── 📂 app/ (Next.js App Router)
│   │
│   ├── 📄 layout.tsx                   # Root layout
│   │   └── Provides: Fonts, metadata, AudioProvider wrapper
│   │
│   ├── 📄 page.tsx                     # Main page
│   │   └── Entry point with VideoPreview + Sections
│   │
│   ├── 📄 globals.css                  # Global styles
│   │   ├── CSS variables (colors, fonts, spacing)
│   │   ├── Base styles & typography
│   │   ├── Animation keyframes
│   │   └── Utility classes
│   │
│   ├── 📂 components/
│   │   │
│   │   ├── 📄 VideoPreview.tsx         # Video modal component
│   │   │   ├── Features:
│   │   │   │   ├── Fullscreen video player
│   │   │   │   ├── Skip button with transition
│   │   │   │   ├── Play/pause toggle
│   │   │   │   ├── Progress bar
│   │   │   │   └── Auto-complete handler
│   │   │   └── Props: onComplete, videoUrl
│   │   │
│   │   └── 📂 sections/
│   │       │
│   │       ├── 📄 HeroSection.tsx      # Hero intro section
│   │       │   ├── Features:
│   │       │   │   ├── Fullscreen layout (100vh)
│   │       │   │   ├── Background image + overlay
│   │       │   │   ├── Couple names typography
│   │       │   │   ├── Wedding date & location
│   │       │   │   ├── Scroll indicator
│   │       │   │   └── Floating decorative elements
│   │       │   └── Status: ✅ Completed
│   │       │
│   │       ├── 📄 LoveStorySection.tsx # Horizontal timeline
│   │       │   ├── Features:
│   │       │   │   ├── Horizontal scrollable timeline
│   │       │   │   ├── Timeline cards with hover effects
│   │       │   │   ├── Modal detail view
│   │       │   │   ├── Left/right navigation buttons
│   │       │   │   ├── Auto-hide buttons at scroll ends
│   │       │   │   └── Fully responsive
│   │       │   └── Status: ✅ Completed
│   │       │
│   │       ├── 📄 CoupleSection.tsx    # Couple profile
│   │       │   ├── Features:
│   │       │   │   ├── 2-column layout (responsive)
│   │       │   │   ├── Profile photos with hover effects
│   │       │   │   ├── Bio, education, occupation
│   │       │   │   ├── Fun facts with animations
│   │       │   │   ├── Social media links
│   │       │   │   └── Detail cards grid
│   │       │   └── Status: ✅ Completed
│   │       │
│   │       ├── 📄 FamilySection.tsx    # (Template ready)
│   │       │   ├── Purpose: Display families from both sides
│   │       │   ├── Template: In IMPLEMENTATION_ROADMAP.md
│   │       │   └── Status: 📋 Ready to implement
│   │       │
│   │       ├── 📄 WeddingDetailsSection.tsx (Template ready)
│   │       │   ├── Purpose: Wedding info, schedule, location, maps
│   │       │   ├── Template: In IMPLEMENTATION_ROADMAP.md
│   │       │   └── Status: 📋 Ready to implement
│   │       │
│   │       ├── 📄 GallerySection.tsx   # (Template ready)
│   │       │   ├── Purpose: Photo gallery with masonry layout
│   │       │   ├── Template: In IMPLEMENTATION_ROADMAP.md
│   │       │   └── Status: 📋 Ready to implement
│   │       │
│   │       ├── 📄 CommentsSection.tsx  # (Template ready)
│   │       │   ├── Purpose: Guest book with comments
│   │       │   ├── Template: In IMPLEMENTATION_ROADMAP.md
│   │       │   └── Status: 📋 Ready to implement
│   │       │
│   │       └── 📄 ClosingSection.tsx   # (Template ready)
│   │           ├── Purpose: Thank you & closing section
│   │           ├── Template: In IMPLEMENTATION_ROADMAP.md
│   │           └── Status: 📋 Ready to implement
│   │
│   └── 📂 api/ (API Routes - Optional)
│       └── 📂 comments/
│           └── 📄 route.ts             # Comments API endpoint
│               └── Status: 📋 Template ready
│
├── 📂 lib/ (Library functions & utilities)
│   │
│   ├── 📄 constants.ts                 # All configuration & data
│   │   ├── COLORS                      # Design system colors
│   │   ├── TYPOGRAPHY                  # Font configuration
│   │   ├── SPACING                     # Spacing scale
│   │   ├── COUPLES                     # Couple data
│   │   ├── FAMILIES                    # Family data
│   │   ├── LOVE_STORY                  # Timeline data
│   │   ├── WEDDING_INFO                # Wedding details
│   │   ├── GALLERY                     # Gallery images
│   │   ├── INITIAL_COMMENTS            # Demo comments
│   │   └── TypeScript Interfaces
│   │
│   └── 📂 context/
│       └── 📄 AudioContext.tsx         # Background music context
│           ├── Features:
│           │   ├── Audio player control
│           │   ├── Play/pause toggle
│           │   ├── Volume control
│           │   ├── useAudio hook
│           │   └── AudioProvider component
│           └── Status: ✅ Completed
│
├── 📂 public/ (Static assets)
│   │
│   ├── 📂 videos/
│   │   └── prewedding.mp4              # Pre-wedding video (add yours)
│   │
│   ├── 📂 images/
│   │   ├── 📂 hero/
│   │   │   └── hero-bg.jpg             # Hero background image
│   │   │
│   │   ├── 📂 couples/
│   │   │   ├── groom.jpg               # Groom photo
│   │   │   └── bride.jpg               # Bride photo
│   │   │
│   │   ├── 📂 families/
│   │   │   ├── groom-father.jpg
│   │   │   ├── groom-mother.jpg
│   │   │   ├── groom-sister.jpg
│   │   │   ├── groom-brother.jpg
│   │   │   ├── bride-father.jpg
│   │   │   ├── bride-mother.jpg
│   │   │   ├── bride-sister.jpg
│   │   │   └── bride-brother.jpg
│   │   │
│   │   ├── 📂 love-story/
│   │   │   ├── 2020.jpg                # 6 timeline photos
│   │   │   ├── 2021.jpg
│   │   │   ├── 2021b.jpg
│   │   │   ├── 2022.jpg
│   │   │   ├── 2023.jpg
│   │   │   └── 2024.jpg
│   │   │
│   │   └── 📂 gallery/
│   │       ├── prewedding-1.jpg        # Gallery photos (8+ images)
│   │       ├── prewedding-2.jpg
│   │       ├── ... more gallery images
│   │       └── engagement-2.jpg
│   │
│   └── 📂 music/
│       └── bgm.mp3                     # Background music (optional)
│
└── 📂 node_modules/ (Created after npm install)
    └── All dependencies

```

---

## 📊 File Statistics

| Category | Count | Size |
|----------|-------|------|
| Components | 4 | ~30 KB |
| Config Files | 5 | ~10 KB |
| Library Files | 2 | ~12 KB |
| Styling | 1 | ~9 KB |
| Layout | 2 | ~2 KB |
| **Total** | **14** | **~63 KB** |

---

## 🎯 Quick Reference

### Routes in App Router

```
/                   → page.tsx (Main page)
                       ├── VideoPreview modal
                       ├── HeroSection
                       ├── LoveStorySection
                       ├── CoupleSection
                       └── (More sections to add)
```

### Data Structure

```
lib/constants.ts
├── COUPLES { groom, bride }
├── FAMILIES { groom, bride }
├── LOVE_STORY []
├── WEDDING_INFO {}
├── GALLERY []
├── INITIAL_COMMENTS []
└── Types & Interfaces
```

### Component Hierarchy

```
app/page.tsx
├── VideoPreview
│   └── Use: onComplete, videoUrl props
│
├── HeroSection
│   ├── Uses: COUPLES.groom.nickname, COUPLES.bride.nickname
│   ├── Uses: WEDDING_INFO
│   └── No props
│
├── LoveStorySection
│   ├── Uses: LOVE_STORY array
│   ├── Internal state: selectedStory, scroll position
│   └── No props
│
└── CoupleSection
    ├── Uses: COUPLES.groom, COUPLES.bride
    ├── Uses: FAMILIES data
    └── No props
```

---

## 🔌 How to Add New Sections

### Step 1: Create Component File
```bash
touch app/components/sections/NewSection.tsx
```

### Step 2: Copy Template Code
```typescript
export function NewSection() {
  return (
    <section className="relative w-full min-h-screen...">
      {/* Your content */}
    </section>
  );
}
```

### Step 3: Import in page.tsx
```typescript
import { NewSection } from '@/app/components/sections/NewSection';
```

### Step 4: Add to Page
```typescript
export default function Home() {
  return (
    <>
      <NewSection />
    </>
  );
}
```

---

## 🎨 Styling Locations

```
Styling applied in this order:

1. tailwind.config.ts
   ├── Theme customization
   ├── Font families
   ├── Color palette
   ├── Custom animations
   └── Utilities

2. app/globals.css
   ├── CSS variables (:root)
   ├── Typography base styles
   ├── Keyframe animations
   ├── Utility classes
   └── Scrollbar styling

3. Component-level
   ├── Tailwind classes
   ├── Framer Motion variants
   └── CSS modules (if needed)
```

---

## 📦 Dependencies

Located in `package.json`:

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "typescript": "^5.3.0"
  }
}
```

Run `npm install` to install all dependencies.

---

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npm run type-check

# Lint
npm run lint
```

---

## 🔧 Configuration Files Overview

| File | Purpose | Key Settings |
|------|---------|--------------|
| **package.json** | Dependencies & scripts | Next.js, React, Framer Motion, Tailwind |
| **tsconfig.json** | TypeScript config | Path alias (@/*), strict mode |
| **next.config.js** | Next.js config | Image optimization, SWC minify |
| **postcss.config.js** | PostCSS plugins | Tailwind CSS, Autoprefixer |
| **tailwind.config.ts** | Tailwind theme | Custom colors, fonts, animations |

---

## 🌳 Visual Folder Tree

```
wedding-invitation-complete/
├── Configuration & Config
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── postcss.config.js
│   ├── tailwind.config.ts
│   ├── .gitignore
│   └── .env.example
│
├── Source Code (app/)
│   ├── layout.tsx          (Root layout)
│   ├── page.tsx            (Main page)
│   ├── globals.css         (Global styles)
│   ├── components/
│   │   ├── VideoPreview.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── LoveStorySection.tsx
│   │       ├── CoupleSection.tsx
│   │       ├── FamilySection.tsx (to create)
│   │       ├── WeddingDetailsSection.tsx (to create)
│   │       ├── GallerySection.tsx (to create)
│   │       ├── CommentsSection.tsx (to create)
│   │       └── ClosingSection.tsx (to create)
│   └── api/
│       └── comments/ (to create)
│
├── Libraries (lib/)
│   ├── constants.ts
│   └── context/
│       └── AudioContext.tsx
│
└── Static Assets (public/)
    ├── videos/
    ├── images/
    │   ├── hero/
    │   ├── couples/
    │   ├── families/
    │   ├── love-story/
    │   └── gallery/
    └── music/
```

---

## ✅ Setup Checklist

- [x] Folder structure created
- [x] Configuration files in place
- [x] App files (layout, page, globals.css) ready
- [x] Components created (4/9)
- [x] Library files ready
- [ ] Install dependencies (`npm install`)
- [ ] Add images & videos to `public/`
- [ ] Update data in `lib/constants.ts`
- [ ] Create remaining sections (5 templates provided)
- [ ] Test locally (`npm run dev`)
- [ ] Build & deploy

---

Ready! This structure is complete dan siap untuk development! 🚀
