# 🚀 QUICK START - Wedding Invitation Complete Project

Proyek wedding invitation dengan struktur **LENGKAP SIAP PAKAI**! 

---

## ⚡ Setup (5 Menit)

### 1️⃣ Install Dependencies

```bash
cd wedding-invitation

npm install
# or
yarn install
```

### 2️⃣ Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 di browser

### 3️⃣ Lihat Hasilnya!

Website undangan akan tampil dengan:
- ✅ Video preview modal (fullscreen)
- ✅ Hero section (fullscreen intro)
- ✅ Love story timeline (horizontal scroll)
- ✅ Couple profile section

**Voila! Website jalan!** 🎉

---

## 📝 Customize (15 Menit)

### Update Data
Edit `lib/constants.ts`:

```typescript
// Ganti nama, bio, foto path, dll
export const COUPLES = {
  groom: {
    name: 'Nama Kamu',        // Change this
    nickname: 'Panggilan',     // Change this
    image: '/images/couples/groom.jpg',  // Change path
    // ... update lainnya
  },
  // ...
};

export const WEDDING_INFO = {
  date: '2024-06-15',         // Change date
  formattedDate: '15 Juni 2024', // Change format
  // ... update lainnya
};
```

### Add Images & Videos

Letakkan file di folder yang sesuai:

```
public/
├── videos/
│   └── prewedding.mp4          ← Add your video here
├── images/
│   ├── hero/
│   │   └── hero-bg.jpg         ← Add hero image
│   ├── couples/
│   │   ├── groom.jpg           ← Add groom photo
│   │   └── bride.jpg           ← Add bride photo
│   ├── love-story/
│   │   ├── 2020.jpg            ← Add 6 timeline photos
│   │   ├── 2021.jpg
│   │   ├── 2021b.jpg
│   │   ├── 2022.jpg
│   │   ├── 2023.jpg
│   │   └── 2024.jpg
│   ├── families/               ← Add family photos (8 images)
│   └── gallery/                ← Add gallery photos (8+ images)
└── music/
    └── bgm.mp3                 ← Add music (optional)
```

---

## 🏗️ Add Missing Sections (1-2 Hours)

Tinggal 5 sections lagi untuk melengkapi website:

### ✏️ Family Section
```bash
# Copy template dari IMPLEMENTATION_ROADMAP.md
# Paste ke: app/components/sections/FamilySection.tsx
```

### ✏️ Wedding Details Section
```bash
# Copy template dari IMPLEMENTATION_ROADMAP.md
# Paste ke: app/components/sections/WeddingDetailsSection.tsx
```

### ✏️ Gallery Section
```bash
# Copy template dari IMPLEMENTATION_ROADMAP.md
# Paste ke: app/components/sections/GallerySection.tsx
```

### ✏️ Comments Section
```bash
# Copy template dari IMPLEMENTATION_ROADMAP.md
# Paste ke: app/components/sections/CommentsSection.tsx
```

### ✏️ Closing Section
```bash
# Copy template dari IMPLEMENTATION_ROADMAP.md
# Paste ke: app/components/sections/ClosingSection.tsx
```

Lalu import semua di `app/page.tsx`:

```typescript
import { FamilySection } from '@/app/components/sections/FamilySection';
import { WeddingDetailsSection } from '@/app/components/sections/WeddingDetailsSection';
import { GallerySection } from '@/app/components/sections/GallerySection';
import { CommentsSection } from '@/app/components/sections/CommentsSection';
import { ClosingSection } from '@/app/components/sections/ClosingSection';

export default function Home() {
  return (
    <>
      {showVideoPreview && <VideoPreview onComplete={handleVideoComplete} />}
      {!showVideoPreview && (
        <main>
          <HeroSection />
          <LoveStorySection />
          <CoupleSection />
          <FamilySection />
          <WeddingDetailsSection />
          <GallerySection />
          <CommentsSection />
          <ClosingSection />
        </main>
      )}
    </>
  );
}
```

---

## 📂 Project Structure

