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
    image: '/ia/images/foto.jpeg',
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
    image: '/ia/images/images/foto.jpeg',
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
        image: '/ia/images/images/foto.jpeg',
      },
      {
        name: 'Ir. Siti Nurhasanah, M.Sc',
        role: 'Ibu',
        title: 'Dosen Universitas Indonesia',
        image: '/ia/images/images/foto.jpeg',
      },
    ],
    siblings: [
      {
        name: 'Rizka Suryanti',
        relation: 'Kakak',
        image: '/ia/images/images/foto.jpeg',
      },
      {
        name: 'Reyhan Surya',
        relation: 'Adik',
        image: '/ia/images/images/foto.jpeg',
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
        image: '/ia/images/images/foto.jpeg',
      },
      {
        name: 'Dra. Fatimah Zahra, M.Pd',
        role: 'Ibu',
        title: 'Kepala Sekolah SMA Unggulan',
        image: '/ia/images/images/foto.jpeg',
      },
    ],
    siblings: [
      {
        name: 'Nadia Salim',
        relation: 'Kakak',
        image: '/ia/images/images/foto.jpeg',
      },
      {
        name: 'Fakhri Ahmad',
        relation: 'Adik',
        image: '/ia/images/images/foto.jpeg',
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
    year: 2024,
    month: 'Juni',
    title: 'Pertama Kali Bertatap',
    description:
      'Tak ada yang kebetulan di dunia ini. Pertemuan pertama itu terjadi begitu sederhana. Ia sedang menjaga karcis di tempat kerjanya, sementara sang pria datang membeli kopi khas Curug Kembar. Hanya tatapan singkat tanpa percakapan panjang. Setelah hari itu, waktu memisahkan mereka cukup lama tanpa pernah bertemu kembali.',
    image: '/ia/images/story/1.jpeg',
    emoji: '✨',
    color: '#e8d4c4',
  },
  {
    id: 2,
    year: 2024,
    month: 'Desember',
    title: 'Pertemuan Kedua',
    description:
      'Beberapa bulan berlalu, takdir kembali mempertemukan mereka. Sang pria mengadakan sebuah event di Curug Kembar — tempat di mana sang wanita bekerja. Saat itu, wanita tersebut tidak disangka--sangka mengantarkan makanan untuk acara tersebut, sedang itu bukan perkerjaan dia. Pertemuan kedua yang masih terasa biasa, namun tanpa mereka sadari, benih cerita mulai tumbuh perlahan.',
    image: '/ia/images/story/2.jpeg',
    emoji: '✨',
    color: '#e8d4c4',
  },
  {
    id: 3,
    year: 2025,
    month: 'Februari',
    title: 'Pertemuan Ketiga',
    description:
      'Takdir kembali bekerja dengan caranya yang unik. Sang wanita berkunjung ke rumah sang pria untuk mengantar saudaranya bersilaturahmi. Di situlah mereka mengetahui adanya ikatan saudara jauh di antara keluarga mereka. Hubungan itu hanya sebatas silaturahmi keluarga, tanpa ada sedikit pun niat atau arah menuju asmara.',
    image: '/ia/images/story/3.jpeg',
    emoji: '✨',
    color: '#e8d4c4',
  },
  {
    id: 5,
    year: 2025,
    month: 'Maret',
    title: 'Silaturahmi Berlanjut',
    description:
      'Pertemuan berikutnya masih dalam suasana kekeluargaan. Mereka saling berkunjung sebagai saudara, menjaga adab dan batas. Tidak ada yang aneh, semuanya berjalan sebagaimana mestinya.',
    image: '/ia/images/story/4.jpeg',
    emoji: '✨',
    color: '#e8d4c4',
  },
  {
    id: 6,
    year: 2025,
    month: 'April',
    title: 'Komunikasi Tanpa Henti',
    description:
      'Seiring waktu, komunikasi mulai terjalin semakin intens. Percakapan demi percakapan mengalir tanpa terasa. Dari hal sederhana hingga cerita kehidupan. Perlahan, tanpa mereka sadari, rasa itu tumbuh dan mulai mengarah pada sesuatu yang lebih dari sekadar silaturahmi.',
    image: '/ia/images/story/6.jpeg',
    emoji: '✨',
    color: '#e8d4c4',
  },
  {
    id: 7,
    year: 2025,
    month: 'Mei',
    title: 'Sebuah Tantangan',
    description:
      'Sang wanita memberikan tantangan yang tegas namun penuh makna: "jika ingin serius, datanglah dan minta izin kepada orang tuaku". Tanpa ragu, sang pria membuktikan kesungguhannya dengan langkah nyata — menghadap dan menyampaikan niat baiknya.',
    image: '/ia/images/story/7.jpeg',
    emoji: '✨',
    color: '#e8d4c4',
  },
  {
    id: 8,
    year: 2025,
    month: 'Mei',
    title: 'Kencan Pertama',
    description:
      'Untuk pertama kalinya mereka pergi bersama dalam sebuah aquarium date. Di antara gemerlap cahaya dan tenangnya suasana, mereka berbicara panjang tentang masa depan, menyusun langkah demi langkah menuju tujuan yang sama.',
    image: '/ia/images/story/8.jpeg',
    emoji: '✨',
    color: '#e8d4c4',
  },
  {
    id: 9,
    year: 2025,
    month: 'Juni',
    title: 'Tunangan',
    description:
      'Dengan keyakinan yang semakin kuat, mereka mantap memilih satu sama lain. Di bulan ini, mereka mengikat janji dalam sebuah pertunangan, sebagai tanda keseriusan menuju jenjang yang lebih sakral.',
    image: '/ia/images/story/9.jpeg',
    emoji: '✨',
    color: '#e8d4c4',
  },
  {
    id: 10,
    year: 2025,
    month: 'Desember',
    title: 'Jungle Date',
    description:
      'Di sela waktu libur, mereka menyempatkan diri untuk sejenak menghilangkan penat. Sebuah jungle date menjadi momen untuk semakin mengenal satu sama lain lebih dalam, sambil menanti hari bahagia yang semakin dekat.',
    image: '/ia/images/story/10.jpeg',
    emoji: '✨',
    color: '#e8d4c4',
  },
  {
    id: 11,
    year: 2026,
    month: 'Februari',
    title: 'Proses Lamaran',
    description:
      'Setahun perjalanan yang terasa singkat namun penuh makna. Dengan disaksikan kedua keluarga besar, mereka melangsungkan lamaran sebagai langkah resmi menuju pernikahan.',
    image: '/ia/images/story/11.jpeg',
    emoji: '✨',
    color: '#e8d4c4',
  },
  {
    id: 12,
    year: 2026,
    month: 'Februari',
    title: 'Prewedding',
    description:
      'Mereka mengabadikan momen bahagia yang telah dinantikan selama 25 tahun kehidupan masing-masing. Senyum, tawa, dan harapan tergambar jelas dalam setiap potret yang menjadi saksi perjalanan cinta mereka.',
    image: '/ia/images/story/12.jpeg',
    emoji: '✨',
    color: '#e8d4c4',
  },
  {
    id: 13,
    year: 2026,
    month: 'Maret',
    title: 'Happy Ending (Wedding)',
    description:
      'Akhirnya, mereka mengikrarkan janji suci dalam ikatan pernikahan. Berjanji untuk hidup bersama dalam suka maupun duka, saling menguatkan, dan membangun keluarga kecil yang penuh cinta hingga akhir hayat.',
    image: '/ia/images/story/13.jpeg',
    emoji: '✨',
    color: '#e8d4c4',
  },
];

