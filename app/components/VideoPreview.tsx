// app/components/VideoPreview.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COUPLES, IMGAE_PATH, WEDDING_INFO } from '@/lib/constants';
import { useAudio } from '@/lib/context/AudioContext';
interface VideoPreviewProps {
  onComplete: () => void;
  videoUrl?: string;
  guestName?: string;
}

export function VideoPreview({ onComplete, videoUrl = '/videos/prewedding.mp4',guestName }: VideoPreviewProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false); // Ubah default ke false
  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true); // State untuk overlay pembuka
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
 
  const { startAudio } = useAudio();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video completion
  const handleVideoEnd = () => {
    startAudio();
    handleComplete();
  };

  // Handle video can play
  const handleVideoCanPlay = () => {
    setIsVideoLoaded(true);
  };

  // Handle start video from overlay
  const handleStartVideo = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
        setShowOverlay(false);
      } catch (err) {
        console.log("Play gagal:", err);
      }
    }
  };

  // Handle skip button
  const handleSkip = () => {
    startAudio();
    handleComplete();
  };

  // Handle completion
  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(onComplete, 700);
  };

  // Update progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percent =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percent);
    }
  };

  // Toggle play/pause
  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle click on container (play/pause)
  const handleContainerClick = (e: React.MouseEvent) => {
    // Don't toggle if clicking on buttons or overlay
    if ((e.target as HTMLElement).closest('button')) return;
    if (showOverlay) return;
    
    togglePlayPause(e);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !showOverlay) {
        e.preventDefault();
        togglePlayPause(e as any);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, showOverlay]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center w-full h-screen overflow-hidden"
        >
          {/* Video Container */}
          <div 
            className="relative w-full h-full bg-black cursor-pointer"
            onClick={handleContainerClick}
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-cover"
              onEnded={handleVideoEnd}
              onTimeUpdate={handleTimeUpdate}
              onCanPlay={handleVideoCanPlay}
              playsInline
              preload="auto"
              muted={false}
            />

            {/* Loading Indicator */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              </div>
            )}

            {/* Opening Overlay */}
          <AnimatePresence>
  {showOverlay && isVideoLoaded && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-md px-6"
    >

      <div className="flex flex-col items-center max-w-xl w-full">

        {/* Top Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-px bg-white/40 mb-8"
        />

        {/* Invitation Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative w-full text-center px-8 py-12 rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
        >

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMGAE_PATH}/card.jpg)` }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />

          {/* Content */}
          <div className="relative z-10">

            {/* Title */}
            <p className="text-xs md:text-sm text-white/70 tracking-[0.35em] uppercase mb-4">
              The Wedding of
            </p>

            {/* Couple Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              {COUPLES.bride.nickname}
              <span className="mx-4 text-white/40">&</span>
              {COUPLES.groom.nickname}
            </h1>

            {/* Invitation Text */}
            <p className="text-sm md:text-base text-white/90 mb-6 max-w-md mx-auto leading-relaxed">
              Dengan segala kerendahan hati kami mengundang Anda untuk menjadi
              saksi kebahagiaan kami
            </p>

            {/* Guest Name */}
            {guestName && (
              <div className="mb-6">
                <p className="text-xs text-white/60 uppercase tracking-[0.25em] mb-2">
                  Kepada Yth.
                </p>

                <p className="text-lg md:text-xl text-white uppercase tracking-wide">
                  {guestName}
                </p>
              </div>
            )}

            {/* Date */}
            <p className="text-white text-sm tracking-[0.25em]">
              {WEDDING_INFO.formattedDate}
            </p>

          </div>
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-px bg-white/40 mt-8 mb-10"
        />

        {/* Open Invitation Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={handleStartVideo}
          className="group relative px-8 py-4 rounded-full overflow-hidden"
        >
          <span className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/30 rounded-full group-hover:bg-white/20 transition-all duration-300" />

          <span className="relative text-white text-sm tracking-[0.25em] uppercase flex items-center gap-3">
            Buka Undangan
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </motion.button>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-8 text-white/50 text-xs tracking-wider"
        >
          Klik tombol untuk membuka undangan
        </motion.p>

      </div>
    </motion.div>
  )}
</AnimatePresence>
            {/* Video Controls Overlay (only visible when playing) */}
            {!showOverlay && (
              <>
                {/* Gradient Overlay for Better Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />

                {/* Center Play/Pause Indicator (shows briefly on click) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0, scale: 1 }}
                  whileTap={{ opacity: 0.8, scale: 1.2 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {isPlaying ? (
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      ) : (
                        <path d="M8 5v14l11-7z" />
                      )}
                    </svg>
                  </div>
                </motion.div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-white to-white/80"
                    style={{ width: `${progress}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>

                {/* Skip Button */}
                <motion.button
                  onClick={handleSkip}
                  className="absolute top-8 right-8 px-6 py-3 text-white border border-white/40 hover:border-white/80 rounded-full font-medium text-sm flex items-center gap-2 backdrop-blur-md hover:bg-white/10 transition-all z-30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Skip
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}