'use client';

import { useState, useEffect } from 'react';
import { VideoPreview } from '@/app/components/VideoPreview';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { LoveStorySection } from '@/app/components/sections/LoveStorySection';
import { CoupleSection } from '@/app/components/sections/CoupleSection';
import { GuestWishesSection } from '@/app/components/sections/GuestWishesSection';
import { AudioControl } from './components/AudioControl';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const [showVideoPreview, setShowVideoPreview] = useState(true);
  const [showAllSection, setShowAllSection] = useState(true);
  const [videoUrl, setVideoUrl] = useState('/videos/vid.mp4');

   const searchParams = useSearchParams();
    const guestName = (() => {
    const to = searchParams.get('to');
    if (!to) return '';
  
    return to
      .replace(/-/g, ' ')
      .replace(/\bdan\b/gi, '&');
  })();

  // Detect device
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile) {
      setVideoUrl('/videos/vid1.mp4');
    } else {
      setVideoUrl('/videos/vid.mp4');
    }
  }, []);

  const handleVideoComplete = () => {
    setShowVideoPreview(false);
  };

  const handleOpenInvitation = () => {
    setShowAllSection(true);
  };

  return (
    <>
      {showVideoPreview && (
        <VideoPreview
          onComplete={handleVideoComplete}
          videoUrl={videoUrl}
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