// lib/constants.ts
// ============================================
// DESIGN SYSTEM & COLOR PALETTE
// ============================================

export const COLORS = {
  primary: '#0f0f0f',           // Deep black
  secondary: '#fafafa',         // Off-white
  accent: '#c8a882',            // Warm gold (elegant, timeless)
  muted: '#8b8b8b',             // Muted gray
  lightBg: '#f8f8f8',           // Light background
  border: '#e5e5e5',            // Subtle border
  text: {
    primary: '#1a1a1a',
    secondary: '#6b6b6b',
    light: '#fafafa',
  },
};

export const TYPOGRAPHY = {
  family: {
    display: '"Playfair Display", serif',      // Elegant, luxury
    body: '"Inter", -apple-system, sans-serif', // Clean, modern
    mono: '"Courier Prime", monospace',
  },
  size: {
    h1: 'clamp(2.5rem, 8vw, 4.5rem)',
    h2: 'clamp(1.75rem, 6vw, 3rem)',
    h3: 'clamp(1.25rem, 4vw, 2rem)',
    body: '1rem',
    small: '0.875rem',
    tiny: '0.75rem',
  },
};

export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2.5rem',
  xl: '4rem',
  xxl: '6rem',
  section: 'clamp(3rem, 10vh, 8rem)',
};

export const ANIMATIONS = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
    verySlow: 800,
  },
  easing: {
    easeInOutCubic: [0.645, 0.045, 0.355, 1],
    easeOutCubic: [0.215, 0.61, 0.355, 1],
    easeInCubic: [0.55, 0.055, 0.675, 0.19],
  },
};

// ============================================
// COUPLES DATA
// ============================================

export const COUPLES = {
  groom: {
    name: 'Ali Nurdin, S.kom',
    nickname: 'Ali',
    age: 28,
    image: '/images/foto.jpeg',
    bio: 'Software Engineer dengan passion di bidang AI & Cloud Technology. Pecinta outdoor adventure, coffee lover, dan photography enthusiast.',
    education: 'S.T Teknik Informatika - Institut Teknologi Bandung',
    occupation: 'Senior Software Engineer at TechCorp',
    social: {
      instagram: '@rizki.code',
      linkedin: 'muhammadrizki',
    },
    fun_facts: [
      'Bisa coding sambil camping 🏕️',
      'Sudah explore 15 negara',
      'Kopi specialty adalah ritual pagi',
    ],
  },
  bride: {
    name: 'Siti Tyani',
    nickname: 'Ia',
    age: 26,
    image: '/images/images/foto.jpeg',
    bio: 'Creative Director dan Graphic Designer dengan keahlian dalam branding & UX/UI Design. Senang traveling, cooking, dan menciptakan karya seni visual.',
    education: 'S.Sn Desain Komunikasi Visual - Universitas Pelita Harapan',
    occupation: 'Creative Director at DesignStudio',
    social: {
      instagram: '@haliza.creates',
      linkedin: 'sitihaliza',
    },
    fun_facts: [
      'Menciptakan 100+ logo untuk brand ternama',
      'Food photography adalah obsesi',
      'Bisa membuat apapun dari hasil alam 🌿',
    ],
  },
};

// ============================================
// FAMILIES DATA
// ============================================

