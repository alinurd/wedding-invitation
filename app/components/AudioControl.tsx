// app/components/AudioControl.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '@/lib/context/AudioContext';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

export function AudioControl() {
  const { isPlaying, isMuted, toggleAudio, volume, setVolume } = useAudio();
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [localVolume, setLocalVolume] = useState(volume);

  // Update local volume when context volume changes
  useEffect(() => {
    setLocalVolume(volume);
  }, [volume]);

  // Format volume percentage
  const volumePercentage = Math.round((isMuted ? 0 : localVolume) * 100);

  // Handle volume change without stopping playback
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setLocalVolume(val);
    setVolume(val);
  };

  // Handle volume change complete
  const handleVolumeChangeComplete = () => {
    // Optional: Add any logic when user stops dragging
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="flex items-end gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowVolumeSlider(false);
      }}
    >
      {/* Volume Slider - Appears on hover */}
      <AnimatePresence>
        {showVolumeSlider && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-r from-[#0a0e27]/95 to-[#1a1f3a]/95 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-3 min-w-[200px]">
              {/* Volume Percentage */}
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-xs font-light tracking-wider">
                  Volume
                </span>
                <span className="text-yellow-400 text-sm font-medium">
                  {volumePercentage}%
                </span>
              </div>

              {/* Volume Slider */}
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : localVolume}
                  onChange={handleVolumeChange}
                  onMouseUp={handleVolumeChangeComplete}
                  onTouchEnd={handleVolumeChangeComplete}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #d4af37 0%, #d4af37 ${volumePercentage}%, rgba(255,255,255,0.1) ${volumePercentage}%, rgba(255,255,255,0.1) 100%)`,
                  }}
                />
                
                {/* Slider Thumb Custom Style */}
                <style jsx>{`
                  input[type=range]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    background: #d4af37;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
                    transition: all 0.2s;
                    border: 2px solid white;
                  }
                  input[type=range]::-webkit-slider-thumb:hover {
                    transform: scale(1.2);
                    background: #f4e4a6;
                  }
                  input[type=range]::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    background: #d4af37;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
                    transition: all 0.2s;
                    border: 2px solid white;
                  }
                  input[type=range]::-moz-range-thumb:hover {
                    transform: scale(1.2);
                    background: #f4e4a6;
                  }
                `}</style>
              </div>

              {/* Quick Volume Presets */}
              <div className="flex items-center justify-between mt-2">
                <button
                  onClick={() => {
                    setLocalVolume(0.25);
                    setVolume(0.25);
                  }}
                  className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-colors"
                >
                  25%
                </button>
                <button
                  onClick={() => {
                    setLocalVolume(0.5);
                    setVolume(0.5);
                  }}
                  className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-colors"
                >
                  50%
                </button>
                <button
                  onClick={() => {
                    setLocalVolume(0.75);
                    setVolume(0.75);
                  }}
                  className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-colors"
                >
                  75%
                </button>
                <button
                  onClick={() => {
                    setLocalVolume(1);
                    setVolume(1);
                  }}
                  className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-colors"
                >
                  100%
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Controls */}
      <div className="flex flex-col gap-3">
        {/* Volume Toggle Button */}
        <motion.button
          onClick={() => setShowVolumeSlider(!showVolumeSlider)}
          className="relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-[#0a0e27] to-[#1a1f3a] border-2 border-yellow-400/50 flex items-center justify-center backdrop-blur-sm">
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white/80" />
            ) : (
              <Volume2 className="w-5 h-5 text-yellow-400" />
            )}
          </div>
          
          {/* Volume Level Indicator */}
          {!isMuted && !showVolumeSlider && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full border-2 border-[#0a0e27] flex items-center justify-center"
            >
              <span className="text-[10px] font-bold text-black">
                {volumePercentage}
              </span>
            </motion.div>
          )}
        </motion.button>

        {/* Play/Pause Button */}
        <motion.button
          onClick={toggleAudio}
          className="relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-rose-300 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-[#0a0e27] to-[#1a1f3a] border-2 border-rose-400/50 flex items-center justify-center backdrop-blur-sm">
            {isPlaying ? (
              <Pause className="w-5 h-5 text-rose-400" />
            ) : (
              <Play className="w-5 h-5 text-rose-400 ml-0.5" />
            )}
          </div>
          
          {/* Music Note Animation when playing */}
          {isPlaying && (
            <motion.div
              animate={{
                y: [-10, -15, -10],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.2,
              }}
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            >
              <Music className="w-4 h-4 text-rose-400" />
            </motion.div>
          )}
        </motion.button>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && !showVolumeSlider && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="absolute right-16 bottom-6 bg-black/80 backdrop-blur-md text-white text-xs py-2 px-4 rounded-full border border-white/20 whitespace-nowrap"
          >
            {isPlaying ? 'Jeda musik' : 'Putar musik'} • Volume {volumePercentage}%
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}