```
wedding-invitation/
├── 📄 Configuration Files
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── postcss.config.js
│   ├── tailwind.config.ts
│   ├── .gitignore
│   └── .env.example
│
├── 📂 app/
│   ├── 📄 layout.tsx           ← Root layout
│   ├── 📄 page.tsx             ← Main page
│   ├── 📄 globals.css          ← Global styles
│   ├── components/
│   │   ├── VideoPreview.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── LoveStorySection.tsx
│   │       └── CoupleSection.tsx
│   └── api/
│       └── comments/
│
├── 📂 lib/
│   ├── 📄 constants.ts         ← All data here
│   └── context/
│       └── AudioContext.tsx
│
├── 📂 public/
│   ├── videos/
│   ├── images/
│   │   ├── hero/
│   │   ├── couples/
│   │   ├── families/
│   │   ├── love-story/
│   │   └── gallery/
│   └── music/
│
└── 📄 PROJECT_STRUCTURE.md     ← Full structure guide
```

---

## 🎨 Customize Styling

### Change Primary Color

Edit `lib/constants.ts`:
```typescript
export const COLORS = {
  accent: '#d4a574',  // Change this to your color
  // ... rest
};
```

Then update `app/globals.css`:
```css
:root {
  --color-accent: #d4a574;  /* Update this */
}
```

### Change Fonts

Edit `tailwind.config.ts`:
```typescript
fontFamily: {
  display: ['Your Display Font', ...],
  body: ['Your Body Font', ...],
}
```

### Change Spacing/Size

Edit `app/globals.css`:
```css
:root {
  --space-lg: 2.5rem;  /* Adjust values */
  /* ... more */
}
```

---

## 🧪 Test Locally

```bash
# Development (hot reload)
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

## 🚀 Deploy to Vercel (Recommended)

### Option 1: Push to GitHub First

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/wedding-invitation
git push -u origin main
```

### Option 2: Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow prompts → Deployed! ✨

---

## 📊 Completed vs To-Do

### ✅ Already Done (4 Sections)
- [x] Video Preview Modal
- [x] Hero Section  
- [x] Love Story Timeline
- [x] Couple Profile

### 📋 Ready to Add (5 Sections)
- [ ] Family Section
- [ ] Wedding Details
- [ ] Gallery
- [ ] Comments/Guest Book
- [ ] Closing/Thank You

Templates untuk semua 5 sections ada di:
→ `/mnt/user-data/outputs/IMPLEMENTATION_ROADMAP.md`

---

## 🎯 Next Steps

1. **Run project**
   ```bash
   npm install && npm run dev
   ```

2. **Update constants.ts** dengan data kamu

3. **Add images & videos** ke public folder

4. **Test di browser** http://localhost:3000

5. **Add missing sections** (gunakan templates)

6. **Deploy** ke Vercel

---

## 💾 File Sizes

| File | Size |
|------|------|
| VideoPreview.tsx | 5.5 KB |
| HeroSection.tsx | 5.0 KB |
| LoveStorySection.tsx | 10.9 KB |
| CoupleSection.tsx | 8.6 KB |
| AudioContext.tsx | 1.7 KB |
| constants.ts | 10.6 KB |
| globals.css | 9.1 KB |
| **Total Code** | **~51 KB** |

---

## 🆘 Troubleshooting

### Error: Module not found
```
Solution: npm install
```

### Error: Port 3000 already in use
```
Solution: npm run dev -- -p 3001
```

### Images not showing
```
Solution: Check path in constants.ts matches public/ folder
```

### Styling not applied
```
Solution: Check globals.css imported in layout.tsx
```

---

## 📚 Documentation Files

Semua docs ada di project root:

1. **PROJECT_STRUCTURE.md** - Complete structure
2. **IMPLEMENTATION_ROADMAP.md** - Templates & checklist
3. **package.json** - Dependencies

Plus ada di `/mnt/user-data/outputs/`:
- README.md
- SETUP_GUIDE.md
- FILES_INDEX.md
- PROJECT_OVERVIEW.md

---

## 🎉 Done!

Website kamu sudah READY!

Next: `npm install` → `npm run dev` → Website berjalan! 🚀

---

**Tech Stack**:
- ✨ Next.js 14
- ⚛️ React 18
- 🎨 Tailwind CSS
- 💫 Framer Motion
- 📱 Fully Responsive
- 🏆 Production Ready

**Selamat menikmati! 💍**
