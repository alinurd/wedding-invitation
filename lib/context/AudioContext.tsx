// lib/context/AudioContext.tsx
'use client';

import React, { createContext, useContext, useRef, useState, useEffect } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  toggleAudio: () => void;
  toggleMute: () => void;
  volume: number;
  setVolume: (volume: number) => void;
  startAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize audio
  useEffect(() => {
    if (!isMounted) return;

    if (!audioRef.current) {
      audioRef.current = new Audio('/music/musik.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = isMuted ? 0 : volume;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isMounted]);

  // Handle volume change without stopping playback
  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVolume;
    }
  };

  // Handle mute toggle without stopping playback
  const handleToggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      audioRef.current.volume = newMutedState ? 0 : volume;
      setIsMuted(newMutedState);
    }
  };

  // Function to start audio (called from VideoPreview when video ends)
  const startAudio = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log('Autoplay blocked by browser policy:', error);
        });
    }
  };

  // Toggle play/pause
  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log('Playback failed:', error);
        });
    }
  };

  return (
    <AudioContext.Provider 
      value={{ 
        isPlaying, 
        isMuted, 
        toggleAudio, 
        toggleMute: handleToggleMute,
        volume, 
        setVolume: handleVolumeChange,
        startAudio 
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
}