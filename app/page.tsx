// app/page.tsx
'use client';

import { useState } from 'react';
import { VideoPreview } from '@/app/components/VideoPreview';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { LoveStorySection } from '@/app/components/sections/LoveStorySection';
import { CoupleSection } from '@/app/components/sections/CoupleSection';
import { GuestWishesSection } from '@/app/components/sections/GuestWishesSection';
import { AudioControl } from './components/AudioControl';

export default function Home() {
  const [showVideoPreview, setShowVideoPreview] = useState(true);
  const [showAllSection, setShowAllSection] = useState(false);

  const handleVideoComplete = () => {
    setShowVideoPreview(false);
  };

  const handleOpenInvitation = () => {
    setShowAllSection(true);
  };

  return (
    <>
      {/* Video preview modal */}
      {showVideoPreview && (
        <VideoPreview
          onComplete={handleVideoComplete}
          videoUrl="/videos/vid.mp4"
        />
      )}

      {/* Main invitation sections */}
      {!showVideoPreview && (
        <main className="w-full overflow-x-hidden relative">
          {/* Hero Section */}
          <HeroSection openInvitation={handleOpenInvitation} />

          {/* Other sections - only show after opening invitation */}
          {showAllSection && (
            <>
              <LoveStorySection />
              <CoupleSection />
              <GuestWishesSection />
            </>
          )}

          {/* Audio Control - Fixed Position */}
          <div className="fixed bottom-6 right-6 z-[999]">
            <AudioControl />
          </div>
        </main>
      )}
    </>
  );
}