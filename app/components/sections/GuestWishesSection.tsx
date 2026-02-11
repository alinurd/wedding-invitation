// app/components/sections/GuestWishesSection.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Camera, Upload, X, Send, User, Heart } from 'lucide-react';

interface Wish {
  id: string;
  name: string;
  message: string;
  image?: string;
  timestamp: Date;
}

export function GuestWishesSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [wishes, setWishes] = useState<Wish[]>([
  
    {
      id: '2',
      name: 'Pak Budi',
      message: 'Congratulations Rizki & Haliza! Wishing you both a lifetime of happiness together.',
      timestamp: new Date('2024-12-11'),
    },
    {
      id: '3',
      name: 'Sarah & Fajar',
      message: 'Selamat menempuh hidup baru. Semoga keluarga kalian menjadi keluarga yang sakinah, mawaddah, warahmah.',
      timestamp: new Date('2024-12-11'),
    },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initialize camera
  useEffect(() => {
    if (showCamera) {
      startCamera();
    }
    return () => {
      stopCamera();
    };
  }, [showCamera]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' },
        audio: false 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Tidak dapat mengakses kamera. Pastikan izin kamera sudah diaktifkan.');
      setShowCamera(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        
        const imageData = canvasRef.current.toDataURL('image/jpeg');
        setImage(imageData);
        setShowCamera(false);
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      alert('Mohon isi nama dan pesan ucapan');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newWish: Wish = {
        id: Date.now().toString(),
        name,
        message,
        image: image || undefined,
        timestamp: new Date(),
      };

      setWishes([newWish, ...wishes]);
      setName('');
      setMessage('');
      setImage(null);
      setIsSubmitting(false);
      
      // Show success message
      alert('Terima kasih atas ucapan Anda! Ucapan telah berhasil dikirim.');
    }, 1500);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a] overflow-hidden">
      {/* Background Decoration */}
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

      <div className="relative z-10 w-full max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-yellow-400 text-xs md:text-sm font-light tracking-widest uppercase mb-4">
            Buku Tamu Digital
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            Ucapan & Doa
          </h2>
          <p className="text-white/80 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Berikan ucapan dan doa terbaik Anda untuk mempelai yang sedang berbahagia. 
            Foto dan pesan Anda akan langsung ditampilkan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="backdrop-blur-xs bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
              <h3 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-yellow-400" />
                Tulis Ucapan Anda
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-white/80 text-sm font-light mb-2">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/20 transition-all"
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-white/80 text-sm font-light mb-2">
                    Pesan Ucapan
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/20 transition-all resize-none"
                    placeholder="Tulis ucapan dan doa terbaik Anda..."
                    required
                  />
                </div>

                {/* Photo Upload Section */}
                <div>
                  <label className="block text-white/80 text-sm font-light mb-2">
                    Tambahkan Foto (Opsional)
                  </label>
                  
                  <div className="space-y-4">
                    {/* Preview Image */}
                    {image && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative rounded-xl overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt="Preview"
                          width={400}
                          height={300}
                          className="w-full  object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setImage(null)}
                          className="absolute top-2 right-2 p-2 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
                        >
                          <X className="w-4 h-4 text-white" />
                        </button>
                      </motion.div>
                    )}

                    {/* Upload Buttons */}
                    <div className="flex gap-3">
                      {/* Camera Button */}
                      <motion.button
                        type="button"
                        onClick={() => setShowCamera(true)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-yellow-400/10 border border-yellow-400/30 rounded-xl text-yellow-400 hover:bg-yellow-400/20 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Camera className="w-5 h-5" />
                        <span className="text-sm font-medium">Ambil Foto</span>
                      </motion.button>

                      {/* Upload Button */}
                      <motion.button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-rose-400/10 border border-rose-400/30 rounded-xl text-rose-400 hover:bg-rose-400/20 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Upload className="w-5 h-5" />
                        <span className="text-sm font-medium">Upload Foto</span>
                      </motion.button>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Kirim Ucapan</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Note */}
              <p className="text-white/60 text-xs text-center mt-6">
                Ucapan Anda akan langsung muncul di halaman ini setelah dikirim.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Wishes Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="backdrop-blur-xs bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex items-center justify-between">
                
                <div>
                  <p className="text-white/60 text-sm font-light">Total Ucapan</p>
                  <p className="text-3xl font-light text-white">{wishes.length}</p>
                </div>
                
                <div className="text-yellow-400">
                  <Heart className="w-8 h-8" />
                </div>
              </div>
              <div className='text-center'>
              <span className="text-white/40  mt-4  text-xs tracking-widest uppercase mb-2">
            Scroll untuk melihat ucapan lainnya
          </span>
          </div>
            </div>

            {/* Wishes List */}
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
              <AnimatePresence>
                {wishes.map((wish, index) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="backdrop-blur-xs bg-white/5 border border-white/10 rounded-3xl p-6"
                  >
                    {/* Wish Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-rose-400/20 flex items-center justify-center">
                          {wish.image ? (
                            <Image
                              src={wish.image}
                              alt={wish.name}
                              width={100}
                              height={100}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            <User className="w-6 h-6 text-white/60" />
                          )}
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white">{wish.name}</h4>
                          <p className="text-white/60 text-sm">{formatDate(wish.timestamp)}</p>
                        </div>
                      </div>
                      <div className="text-yellow-400">
                        <Heart className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Wish Message */}
                    <p className="text-white/80 leading-relaxed mb-4">{wish.message}</p>

                    {/* Wish Image */}
                    {wish.image && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 rounded-xl overflow-hidden"
                      >
                        <Image
                          src={wish.image}
                          alt={`Foto dari ${wish.name}`}
                          width={500}
                          height={350}
                          className="w-full  object-cover"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Camera Modal */}
        <AnimatePresence>
          {showCamera && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setShowCamera(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] rounded-3xl p-6 max-w-2xl w-full border border-white/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-light text-white">Ambil Foto</h3>
                  <button
                    onClick={() => setShowCamera(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Camera Preview */}
                <div className="relative rounded-2xl overflow-hidden bg-black mb-6">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-96 object-cover"
                  />
                  <canvas ref={canvasRef} className="hidden" />
                  
                  {/* Camera Frame */}
                  <div className="absolute inset-0 border-4 border-yellow-400/30 rounded-2xl pointer-events-none" />
                </div>

                {/* Camera Controls */}
                <div className="flex justify-center gap-4">
                  <motion.button
                    onClick={capturePhoto}
                    className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black rounded-xl font-semibold flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Camera className="w-5 h-5" />
                    <span>Ambil Foto</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={() => setShowCamera(false)}
                    className="px-8 py-3 border border-white/30 text-white rounded-xl font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Batal
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        
      </motion.div>
    </section>
  );
}