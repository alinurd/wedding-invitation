'use client';

import { Suspense, useEffect, useState } from 'react';
import { VideoPreview } from '@/app/components/VideoPreview';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { LoveStorySection } from '@/app/components/sections/LoveStorySection';
import { CoupleSection } from '@/app/components/sections/CoupleSection';
import { GuestWishesSection } from '@/app/components/sections/GuestWishesSection';
import { AudioControl } from './components/AudioControl';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('to')?.replace(/-/g, ' ').replace(/\bdan\b/gi, '&') || '';

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainContent guestName={guestName} />
    </Suspense>
  );
}

function MainContent({ guestName }: { guestName: string }) {
  const [showVideoPreview, setShowVideoPreview] = useState(true);
  const [videoUrl, setVideoUrl] = useState('/videos/vid.mp4');
  const [showAllSection, setShowAllSection] = useState(true);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) setVideoUrl('/videos/vid1.mp4');
  }, []);

  const handleVideoComplete = () => setShowVideoPreview(false);
  const handleOpenInvitation = () => setShowAllSection(true);

  return (
    <>
      {showVideoPreview && <VideoPreview videoUrl={videoUrl} guestName={guestName} onComplete={handleVideoComplete} />}
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