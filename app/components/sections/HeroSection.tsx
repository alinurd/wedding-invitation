// app/components/sections/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { COUPLES, WEDDING_INFO } from '@/lib/constants';

interface Props {
  openInvitation: () => void;
}

export function HeroSection({openInvitation}:Props) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
const HandleOpen=()=>{
  openInvitation();
}
  const open = () => {
    HandleOpen();
  };
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/ucapan.jpeg"
          alt="Wedding background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Top accent line */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-100 to-transparent" />
        </motion.div>

        {/* Intro text */}
        <motion.p
          variants={itemVariants}
          className="text-yellow-300 text-sm md:text-base font-light tracking-widest uppercase mb-4 md:mb-6"
        >
          The Wedding
        </motion.p>

        {/* Couple names */}
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4 leading-tight">
            {COUPLES.groom.nickname}
            <motion.p
          variants={itemVariants}
          className="text-white/80 text-sm md:text-base font-light tracking-widest uppercase  md:mb-6"
        >
          {COUPLES.groom.name}
        </motion.p>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-2 mb-2 text-yellow-300">
              &
            </span>
            {COUPLES.bride.nickname} <br />
              <motion.p
          variants={itemVariants}
          className="text-white/80 text-sm md:text-base font-light tracking-widest uppercase  md:mb-6"
        >
          {COUPLES.bride.name}
        </motion.p>
          </h1>
        </motion.div>

        {/* Wedding date */}
             <motion.div
          variants={itemVariants}
          className=" backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl px-6 md:px-10 py-2 md:py-8 inline-block hidden"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* Date */}
            <div className="text-center md:text-left">
              <p className="text-yellow-300 text-xs uppercase tracking-widest font-light mb-1">
                📅 Wedding Date
              </p>
              <p className="text-white text-sm md:text-base font-light">
                {WEDDING_INFO.dayName}, {WEDDING_INFO.formattedDate}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-white/20" />

            {/* Location */}
            <div className="text-center md:text-left">
              <p className="text-yellow-300 text-xs uppercase tracking-widest font-light mb-1">
                📍 Location
              </p>
              <p className="text-white text-sm md:text-base font-light">
                {WEDDING_INFO.location.city}, Indonesia
              </p>
            </div>
          </div>
        </motion.div>


        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-5 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <button className="px-8 py-3 md:px-10 md:py-4 text-white border border-white/40 hover:border-white/80 rounded-full font-medium text-sm flex items-center gap-2 backdrop-blur-md hover:bg-white/10 transition-all"

              onClick={open}
            >
            Open 
          </button>
            <p className="text-white/40 text-xs uppercase tracking-widest font-light">
              Scroll to explore
            </p>
            <svg
              className="w-5 h-5 text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>

        {/* Bottom accent line */}
         
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-12 left-8 w-32 h-32 bg-amber-100/5 rounded-full blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-12 right-8 w-40 h-40 bg-amber-100/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
}
