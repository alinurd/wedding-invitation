// app/components/sections/GuestWishesSection.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Camera, Upload, X, Send, User, Heart, Gift,
  ChevronDown, Image as ImageIcon, Phone, Copy, Check,
  Calendar, MessageCircle, Sparkles, Download
} from 'lucide-react';

interface Wish {
  id: string;
  name: string;
  message: string;
  image?: string;
  timestamp: Date;
  isRead?: boolean;
}

interface GiftConfirmation {
  name: string;
  amount: string;
  bank: string;
  date: Date;
  message?: string;
}

export function GuestWishesSection() {
  // Form states
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Camera states
  const [showCamera, setShowCamera] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string>('');

  // Image states
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Gift states
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [giftConfirmations, setGiftConfirmations] = useState<GiftConfirmation[]>([
    {
      name: 'Budi Santoso',
      amount: '',
      bank: 'BCA',
      date: new Date('2024-12-15'),
      message: 'Selamat menempuh hidup baru!'
    },
    {
      name: 'Siti Rahayu',
      amount: 'Rp 1.000.000',
      bank: 'Mandiri',
      date: new Date('2024-12-14')
    }
  ]);
  const [copied, setCopied] = useState(false);

  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wishesEndRef = useRef<HTMLDivElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  // Bank account info
  const bankAccounts = [
    {
      bank: 'BCA',
      accountNumber: '6241436478',
      name: 'Ali Nurdin',
      icon: '/ia/images/bca.png'
    },
  ];

  // Fetch wishes
  useEffect(() => {
    fetchWishes();
  }, []);

  // Handle camera cleanup
  useEffect(() => {
    if (showCamera) {
      startCamera();
    } else {
      stopCamera();
    }
    return () => stopCamera();
  }, [showCamera]);

  // Handle drag and drop events
  useEffect(() => {
    const dropZone = dropZoneRef.current;
    if (!dropZone) return;

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer?.files[0];
      if (file && file.type.startsWith('image/')) {
        handleImageFile(file);
      }
    };

    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('dragleave', handleDragLeave);
    dropZone.addEventListener('drop', handleDrop);

    return () => {
      dropZone.removeEventListener('dragover', handleDragOver);
      dropZone.removeEventListener('dragleave', handleDragLeave);
      dropZone.removeEventListener('drop', handleDrop);
    };
  }, []);

  const fetchWishes = async () => {
    try {
      const res = await fetch('/ia/api/guest-wishes');
      if (!res.ok) throw new Error('Failed to fetch');

      const data = await res.json();
      const wishesWithDate = data.map((wish: any) => ({
        ...wish,
        timestamp: new Date(wish.timestamp),
      }));
      setWishes(wishesWithDate);
    } catch (err) {
      console.error('Gagal mengambil ucapan:', err);
    }
  };

  const startCamera = async () => {
    try {
      setCameraError('');
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      setCameraStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      setCameraError('Tidak dapat mengakses kamera. Pastikan izin kamera sudah diaktifkan.');
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);

        const imageData = canvasRef.current.toDataURL('image/jpeg', 0.8);
        setImage(imageData);
        setShowCamera(false);
      }
    }
  };

  const handleImageFile = (file: File) => {
    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    const reader = new FileReader();
    reader.onload = (event) => {
      setTimeout(() => {
        setImage(event.target?.result as string);
        setUploadProgress(0);
        clearInterval(interval);
      }, 1000);
    };
    reader.onerror = () => {
      alert('Gagal membaca file. Silakan coba lagi.');
      setUploadProgress(0);
      clearInterval(interval);
    };
    reader.readAsDataURL(file);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('File harus berupa gambar');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran file maksimal 5MB');
        return;
      }
      handleImageFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert('Mohon isi nama dan pesan ucapan');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/ia/api/guest-wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message, image }),
      });

      if (!res.ok) throw new Error('Gagal mengirim ucapan');

      const newWish = await res.json();
      newWish.timestamp = new Date(newWish.timestamp);

      setWishes(prev => [newWish, ...prev]);
      setName('');
      setMessage('');
      setImage(null);

      // Scroll to top of wishes
      wishesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

      alert('Terima kasih atas ucapan Anda! Ucapan telah berhasil dikirim.');
    } catch (err) {
      console.error(err);
      alert('Terjadi kesalahan saat mengirim ucapan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (date: Date) => {
    const d = new Date(date);
    if (isNaN(d.getTime())) return '-';

    const now = new Date();
    const diffTime = Math.abs(now.getTime() - d.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      return 'Kemarin';
    } else if (diffDays < 7) {
      return `${diffDays} hari yang lalu`;
    }

    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(d);
  };

  const formatDateTime = (date: Date) => {
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
          src="/ia/images/ucapan.jpg"
          alt="Wedding background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Section Header */}
        <motion.div className="text-center mb-12 md:mb-16">
          <p className="text-yellow-600 text-xs md:text-sm font-light tracking-widest uppercase mb-3">
            Ucapan & Doa
          </p>

          <p className="text-white text-base md:text-lg bg-gradient-to-r from-white/10 to-white/10 rounded-2xl p-4 border border-white/20 mb-6 font-light max-w-2xl mx-auto leading-relaxed">
            Berikan ucapan dan doa terbaik Anda untuk mempelai yang sedang berbahagia.
            Setiap pesan akan menjadi hadiah terindah untuk kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Virtual Gift Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-xs bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-rose-400/20 rounded-2xl">
                  <Gift className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-light text-white">Gift Virtual</h3>
              </div>

              <p className="text-white/70 mb-6">
                Kirim hadiah untuk mempelai melalui transfer bank. Setiap pemberian akan kami doakan.
              </p>

              <div className="space-y-4 mb-6">
                {bankAccounts.map((account, index) => (
                  <motion.div
                    key={account.bank}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all group/bank"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {/* Bank Icon */}
                        <div className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                          {account.icon ? (
                            <Image
                              src={account.icon}
                              alt={account.bank}
                              width={300}
                              height={300}
                              className="object-contain"
                            />
                          ) : (
                            <span className="text-sm font-bold text-gray-800">
                              {account.bank[0]}
                            </span>
                          )}
                        </div>

                        {/* Bank Info */}
                        <div>
                          <h4 className="text-white font-medium flex items-center gap-2">
                            {account.bank}
                            <span className="text-xs px-2 py-0.5 bg-yellow-400/20 text-yellow-400 rounded-full">
                              Utama
                            </span>
                          </h4>
                          <p className="text-white/50 text-sm">a.n. {account.name}</p>
                        </div>
                      </div>

                      {/* Copy Button */}
                      <button
                        onClick={() => copyToClipboard(account.accountNumber)}
                        className="relative p-2 hover:bg-white/10 rounded-lg transition-all group/btn"
                        title="Salin nomor rekening"
                      >
                        {copied ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-green-400"
                          >
                            <Check className="w-4 h-4" />
                          </motion.div>
                        ) : (
                          <Copy className="w-4 h-4 text-white/40 group-hover/btn:text-white transition-colors" />
                        )}

                        {/* Tooltip */}
                        <span className="absolute -top-8 right-0 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">
                          {copied ? 'Tersalin!' : 'Salin nomor'}
                        </span>
                      </button>
                    </div>

                    {/* Account Number */}
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white/40 text-xs mb-1">Nomor Rekening</p>
                          <div className="flex items-center gap-2">
                            <p className="text-white font-mono text-lg tracking-wider">
                              {account.accountNumber}
                            </p>
                            <button
                              onClick={() => copyToClipboard(account.accountNumber)}
                              className="lg:hidden p-1.5 bg-white/5 rounded-lg"
                            >
                              <Copy className="w-3 h-3 text-white/60" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Copy Success Overlay (optional) */}
                    <AnimatePresence>
                      {copied && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute inset-0 flex items-center justify-center bg-green-500/10 backdrop-blur-sm rounded-xl pointer-events-none"
                        >
                          <span className="text-green-400 font-medium flex items-center gap-2">
                            <Check className="w-4 h-4" />
                            Nomor rekening disalin!
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-3">


                <a
                  href={`https://wa.me/6285817069096?text=${encodeURIComponent(
                    'Halo, saya ingin mengkonfirmasi pengiriman gift untuk Ali & Ia. Berikut detailnya:\n\n' +
                    'Nama: [Nama Anda]\n' +
                    'Jumlah: [Nominal]\n' +
                    'Bank: [Nama Bank]\n' +
                    'Tanggal Transfer: [Tanggal]\n' +
                    'Doa: [Doa anda Untuk kedua mempelai]\n\n' +
                    'Terima kasih!'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-rose-500/30 text-rose-400 hover:bg-rose-500/30  hover:text-white rounded-xl font-medium transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Konfirmasi via WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Form Ucapan */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="backdrop-blur-xs bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-rose-400/20 rounded-2xl">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-light text-white">Tulis Ucapan Anda</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-white/80 text-sm font-light mb-2">
                    Nama Lengkap
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
              <p className="text-white/40 text-xs text-center mt-6">
                Dengan mengirim ucapan, Anda menyetujui bahwa pesan dan foto Anda akan ditampilkan di halaman ini.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Wishes Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats Card */}
            <div className="backdrop-blur-xs bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm font-light mb-1">Total Ucapan</p>
                  <p className="text-4xl font-light text-white">{wishes.length}</p>
                </div>
                <div className="relative">
                  <Heart className="w-12 h-12 text-yellow-400" />
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-12 h-12 text-rose-400 opacity-50" />
                  </motion.div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/40 text-sm">
                    Terakhir diperbarui: {formatDateTime(new Date())}
                  </span>
                </div>
              </div>
            </div>

            {/* Wishes List */}
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              <AnimatePresence>
                {wishes.length > 0 ? (
                  wishes.map((wish, index) => (
                    <motion.div
                      key={wish.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="backdrop-blur-xs bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all group"
                    >
                      {/* Wish Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {/* Avatar */}
                          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400/20 to-rose-400/20 flex items-center justify-center overflow-hidden">
                            {wish.image ? (
                              <Image
                                src={wish.image}
                                alt={wish.name}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <User className="w-7 h-7 text-white/60" />
                            )}
                          </div>

                          <div>
                            <h4 className="text-lg font-medium text-white group-hover:text-yellow-400 transition-colors">
                              {wish.name}
                            </h4>
                            <p className="text-white/40 text-sm flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(wish.timestamp)}
                            </p>
                          </div>
                        </div>

                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="text-rose-400"
                        >
                          <Heart className="w-5 h-5" />
                        </motion.div>
                      </div>

                      {/* Wish Message */}
                      <div className="relative">
                        <p className="text-white/80 leading-relaxed mb-4 italic">
                          "{wish.message}"
                        </p>
                      </div>

                      {/* Wish Image */}
                      {wish.image && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="mt-4 rounded-xl overflow-hidden relative group/image"
                        >
                          <Image
                            src={wish.image}
                            alt={`Foto dari ${wish.name}`}
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover transition-transform group-hover/image:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity" />
                        </motion.div>
                      )}
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <Heart className="w-16 h-16 text-white/20 mx-auto mb-4" />
                    <p className="text-white/40 text-lg">Belum ada ucapan</p>
                    <p className="text-white/30">Jadilah yang pertama memberi ucapan</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={wishesEndRef} />
            </div>

            {/* Scroll Hint */}
            {wishes.length > 3 && (
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-white/40"
              >
                <ChevronDown className="w-5 h-5" />
                <span className="text-xs">Scroll untuk melihat ucapan lainnya</span>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Camera Modal */}
        <AnimatePresence>
          {showCamera && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
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
                  {cameraError ? (
                    <div className="h-96 flex items-center justify-center p-6">
                      <div className="text-center">
                        <Camera className="w-16 h-16 text-white/20 mx-auto mb-4" />
                        <p className="text-white/60">{cameraError}</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="w-full h-96 object-cover"
                      />
                      <canvas ref={canvasRef} className="hidden" />

                      {/* Camera Frame */}
                      <div className="absolute inset-0 border-4 border-yellow-400/30 rounded-2xl pointer-events-none" />

                      {/* Capture Button Overlay */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <motion.button
                          onClick={capturePhoto}
                          className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                          whileTap={{ scale: 0.9 }}
                        >
                          <Camera className="w-8 h-8 text-gray-800" />
                        </motion.button>
                      </div>
                    </>
                  )}
                </div>

                {/* Camera Controls */}
                <div className="flex justify-center gap-4">
                  <motion.button
                    onClick={() => setShowCamera(false)}
                    className="px-6 py-2 border border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-all"
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

        {/* Gift Confirmation Modal */}
        <AnimatePresence>
          {showGiftModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setShowGiftModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] rounded-3xl p-6 max-w-lg w-full border border-white/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-light text-white">Konfirmasi Gift</h3>
                  <button
                    onClick={() => setShowGiftModal(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto mb-6">
                  {giftConfirmations.map((gift, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 border border-white/10 rounded-xl p-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-white">{gift.name}</h4>
                        <span className="text-yellow-400 font-medium">{gift.amount}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                        <span>Bank {gift.bank}</span>
                        <span>•</span>
                        <span>{formatDate(gift.date)}</span>
                      </div>
                      {gift.message && (
                        <p className="text-white/70 text-sm italic">"{gift.message}"</p>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    onClick={() => {
                      setShowGiftModal(false);
                      window.open('https://wa.me/6285817069096', '_blank');
                    }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black rounded-xl font-semibold flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5" />
                    Konfirmasi Baru
                  </motion.button>

                  <motion.button
                    onClick={() => setShowGiftModal(false)}
                    className="flex-1 px-6 py-3 border border-white/30 text-white rounded-xl font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Tutup
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}