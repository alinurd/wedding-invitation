// app/components/VideoPreview.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COUPLES } from '@/lib/constants';
import { useAudio } from '@/lib/context/AudioContext';

interface VideoPreviewProps {
  onComplete: () => void;
  videoUrl?: string;
}

export function VideoPreview({ onComplete, videoUrl = '/videos/prewedding.mp4' }: VideoPreviewProps) {
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
                  className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
                >
                  {/* Decorative Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-px bg-white/40 mb-8"
                  />

                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-center px-4 max-w-2xl"
                  >
                    <p className="text-xs md:text-sm text-white/60 mb-3 font-light tracking-[0.3em] uppercase">
                      The Wedding of
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-wide">
                      {COUPLES.groom.nickname}
                      <span className="mx-4 text-white/40 font-thin">&</span>
                      {COUPLES.bride.nickname}
                    </h1>
                    <p className="text-sm md:text-base text-white/80 mb-8 font-light max-w-md mx-auto">
                      Dengan segala kerendahan hati, kami mengundang Anda untuk menjadi saksi kebahagiaan kami
                    </p>
                  </motion.div>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="h-px bg-white/40 mb-8"
                  />

                  {/* Start Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    onClick={handleStartVideo}
                    className="group relative px-8 py-4 overflow-hidden rounded-full"
                  >
                    <span className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/30 rounded-full group-hover:bg-white/20 transition-all duration-300" />
                    <span className="relative text-white text-sm tracking-[0.2em] uppercase flex items-center gap-3">
                      Buka Undangan
                      <svg 
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </motion.button>

                  {/* Hint Text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute bottom-8 text-white/30 text-xs tracking-wider"
                  >
                    Klik tombol untuk memulai
                  </motion.p>
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