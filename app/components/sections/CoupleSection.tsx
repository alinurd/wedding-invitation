// app/components/sections/CoupleSection-Luxury.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { COUPLES, WEDDING_INFO } from '@/lib/constants';

export function CoupleSection() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-16 md:py-24 px-4 md:px-6 bg-light-bg overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/foto.jpeg"
                alt="Wedding background"
                fill
                className="object-cover"
                priority
                quality={100}
              />
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
            </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 w-full max-w-6xl"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <p className="text-yellow-600 text-xs md:text-sm font-light tracking-widest uppercase mb-3">
            Temui Pasangan itu
          </p>

          <p className="text-white text-base md:text-lg bg-gradient-to-r from-white/10 to-white/10 rounded-2xl p-4 border border-white/20 mb-6 font-light max-w-2xl mx-auto leading-relaxed">
            Dua jiwa, satu hati, cinta yang tak terbatas. Bersama-sama, kita merayakan perjalanan yang membawa kita menuju momen indah ini.
          </p>
        </motion.div>

        {/* Main Content - Single Large Photo Focus */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Large Couple Photo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            {/* Photo Frame with Premium Border */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white-400/20 to-rose-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Image
                src="/images/foto.jpeg"
                alt="Rizki & Haliza"
                width={500}
                height={700}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative Frame */}
              <div className="absolute inset-0 border-4 border-white/40 rounded-3xl pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white/40 text-primary rounded-full w-20 h-20 flex items-center justify-center font-light text-2xl shadow-lg"
            >
              💕
            </motion.div>
          </motion.div>

          {/* Details Side - PREMIUM LAYOUT */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8">
            {/* Groom Details */}
            <div className="group">
              <div className="flex gap-4"> 
                    <motion.a
                      href={`https://instagram.com/${COUPLES.groom.social.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      className="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-primary transition-all mb-4"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
                    </motion.a>
                  <p className="text-yellow-600 text-xs uppercase tracking-widest font-light mb-2">
                Mempelai Pria
              </p>

                </div>
              {/* Education Badge */}
              <div className="bg-white/10 backdrop-blur-md border border-yellow-400/40 rounded-2xl p-4  ">
                <p className="text-3xl md:text-3xl uppercase tracking-widest text-white font-light mb-1">{COUPLES.groom.name} ({COUPLES.groom.nickname})</p>
                <p className="text-white font-light ">Putra ketiga ibu hj. Alis & bpk Rosid (alm)</p>
              </div>

            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-rose-400/0 via-white/40 to-rose-400/0" />
            <div className="group">
              <div className="flex gap-4">
                    <motion.a
                      
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      className="w-10 h-10 rounded-full border-2 border-rose-400 flex items-center justify-center hover:bg-rose-400 hover:text-primary transition-all mb-4"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
                    </motion.a>
                  <span className="text-rose-600 text-xs uppercase tracking-widest font-light ">
                Mempelai Wanita
              </span>
                </div>


              {/* Education Badge */}
              <div className="bg-white/10 backdrop-blur-md border border-rose-400/40 rounded-2xl p-4  mb-4">
                <p className="text-3xl md:text-3xl uppercase tracking-widest text-white font-light mb-1">{COUPLES.bride.name} ({COUPLES.bride.nickname})</p>
                <p className="text-white font-light ">Putra pertama ibu Asih & bpk Husen (Aceng)</p>
              </div>

            </div>
            <div className="h-px bg-gradient-to-r from-rose-400/0 via-white/40 to-rose-400/0" />
            <motion.div
                      variants={itemVariants}
                      className=" backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl px-6 md:px-10 py-2 md:py-8 inline-block "
                    >
                      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-4">
                        {/* Date */}
                        <div className="text-center md:text-left">
                         
                          <p className="text-yellow-300 text-xs uppercase tracking-widest font-light mb-1">
                            Resepsi
                          </p>
                          <p className="text-white text-xl  font-light">
                            {WEDDING_INFO.dayName}, {WEDDING_INFO.formattedDate}
                          </p>
                        </div>
            
                        {/* Divider */}
                        <div className="hidden md:block w-px h-8 bg-white/20" />
            
                        {/* Location */}
                        <div className="text-center md:text-left">
                          <p className="text-yellow-300 text-xs uppercase tracking-widest font-light mb-1">
                            Akad
                          </p>
                          <p className="text-white text-xl  font-light">
                            {WEDDING_INFO.location.city}, Indonesia
                          </p>
                        </div>
                      </div>
                      <div className="h-px bg-gradient-to-r from-rose-400/0 via-white/40 to-rose-400/0 mb-4" />

                        <div className="text-center md:text-center">
                          <p className="text-yellow-300 text-xs uppercase tracking-widest font-light mb-1">
                            Lokasi
                          </p>
                          <p className="text-white text-xl font-light">
                            Kp. Pasir Pari RT. 003 RW. 004 Desa Kiarasari Kec. Sukajaya-Bogor
                          </p>
                        </div>
                    </motion.div>

          </motion.div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="inline-block">
            <p className="text-2xl md:text-3xl font-light text-yellow-600 italic mb-4">
              "Dua jalan berbeda membawa kita ke tujuan yang sama: Selamanya bersamamu."
            </p>
            <p className="text-text-secondary font-light">— Rizki & Haliza</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}