// ============================================
// WEDDING DETAILS
// ============================================
export const IMGAE_PATH = '/ia/images/';
export const WEDDING_INFO = {
  date: '2026-03-30',
  akadDate: '08:00 s/d Selesai',
  akadName: 'Waktu',
  dayName: 'Senin',
  formattedDate: 'Senin, 30 Maret 2026',
  location: {
    akad: 'Kediaman Pempelai Wanita',
    resepsi: 'Kp.Cisangku RT.01 RW.02 Desa Malasari Kec.Nanggung - Bogor',
    map: 'https://goo.gl/maps/tY7EVuLTjmpsTgDcA',
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
    image: '/ia/images/images/foto.jpeg',
    title: 'Beach Vibes',
    category: 'prewedding',
  },
  {
    id: 2,
    image: '/ia/images/images/foto.jpeg',
    title: 'Urban Aesthetic',
    category: 'prewedding',
  },
  {
    id: 3,
    image: '/ia/images/images/foto.jpeg',
    title: 'Sunset Romance',
    category: 'prewedding',
  },
  {
    id: 4,
    image: '/ia/images/images/foto.jpeg',
    title: 'Natural Beauty',
    category: 'prewedding',
  },
  {
    id: 5,
    image: '/ia/images/images/foto.jpeg',
    title: 'Golden Hour',
    category: 'prewedding',
  },
  {
    id: 6,
    image: '/ia/images/images/foto.jpeg',
    title: 'Couple Goals',
    category: 'prewedding',
  },
  {
    id: 7,
    image: '/ia/images/images/foto.jpeg',
    title: 'Engagement Moment',
    category: 'engagement',
  },
  {
    id: 8,
    image: '/ia/images/images/foto.jpeg',
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
