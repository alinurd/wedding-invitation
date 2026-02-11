// app/components/sections/LoveStorySection-Luxury.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { LOVE_STORY } from '@/lib/constants';

export function LoveStorySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedStory, setSelectedStory] = useState<(typeof LOVE_STORY)[0] | null>(null);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', checkScroll);
    return () => container?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-6 bg-white">
      {/* Background Decoration */}
      
<Image
            src="/images/story.jpeg"
            alt="Wedding background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute top-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
       <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12 md:mb-16 max-w-3xl"
      >
        
        <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-2"
                >
                  <p className="text-yellow-600 text-xs md:text-sm font-light tracking-widest uppercase mb-3">
            Perjalanan Cinta Kami
          </p>
                  <p className="text-sm md:text-base text-black mb-2 font-light tracking-wider">
                    Setiap momen bersamamu adalah berkah. Mari kita rayakan perjalanan indah yang membawa kita ke hari istimewa ini.
                  </p>
                </motion.div>

        <p className="text-white bg-black/30 text-base md:text-lg font-light leading-relaxed">
          
        </p>
      </motion.div>

      {/* Horizontal Timeline */}
      <div className="relative w-full mb-12">
        {/* Left Arrow */}
        <AnimatePresence>
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-yellow-400 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Timeline Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth px-4 md:px-20 py-8 no-scrollbar"
        >
          {LOVE_STORY.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedStory(story)}
              className="flex-shrink-0 w-72 md:w-80 cursor-pointer group"
            >
              {/* Premium Timeline Card */}
              <motion.div
                whileHover={{ y: -12, boxShadow: '0 24px 48px rgba(0, 0, 0, 0.15)' }}
                className="relative h-96 rounded-3xl overflow-hidden shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                   src="/images/foto.jpeg"
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Top - Year & Emoji */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-4xl mb-2">{story.emoji}</p>
                      <p className="text-sm font-light text-white/80">{story.month}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-light text-yellow-300/80">{story.year}</p>
                    </div>
                  </div>

                  {/* Bottom - Title & Description */}
                  <div>
                    {/* Decorative Line */}
                    <div className="h-1 w-8 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full mb-4" />
                    
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-3 group-hover:text-yellow-200 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-sm text-white/80 line-clamp-3 group-hover:text-white/90 transition-colors">
                      {story.description}
                    </p>
                  </div>

                  {/* Highlight Badge */}
                  {story.highlight && (
                    <div className="absolute top-4 right-4 px-4 py-2 bg-yellow-400/20 backdrop-blur-md rounded-full border border-yellow-400/40">
                      <p className="text-xs font-light text-yellow-200">✨ The Proposal</p>
                    </div>
                  )}
                </div>

                {/* Frame Border */}
                <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-3xl pointer-events-none group-hover:border-yellow-400/60 transition-colors" />
              </motion.div>

              {/* Timeline Dot */}
              <motion.div
                className="flex justify-center mt-4"
                whileHover={{ scale: 1.5 }}
              >
                <div className="w-4 h-4 rounded-full border-2 border-yellow-400 bg-white shadow-lg" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <AnimatePresence>
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-yellow-400 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-text-secondary text-xs md:text-sm uppercase tracking-widest font-light"
      >
        ← Scroll to explore our beautiful journey →
      </motion.p>

      {/* Modal - Detail View */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            >
              {/* Modal Image */}
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{selectedStory.emoji}</span>
                  <div>
                    <p className="text-yellow-600 text-xs uppercase tracking-widest font-light">
                      {selectedStory.month}
                    </p>
                    <p className="text-4xl font-light text-primary">
                      {selectedStory.year}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-1 w-8 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full mb-6" />

                {/* Title & Description */}
                <h3 className="text-3xl md:text-4xl font-light text-primary mb-4">
                  {selectedStory.title}
                </h3>

                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  {selectedStory.description}
                </p>

                {/* Highlight Badge */}
                {selectedStory.highlight && (
                  <div className="border-l-4 border-yellow-400 pl-6 py-4 bg-yellow-50/80 rounded-lg mb-8">
                    <p className="text-base font-light text-yellow-900">
                      This moment changed our lives forever. The day he got down on one knee and asked me to be his forever. 💍
                    </p>
                  </div>
                )}

                {/* Close Button */}
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-primary rounded-lg hover:shadow-lg transform hover:scale-105 transition-all font-semibold text-sm md:text-base"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}