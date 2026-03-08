'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { VideoPreview } from './components/VideoPreview';
import { HeroSection } from './components/sections/HeroSection';
import { LoveStorySection } from './components/sections/LoveStorySection';
import { CoupleSection } from './components/sections/CoupleSection';
import { GuestWishesSection } from './components/sections/GuestWishesSection';
import { AudioControl } from './components/AudioControl';

export default function ClientHome() {
  const searchParams = useSearchParams();

  const guestName = searchParams.get('to')?.replace(/-/g, ' ').replace(/\bdan\b/gi, '&') || '';

  const [showVideoPreview, setShowVideoPreview] = useState(false);
  const [videoUrl, setVideoUrl] = useState('/videos/vid.mp4');
  const [showAllSection, setShowAllSection] = useState(true);

  // Detect device and change video
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      setVideoUrl('/videos/vid1.mp4');
    }
  }, []);

  const handleVideoComplete = () => setShowVideoPreview(false);
  const handleOpenInvitation = () => setShowAllSection(true);

  return (
    <>
      {showVideoPreview && (
        <VideoPreview
          videoUrl={videoUrl}
          onComplete={handleVideoComplete}
          guestName={guestName}
        />
      )}

      {!showVideoPreview && (
        <main className="w-full overflow-x-hidden relative">
          <HeroSection openInvitation={handleOpenInvitation} />

          {showAllSection && (
            <>
              <LoveStorySection />
              <CoupleSection />
              <GuestWishesSection />
            </>
          )}

          <div className="fixed bottom-6 right-6 z-[999]">
            <AudioControl />
          </div>
        </main>
      )}
    </>
  );
}