export const FAMILIES = {
  groom: {
    title: 'Keluarga Pengantin Pria',
    parents: [
      {
        name: 'Ir. Bambang Suryanto, M.Eng',
        role: 'Ayah',
        title: 'Direktur PT. Konstruksi Indonesia',
        image: '/images/images/foto.jpeg',
      },
      {
        name: 'Ir. Siti Nurhasanah, M.Sc',
        role: 'Ibu',
        title: 'Dosen Universitas Indonesia',
        image: '/images/images/foto.jpeg',
      },
    ],
    siblings: [
      {
        name: 'Rizka Suryanti',
        relation: 'Kakak',
        image: '/images/images/foto.jpeg',
      },
      {
        name: 'Reyhan Surya',
        relation: 'Adik',
        image: '/images/images/foto.jpeg',
      },
    ],
  },
  bride: {
    title: 'Keluarga Pengantin Wanita',
    parents: [
      {
        name: 'Prof. Dr. Ahmad Salim, S.E., MBA',
        role: 'Ayah',
        title: 'Professor Ekonomi Islam',
        image: '/images/images/foto.jpeg',
      },
      {
        name: 'Dra. Fatimah Zahra, M.Pd',
        role: 'Ibu',
        title: 'Kepala Sekolah SMA Unggulan',
        image: '/images/images/foto.jpeg',
      },
    ],
    siblings: [
      {
        name: 'Nadia Salim',
        relation: 'Kakak',
        image: '/images/images/foto.jpeg',
      },
      {
        name: 'Fakhri Ahmad',
        relation: 'Adik',
        image: '/images/images/foto.jpeg',
      },
    ],
  },
};

// ============================================
// LOVE STORY - HORIZONTAL TIMELINE
// ============================================

export const LOVE_STORY = [
  {
    id: 1,
    year: 2020,
    month: 'Desember',
    title: 'First Meeting',
    description:
      'Bertemu di acara networking Tech Community Jakarta. Diskusi tentang design thinking dalam tech sampai lupa waktu.',
    image: '/images/love-story/2020.jpg',
    emoji: '✨',
    color: '#e8d4c4',
  },
  {
    id: 2,
    year: 2021,
    month: 'Maret',
    title: 'Coffee & Conversation',
    description:
      'Kencan pertama di kafe favorit. Nyari teh instead of coffee karena Haliza bukan kopi lover 😄',
    image: '/images/images/foto.jpeg',
    emoji: '☕',
    color: '#d4c4b8',
  },
  {
    id: 3,
    year: 2021,
    month: 'Juli',
    title: 'First Adventure',
    description:
      'Trip pertama ke Bandung. Sunrise di Tangkuban Perahu dan fall harder untuk satu sama lain.',
    image: '/images/images/foto.jpeg',
    emoji: '🏔️',
    color: '#c4b8a8',
  },
  {
    id: 4,
    year: 2022,
    month: 'Desember',
    title: 'Bali Getaway',
    description:
      'Liburan ke Bali. Sunset di Tanah Lot, mandi air terjun, dan tentuin untuk selamanya together.',
    image: '/images/images/foto.jpeg',
    emoji: '🌅',
    color: '#b8a898',
  },
  {
    id: 5,
    year: 2023,
    month: 'Oktober',
    title: 'The Proposal ✨',
    description:
      'Dilamar di Puncak Bogor saat sunset. Cincin impian, view yang indah, dan YES dari mulut termanis di dunia!',
    image: '/images/images/foto.jpeg',
    emoji: '💍',
    color: '#a8988c',
    highlight: true,
  },
  {
    id: 6,
    year: 2024,
    month: 'Juni',
    title: 'Forever Starts Now',
    description:
      'Hari istimewa ketika dua hati menjadi satu. Mari share kebahagiaan ini dengan orang-orang terkasih!',
    image: '/images/images/foto.jpeg',
    emoji: '💕',
    color: '#988c80',
    isFuture: true,
  },
];

// ============================================
// WEDDING DETAILS
// ============================================

