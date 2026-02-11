// app/components/VideoPreview.tsx
'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COUPLES } from '@/lib/constants';
import { useAudio } from '@/lib/context/AudioContext';

interface VideoPreviewProps {
  onComplete: () => void;
  videoUrl?: string;
}

export function VideoPreview({ onComplete, videoUrl = '/videos/prewedding.mp4' }: VideoPreviewProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
   const { startAudio } = useAudio();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video completion
  const handleVideoEnd = () => {
    startAudio();
    handleComplete();
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
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
          <div className="relative w-full h-full bg-black">
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-cover"
              onEnded={handleVideoEnd}
              onTimeUpdate={handleTimeUpdate}
              autoPlay
              playsInline
            />

            {/* Overlay Gradient for Better Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />

            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-center px-4 max-w-2xl"
              >
                {/* Main Title */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="mb-6"
                >
                  <p className="text-xs md:text-sm text-white/80 mb-4 font-light tracking-widest uppercase">
                    Our Love Story
                  </p>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8">
                    {COUPLES.groom.nickname} & {COUPLES.bride.nickname}
                  </h1>
                </motion.div>

                {/* Invitation Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-8 py-6"
                >
                  <p className="text-sm md:text-base text-white mb-2 font-light tracking-wider">
                    Kami mengundang Anda untuk menjadi bagian dari
                  </p>
                  <p className="text-lg md:text-xl text-white font-light">
                    Hari Bahagia Kami
                  </p>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="flex justify-center gap-4 mt-8"
                >
                  <div className="w-1 h-8 bg-white/40 rounded-full" />
                  <div className="w-1 h-8 bg-white/60 rounded-full" />
                  <div className="w-1 h-8 bg-white/40 rounded-full" />
                </motion.div>
              </motion.div>
            </div>

            {/* Play/Pause Overlay */}
            <motion.button
              onClick={togglePlayPause}
              className="absolute inset-0 w-full h-full flex items-center justify-center group cursor-pointer z-20"
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg
                  className="w-8 h-8 text-white ml-1"
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
            </motion.button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <div
                className="h-full bg-gradient-to-r from-white to-white/80 transition-all duration-100"
                style={{ width: `${progress}%` }}
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

            {/* Loading indicator when buffering */}
            {!isPlaying && (
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}