export const WEDDING_INFO = {
  date: '2026-03-30',
  dayName: 'Senin',
  formattedDate: '30 Maret 2026',
  schedule: {
    reception: { time: '10:00', label: 'Resepsi' },
    ceremony: { time: '10:30', label: 'Upacara Pernikahan' },
    dinner: { time: '12:00', label: 'Makan Bersama' },
  },
  location: {
    name: 'Grand Ballroom Kemang',
    address: 'Jl. Kemang Raya No. 123, Jakarta Selatan 12560',
    city: 'Jakarta',
    country: 'Indonesia',
    coordinates: {
      lat: -6.25,
      lng: 106.8,
    },
    mapsUrl:
      'https://www.google.com/maps/search/Grand+Ballroom+Kemang+Jakarta',
    phone: '+62 21 1234 5678',
  },
  dress_code: {
    formal: 'Batik / Kebaya (Tradisional)',
    alternative: 'Formal Western (Black Tie Optional)',
    colors: ['Navy', 'Hitam', 'Gold', 'Cream', 'Soft pastels'],
  },
  protocols: [
    '✓ Geser masker saat foto atau makan',
    '✓ Hand sanitizer disediakan di berbagai lokasi',
    '✓ Kamar ganti terpisah tersedia',
    '✓ Parkir luas & terawat',
  ],
};

// ============================================
// GALLERY DATA
// ============================================

export const GALLERY = [
  {
    id: 1,
    image: '/images/images/foto.jpeg',
    title: 'Beach Vibes',
    category: 'prewedding',
  },
  {
    id: 2,
    image: '/images/images/foto.jpeg',
    title: 'Urban Aesthetic',
    category: 'prewedding',
  },
  {
    id: 3,
    image: '/images/images/foto.jpeg',
    title: 'Sunset Romance',
    category: 'prewedding',
  },
  {
    id: 4,
    image: '/images/images/foto.jpeg',
    title: 'Natural Beauty',
    category: 'prewedding',
  },
  {
    id: 5,
    image: '/images/images/foto.jpeg',
    title: 'Golden Hour',
    category: 'prewedding',
  },
  {
    id: 6,
    image: '/images/images/foto.jpeg',
    title: 'Couple Goals',
    category: 'prewedding',
  },
  {
    id: 7,
    image: '/images/images/foto.jpeg',
    title: 'Engagement Moment',
    category: 'engagement',
  },
  {
    id: 8,
    image: '/images/images/foto.jpeg',
    title: 'Ring Detail',
    category: 'engagement',
  },
];

// ============================================
// COMMENTS INITIAL DATA (LOCAL STORAGE)
// ============================================

export const INITIAL_COMMENTS = [
  {
    id: 1,
    name: 'Budi Santoso',
    relation: 'Teman Kampus Rizki',
    message:
      'Selamat untuk kalian berdua! Jangan lupa ajak kami adventure lagi 🏔️',
    timestamp: new Date('2024-05-20T10:30:00'),
    avatar: '👨‍💼',
  },
  {
    id: 2,
    name: 'Sinta Wijaya',
    relation: 'Teman Kerja Haliza',
    message:
      'Kalian adalah couple goals! Semoga lancar acaranya dan bahagia selamanya 💕',
    timestamp: new Date('2024-05-22T14:15:00'),
    avatar: '👩‍💼',
  },
  {
    id: 3,
    name: 'Hendra Kusuma',
    relation: 'Sepupu Rizki',
    message:
      'Ditunggu acaranya! Pasti seru dan memorable. Sukses ya untuk preparation-nya',
    timestamp: new Date('2024-05-25T09:45:00'),
    avatar: '👨‍🎓',
  },
];

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface Person {
  name: string;
  nickname?: string;
  age?: number;
  image: string;
  bio?: string;
  education?: string;
  occupation?: string;
  social?: {
    instagram?: string;
    linkedin?: string;
  };
  fun_facts?: string[];
}

export interface FamilyMember {
  name: string;
  role?: string;
  title?: string;
  relation?: string;
  image: string;
}

export interface LoveStoryItem {
  id: number;
  year: number;
  month: string;
  title: string;
  description: string;
  image: string;
  emoji: string;
  color: string;
  highlight?: boolean;
  isFuture?: boolean;
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: 'prewedding' | 'engagement' | 'candid';
}

export interface Comment {
  id: number;
  name: string;
  relation: string;
  message: string;
  timestamp: Date;
  avatar: string;
}

export interface WeddingEvent {
  time: string;
  label: string;
}
