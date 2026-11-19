import type { PersonalInfo, Project, Experience, SkillCategory, Certification, Testimonial, Education } from '../types';

export const personalData: PersonalInfo = {
  name: "Fasta Biqul Hoirot",
  handle: "fasta-biqul-hoirot",
  title: "Software Engineer & Full-stack Developer",
  roles: [
    "Software Engineer (Web & Mobile)",
    "Full-stack Developer",
    "Server & Database Maintenance Specialist",
    "Data Processing & Machine Learning Integrator"
  ],
  status: {
    id: "Terbuka untuk peluang Software Engineer & Proyek Baru",
    en: "Available for Software Engineer roles & new opportunities"
  },
  location: "Jawa Timur, Indonesia (Jember · Remote & On-site Available)",
  email: "fastabikul87@gmail.com",
  phone: "081359595430",
  bio: {
    id: "Software Engineer lulusan D4 Teknik Informatika Politeknik Negeri Jember dengan keahlian dalam pengembangan aplikasi berbasis web dan mobile serta manajemen basis data perusahaan. Berpengalaman langsung di lingkungan perusahaan maupun sebagai freelancer dalam membangun arsitektur sistem end-to-end, pengolahan data skala besar (data processing), integrasi Machine Learning, dan optimasi model AI. Terampil dalam pemecahan masalah teknis (troubleshooting), kolaborasi lintas tim (cross-functional), serta pengembangan solusi perangkat lunak yang terukur.",
    en: "Software Engineer graduated from D4 Informatics Engineering at Politeknik Negeri Jember with expertise in web and mobile application development and enterprise database management. Experienced in corporate environments and freelance roles building end-to-end system architectures, large-scale data processing pipelines, Machine Learning integrations, and AI model optimization. Skilled in technical troubleshooting, cross-functional collaboration, and delivering scalable software solutions."
  },
  philosophies: [
    {
      title: { id: "Arsitektur End-to-End & Terukur", en: "End-to-End & Scalable Architecture" },
      desc: {
        id: "Merancang dan membangun sistem perangkat lunak secara menyeluruh, mulai dari perancangan skema basis data, backend API, antarmuka pengguna, hingga infrastruktur server yang handal.",
        en: "Designing and engineering software systems comprehensively from database schemas and backend APIs to responsive frontends and resilient server infrastructure."
      },
      icon: "Cpu"
    },
    {
      title: { id: "Manajemen & Keamanan Basis Data", en: "Database Management & Security" },
      desc: {
        id: "Mengelola, menata, dan mengamankan basis data server melalui prosedur pemeliharaan rutin guna menjaga integritas data perusahaan dan efisiensi query.",
        en: "Managing, organizing, and securing server databases through systematic maintenance routines to preserve data integrity and peak query efficiency."
      },
      icon: "Code2"
    },
    {
      title: { id: "High Availability & Troubleshooting", en: "High Availability & Troubleshooting" },
      desc: {
        id: "Menjaga ketersediaan sistem dan layanan server lokal maupun publik tetap stabil, aman, dan memiliki performa optimal dengan respon cepat terhadap kendala teknis.",
        en: "Ensuring high availability across local and public server infrastructure, maintaining optimal stability and rapid resolution of technical issues."
      },
      icon: "Activity"
    },
    {
      title: { id: "Integrasi AI & Data Processing", en: "AI Integration & Data Processing" },
      desc: {
        id: "Mengolah data skala besar (data processing) serta mengintegrasikan dan mengoptimasi model Machine Learning/AI untuk menghasilkan solusi cerdas berdampak nyata.",
        en: "Processing large-scale datasets while integrating and optimizing Machine Learning/AI models into production applications for tangible real-world impact."
      },
      icon: "GitBranch"
    }
  ],
  stats: [
    {
      label: { id: "Pendidikan", en: "Education" },
      value: "D4 TI",
      sublabel: { id: "Politeknik Negeri Jember", en: "Politeknik Negeri Jember" }
    },
    {
      label: { id: "Sertifikasi", en: "Certification" },
      value: "BNSP",
      sublabel: { id: "Certified Web Developer", en: "Certified Web Developer" }
    },
    {
      label: { id: "Pengalaman Kerja", en: "Experience" },
      value: "3+ Thn",
      sublabel: { id: "Perusahaan & Freelance", en: "Corporate & Freelance" }
    },
    {
      label: { id: "Keandalan Server", en: "Server Reliability" },
      value: "99.9%",
      sublabel: { id: "High Availability SLA", en: "High Availability SLA" }
    }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com/in/fasta-biqul-hoirot-44a05115b",
    email: "mailto:fastabikul87@gmail.com",
    phone: "tel:081359595430",
    whatsapp: "https://wa.me/6281359595430",
    resume: "#resume"
  }
};

export const projectsData: Project[] = [
  {
    id: "kacamatamu-jember",
    title: "Kacamatamu Eyewear System",
    tagline: {
      id: "Aplikasi toko kacamata: pemeriksaan refraksi mata, manajemen resep, dan etalase pemasaran",
      en: "Optical store management platform: refraction eye exam records, prescription history, and marketing catalog"
    },
    description: {
      id: "Aplikasi terintegrasi untuk toko kacamata Kacamatamu Eyewear Jember yang memfasilitasi pencatatan data pemeriksaan refraksi mata pelanggan (visus, spheris, silinder, axis, PD), manajemen riwayat resep lensa, serta katalog pemasaran frame dan kacamata secara online.",
      en: "Integrated optical management platform for Kacamatamu Eyewear Jember, streamlining customer refraction eye examinations (SPH, CYL, AXIS, PD), prescription history tracking, and digital eyewear catalog marketing."
    },
    architecture: {
      id: "Arsitektur web client-server dengan basis data relasional untuk pencatatan rekam refraksi presisi, manajemen katalog inventaris frame, dan integrasi modul transaksi pemesanan.",
      en: "Client-server web architecture with relational database schemas for precision refraction logging, frame inventory cataloging, and sales order processing."
    },
    category: "Full-Stack",
    tags: ["Web Development", "Database Management", "Sistem Optik", "Pemeriksaan Refraksi", "Katalog Pemasaran", "REST API"],
    metrics: ["Pemeriksaan Refraksi Terstruktur", "Katalog Pemasaran Online", "Riwayat Resep Terintegrasi"],
    githubUrl: "https://github.com",
    demoUrl: "https://kacamatamu-jember.com/",
    featured: true,
    keyFeatures: {
      id: [
        "Pencatatan data pemeriksaan refraksi mata (Spheris, Silinder, Axis, Addisi, Pupillary Distance / PD)",
        "Penyimpanan riwayat resep kacamata pelanggan untuk kemudahan kontrol dan repeat order",
        "Katalog produk dan pemasaran frame serta lensa kacamata terintegrasi",
        "Laporan transaksi dan nota pemesanan kacamata otomatis untuk operasional toko"
      ],
      en: [
        "Digital refraction examination logging (Sphere, Cylinder, Axis, Addition, Pupillary Distance / PD)",
        "Customer optical prescription history tracking for seamless follow-ups and repeat orders",
        "Integrated online product showcase and marketing catalog for frames and lenses",
        "Automated optical sales order invoice generation and store operational reporting"
      ]
    }
  },
  {
    id: "belankon-kurir",
    title: "Belankon Kurir",
    tagline: {
      id: "Solusi digital optimasi operasional logistik dan pelacakan pengiriman barang kurir toko",
      en: "Digital logistics optimization and real-time delivery tracking platform for retail couriers"
    },
    description: {
      id: "Aplikasi yang dikembangkan untuk mengoptimalkan operasional logistik toko, mencakup manajemen armada kurir, perutean pengiriman barang secara efisien, serta pelacakan status pengiriman real-time.",
      en: "Application developed to streamline store logistics, featuring courier fleet management, efficient delivery routing, and real-time package delivery tracking."
    },
    architecture: {
      id: "Arsitektur client-server dengan integrasi REST API, sinkronisasi data pengiriman real-time, dan manajemen status pesanan terstruktur.",
      en: "Client-server architecture with REST API integration, real-time shipment status synchronization, and structured order dispatch pipeline."
    },
    category: "Full-Stack",
    tags: ["Mobile App", "Web Development", "REST API", "Database Management", "Logistics", "Geolocation"],
    metrics: ["Operasional Logistik Optimal", "Pelacakan Real-time", "Efisiensi Kurir Toko"],
    githubUrl: "https://github.com",
    demoUrl: "https://esolusindo.com",
    featured: true,
    keyFeatures: {
      id: [
        "Pelacakan status pengiriman barang dari toko ke konsumen secara akurat",
        "Manajemen rute dan distribusi tugas kurir harian",
        "Dashboard admin terintegrasi untuk pemantauan armada logistik",
        "Notifikasi perubahan status paket secara langsung"
      ],
      en: [
        "Accurate parcel dispatch tracking from store to end-consumer",
        "Route management and daily courier task distribution",
        "Integrated admin dashboard for courier fleet monitoring",
        "Instant shipment status transition notifications"
      ]
    }
  },
  {
    id: "isi-piringku",
    title: "ISI-Piringku Health Tracker",
    tagline: {
      id: "Platform pemantauan kesehatan & evaluasi asupan gizi harian secara terstruktur",
      en: "Health monitoring platform to record and evaluate structured daily nutritional intake"
    },
    description: {
      id: "Aplikasi pemantauan kesehatan komprehensif yang memfasilitasi pengguna dalam mencatat makanan harian, mengevaluasi keseimbangan nutrisi, dan mendapatkan insight kesehatan berbasis pedoman gizi seimbang.",
      en: "Comprehensive health monitoring application enabling users to log daily meals, assess nutritional balance, and gain personalized insights based on balanced diet guidelines."
    },
    architecture: {
      id: "Desain sistem web interaktif dengan skema database relasional untuk logging makanan, kalkulator nutrisi otomatis, dan visualisasi riwayat gizi.",
      en: "Interactive web system design with relational database schemas for meal logging, automated nutrition calculating, and historical data visualization."
    },
    category: "Full-Stack",
    tags: ["Web Application", "Nutritional Analysis", "Database MySQL", "RESTful API", "UI/UX Design"],
    metrics: ["Pencatatan Gizi Terstruktur", "Evaluasi Nutrisi Harian", "Antarmuka Ramah Pengguna"],
    githubUrl: "https://github.com",
    demoUrl: "https://esolusindo.com",
    featured: true,
    keyFeatures: {
      id: [
        "Pencatatan menu makanan harian sesuai kategori gizi",
        "Kalkulasi asupan kalori dan nutrisi harian secara otomatis",
        "Laporan riwayat konsumsi mingguan dan bulanan pengguna",
        "Antarmuka yang bersih, intuitif, dan responsif di smartphone"
      ],
      en: [
        "Daily meal intake logging categorized by nutritional groups",
        "Automated daily calorie and macronutrient computation",
        "Weekly and monthly user nutritional progress reporting",
        "Clean, intuitive, and mobile-friendly responsive interface"
      ]
    }
  },
  {
    id: "jdih-jember",
    title: "JDIH Kabupaten Jember",
    tagline: {
      id: "Portal Jaringan Dokumentasi dan Informasi Hukum resmi Kabupaten Jember",
      en: "Official Legal Documentation and Information Network portal for Jember Regency"
    },
    description: {
      id: "Situs web resmi JDIH Kabupaten Jember yang berfungsi sebagai pusat penyimpanan, pengelolaan, penelusuran, dan pengarsipan produk hukum daerah serta layanan administrasi publik bagi masyarakat.",
      en: "Official legal portal of Jember Regency serving as a centralized hub for storing, managing, searching, and archiving local government legal documents and public administrative records."
    },
    architecture: {
      id: "Sistem manajemen dokumen hukum berbasis web dengan pengindeksan data terstruktur, pencarian cepat (full-text search), dan hak akses bertingkat.",
      en: "Web-based legal document management system with structured data indexing, fast full-text searching, and tiered administrative access controls."
    },
    category: "Backend & Cloud",
    tags: ["Web Portal", "Document Management", "Government System", "Database Security", "Search Indexing"],
    metrics: ["Pusat Arsip Hukum Publik", "Pencarian Cepat & Akurat", "Keamanan Dokumen Resmi"],
    githubUrl: "https://github.com",
    demoUrl: "https://jdih.jemberkab.go.id",
    featured: true,
    keyFeatures: {
      id: [
        "Pusat repositori produk hukum: Perda, Perbup, SK Bupati, dan Keputusan Daerah",
        "Fitur pencarian dan filter dokumen hukum berdasarkan nomor, tahun, dan topik",
        "Sistem pengarsipan digital terstruktur dengan akses unduh berkas publik",
        "Panel administrasi pengelolaan dan verifikasi dokumen oleh dinas terkait"
      ],
      en: [
        "Central legal repository: Regional Regulations, Decrees, and Legal Decisions",
        "Fast document search and filtering by number, year, and legal category",
        "Structured digital archiving system with public document download access",
        "Administrative dashboard for official legal verification and publishing"
      ]
    }
  },
  {
    id: "group-88-erp",
    title: "Integrated Enterprise System (88 Group)",
    tagline: {
      id: "Ekosistem aplikasi & sistem informasi terintegrasi lintas divisi perusahaan",
      en: "Integrated application ecosystem & enterprise information system across corporate divisions"
    },
    description: {
      id: "Rancang bangun ekosistem sistem informasi perusahaan terpadu yang menghubungkan sistem manajemen produksi, keuangan, keamanan (security), pemasaran (marketing), dan operasional yayasan secara terpusat.",
      en: "End-to-end design and engineering of an integrated enterprise system connecting production management, finance, security, marketing, and foundation operations."
    },
    architecture: {
      id: "Arsitektur multi-divisi modular dengan integrasi database terpusat, kontrol hak akses berbasis peran (RBAC), dan pemantauan server berkala.",
      en: "Modular cross-divisional architecture with centralized database integration, role-based access control (RBAC), and continuous server monitoring."
    },
    category: "Backend & Cloud",
    tags: ["Enterprise System", "Sistem Produksi", "Sistem Keuangan", "Server Maintenance", "Database Security"],
    metrics: ["Lintas 5+ Divisi Perusahaan", "High Availability 99.9%", "Alur Kerja Terintegrasi"],
    githubUrl: "https://github.com",
    featured: false,
    keyFeatures: {
      id: [
        "Modul manajemen operasional produksi & pencatatan keuangan akurat",
        "Sistem keamanan akses data dan verifikasi otentikasi pengguna",
        "Dukungan operasional terintegrasi untuk divisi pemasaran dan yayasan",
        "Pemeliharaan infrastruktur server lokal maupun publik dengan stabilitas tinggi"
      ],
      en: [
        "Operational production management & precise financial bookkeeping modules",
        "Data security protocols and multi-factor user authentication verification",
        "Integrated operational modules for marketing division and foundation activities",
        "High-stability maintenance of local and public server environments"
      ]
    }
  },
  {
    id: "alluvia-maintenance",
    title: "Alluvia Web System & Server Ops",
    tagline: {
      id: "Rancang bangun sistem informasi web end-to-end & manajemen keandalan server",
      en: "End-to-end web information system architecture & server reliability operations"
    },
    description: {
      id: "Pengembangan sistem informasi web menyeluruh untuk operasional perusahaan, dibarengi dengan pemeliharaan server berkala, penataan basis data, dan optimasi performa berkelanjutan.",
      en: "Comprehensive web information system development supporting enterprise operations alongside periodic server maintenance, database hygiene, and ongoing optimization."
    },
    architecture: {
      id: "Sistem arsitektur web terintegrasi dengan pemeliharaan database rutin, prosedur backup berkala, dan pemantauan uptime server aktif.",
      en: "Integrated web architecture featuring routine database maintenance, scheduled backups, and active server uptime monitoring."
    },
    category: "Systems & DevOps",
    tags: ["Server Maintenance", "Database Tuning", "System Architecture", "Troubleshooting", "Data Integrity"],
    metrics: ["Integritas Basis Data 100%", "Stabilitas Server Maksimal", "Optimasi Rutin Berkala"],
    githubUrl: "https://github.com",
    featured: false,
    keyFeatures: {
      id: [
        "Rancang arsitektur sistem informasi web dari perancangan hingga implementasi",
        "Pemeliharaan dan optimasi server untuk memastikan keandalan tinggi",
        "Manajemen dan pengamanan basis data server untuk menjaga integritas data",
        "Troubleshooting cepat untuk mencegah kendala operasional"
      ],
      en: [
        "End-to-end web information system delivery from architectural blueprint to rollout",
        "Routine server maintenance and tuning ensuring maximum reliability",
        "Database administration and security safeguarding corporate data integrity",
        "Rapid technical troubleshooting preventing operational disruptions"
      ]
    }
  },
  {
    id: "ml-data-pipeline",
    title: "Data Processing & AI Model Integration",
    tagline: {
      id: "Pipeline pengolahan data skala besar & integrasi model Machine Learning",
      en: "Large-scale data processing pipeline & Machine Learning model integration"
    },
    description: {
      id: "Implementasi solusi pemrosesan data bervolume besar dan integrasi model Machine Learning/AI untuk analisis prediktif, ekstraksi data otomatis, dan optimasi efisiensi komputasi.",
      en: "Implementation of high-volume data processing pipelines and Machine Learning/AI model integrations for predictive analysis, automated extraction, and computational efficiency."
    },
    architecture: {
      id: "Pipeline data modular dengan preprocessing, feature extraction, inferensi model AI, dan penyajian hasil via RESTful API.",
      en: "Modular data pipeline featuring preprocessing, feature extraction, AI model inference, and delivery via RESTful APIs."
    },
    category: "AI & Tools",
    tags: ["Python", "Machine Learning", "Data Processing", "AI Optimization", "REST API"],
    metrics: ["Data Processing Skala Besar", "Optimasi Model AI", "Pipeline Terautomasi"],
    githubUrl: "https://github.com",
    featured: false,
    keyFeatures: {
      id: [
        "Pengolahan dan pembersihan dataset bervolume besar secara terstruktur",
        "Integrasi inferensi model Machine Learning ke dalam ekosistem web aplikasi",
        "Optimasi latensi inferensi model untuk respons cepat",
        "Automasi validasi data untuk meminimalisir anomali input"
      ],
      en: [
        "Structured processing and hygiene of high-volume datasets",
        "Integration of Machine Learning model inference into web ecosystems",
        "Inference latency optimization for prompt API responses",
        "Automated data validation to eliminate input anomalies"
      ]
    }
  }
];

export const experiencesData: Experience[] = [
  {
    id: "exp-88group",
    role: "IT Programmer Staff",
    company: "88 Group",
    companyUrl: "https://88group.id",
    period: "Januari 2026 – November 2026",
    location: "Jember, Jawa Timur",
    type: "Full-time",
    description: {
      id: "Merancang dan mengembangkan ekosistem aplikasi serta sistem informasi terintegrasi untuk mendukung kelancaran operasional harian lintas divisi perusahaan.",
      en: "Designed and engineered an integrated application ecosystem and enterprise information system supporting daily operations across corporate divisions."
    },
    achievements: {
      id: [
        "Merancang dan mengembangkan ekosistem aplikasi serta sistem informasi terintegrasi untuk mendukung operasional lintas divisi: manajemen produksi, keuangan, keamanan (security), pemasaran (marketing), dan operasional yayasan.",
        "Mengelola dan memelihara infrastruktur server lokal maupun publik secara menyeluruh guna memastikan seluruh layanan digital berjalan stabil, aman, dan memiliki performa optimal.",
        "Menjaga ketersediaan sistem dan keandalan layanan (high availability) melalui pemantauan rutin serta optimasi teknis untuk mendukung kelancaran operasional harian perusahaan."
      ],
      en: [
        "Designed and built an integrated enterprise application ecosystem across cross-functional divisions: production management, finance, security, marketing, and foundation operations.",
        "Managed and maintained both local and public server infrastructure comprehensively, ensuring digital services operate stably, securely, and with optimal performance.",
        "Maintained high availability and service reliability through routine monitoring and technical optimizations supporting seamless daily business operations."
      ]
    },
    techStack: ["Web Development", "Database Management", "Server Infrastructure", "System Security", "Troubleshooting", "High Availability"]
  },
  {
    id: "exp-alluvia",
    role: "Remote Maintenance",
    company: "Alluvia",
    companyUrl: "https://alluvia.co.id",
    period: "Oktober 2024 – November 2026",
    location: "Jember, Jawa Timur",
    type: "Remote / Contract",
    description: {
      id: "Bertanggung jawab atas arsitektur sistem informasi web end-to-end, pemeliharaan server berkala, dan penataan keamanan basis data perusahaan.",
      en: "Responsible for end-to-end web information system architecture, routine server maintenance, and enterprise database security."
    },
    achievements: {
      id: [
        "Merancang dan membangun sistem informasi berbasis web secara menyeluruh (end-to-end), mulai dari tahap perancangan arsitektur hingga implementasi untuk mendukung operasional perusahaan.",
        "Melakukan pemeliharaan (maintenance) dan optimasi sistem secara berkala guna memastikan layanan server berjalan stabil, optimal, dan memiliki keandalan tinggi.",
        "Mengelola, menata, dan mengamankan basis data server melalui prosedur pemeliharaan rutin untuk menjaga integritas data serta efisiensi alur kerja perusahaan."
      ],
      en: [
        "Engineered end-to-end web-based information systems from architectural design through implementation to empower company operations.",
        "Conducted regular system maintenance and performance optimizations to ensure server services remain stable, efficient, and highly dependable.",
        "Administered, organized, and secured server databases through routine maintenance protocols to preserve data integrity and operational workflow efficiency."
      ]
    },
    techStack: ["System Architecture", "Web Information Systems", "Database Administration", "Server Maintenance", "Data Integrity"]
  },
  {
    id: "exp-esolusindo",
    role: "Full-stack Developer",
    company: "ESOLUSINDO",
    companyUrl: "https://esolusindo.com",
    period: "Agustus 2023 – Januari 2024",
    location: "Jember, Jawa Timur",
    type: "Full-time",
    description: {
      id: "Mengembangkan berbagai solusi aplikasi digital berbasis web dan mobile untuk klien perusahaan ritel, kesehatan, dan instansi pemerintahan.",
      en: "Developed diverse web and mobile digital solutions for retail enterprises, healthcare platforms, and regional government institutions."
    },
    achievements: {
      id: [
        "Mengembangkan aplikasi Belankon Kurir, sebuah solusi digital untuk mengoptimalkan operasional logistik dan pelacakan pengiriman barang secara efisien bagi kurir toko.",
        "Merancang dan membangun aplikasi ISI-Piringku, platform pemantauan kesehatan yang memfasilitasi pengguna dalam mencatat serta mengevaluasi asupan gizi harian secara terstruktur.",
        "Membangun situs web Jaringan Dokumentasi dan Informasi Hukum (JDIH) Kabupaten Jember sebagai pusat penyimpanan, pengelolaan, dan pengarsipan dokumen hukum serta administrasi publik.",
        "Mengelola siklus pengembangan proyek secara menyeluruh mulai dari analisis kebutuhan hingga implementasi, guna menghadirkan solusi digital yang fungsional dan berdampak langsung bagi pengguna."
      ],
      en: [
        "Developed Belankon Kurir mobile application, optimizing store logistics and real-time delivery tracking for retail couriers.",
        "Architected and built ISI-Piringku, a structured health platform enabling users to track and evaluate daily nutritional intake.",
        "Engineered the official Legal Documentation and Information Network (JDIH) web portal for Jember Regency to archive and manage public legal documents.",
        "Managed end-to-end project lifecycles from requirement analysis through deployment, delivering impactful digital solutions for end-users."
      ]
    },
    techStack: ["Full-stack Web", "Mobile App Development", "MySQL", "REST API", "SDLC Management", "UI/UX"]
  }
];

export const educationData: Education[] = [
  {
    id: "edu-polije",
    major: "D4 Teknik Informatika (Teknologi Informasi)",
    institution: "Politeknik Negeri Jember",
    period: "Agustus 2020 – Agustus 2024",
    location: "Jember, Jawa Timur",
    description: {
      id: "Fokus studi pada rekayasa perangkat lunak, arsitektur basis data relasional & non-relasional, pengembangan web & mobile, pengolahan data, dan Machine Learning.",
      en: "Focused on software engineering, relational & non-relational database architectures, web & mobile development, large-scale data processing, and Machine Learning."
    }
  },
  {
    id: "edu-man1",
    major: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
    institution: "Madrasah Aliyah Negeri 1 Jember",
    period: "Agustus 2017 – Agustus 2020",
    location: "Jember, Jawa Timur",
    description: {
      id: "Membangun fondasi logika berpikir kritis, pemodelan matematis, dan pemecahan masalah algoritmis.",
      en: "Built a solid foundation in analytical thinking, mathematical modeling, and algorithmic problem-solving."
    }
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: { id: "Pengembangan Web & Mobile", en: "Web & Mobile Development" },
    iconName: "Layout",
    skills: [
      { name: "Web Development (Frontend & Backend)", level: 95, experience: "3+ tahun", highlight: "End-to-end SDLC, Responsive UI, Clean Code" },
      { name: "Mobile Application Development", level: 88, experience: "2+ tahun", highlight: "Logistik Kurir, Health Tracker Apps, Tracking GPS" },
      { name: "RESTful APIs & Web Technologies", level: 92, experience: "3+ tahun", highlight: "API Design, Endpoint Security, JSON Integration" },
      { name: "UI/UX & Frontend Implementation", level: 90, experience: "3+ tahun", highlight: "Modern Responsive Layouts, User Flow, Accessibility" }
    ]
  },
  {
    title: { id: "Basis Data & Infrastruktur Server", en: "Databases & Server Infrastructure" },
    iconName: "Server",
    skills: [
      { name: "Manajemen Basis Data (Database Management)", level: 94, experience: "3+ tahun", highlight: "MySQL, Relational Schema, Data Integrity, Optimasi Query" },
      { name: "Server Maintenance & Monitoring", level: 92, experience: "2+ tahun", highlight: "Infrastruktur Server Lokal & Publik, Uptime, Logging" },
      { name: "High Availability & System Reliability", level: 90, experience: "2+ tahun", highlight: "Pemantauan Rutin, Redundancy, Fail-safe Ops" },
      { name: "Security & Access Control", level: 86, experience: "2+ tahun", highlight: "Sistem Keamanan Akses, RBAC, Prosedur Pemeliharaan Rutin" }
    ]
  },
  {
    title: { id: "Pengolahan Data & Machine Learning", en: "Data Processing & Machine Learning" },
    iconName: "FileCode2",
    skills: [
      { name: "Pengolahan Data Skala Besar (Data Processing)", level: 90, experience: "2+ tahun", highlight: "Data Pipeline, Preprocessing, Validasi & Transformasi" },
      { name: "Integrasi Machine Learning & Model AI", level: 85, experience: "2+ tahun", highlight: "Model Inference, Model Optimization, Smart System Solutions" },
      { name: "Pemecahan Masalah Teknis (Troubleshooting)", level: 95, experience: "3+ tahun", highlight: "Root-cause Analysis, Debugging, Quick Issue Resolution" },
      { name: "Web Technologies Programming", level: 92, experience: "3+ tahun", highlight: "Modern Programming Languages, Frameworks, Architecture" }
    ]
  },
  {
    title: { id: "Kolaborasi & Manajemen Proyek", en: "Collaboration & Delivery" },
    iconName: "Cloud",
    skills: [
      { name: "Team Coordination & Cross-Functional", level: 94, experience: "3+ tahun", highlight: "Kolaborasi Tim Lintas Divisi, Alur Komunikasi Efektif" },
      { name: "Problem Solving & Analytical Thinking", level: 95, experience: "3+ tahun", highlight: "Penerjemahan Kebutuhan Bisnis ke Solusi Teknis" },
      { name: "Siklus Proyek Menyeluruh (End-to-End)", level: 92, experience: "3+ tahun", highlight: "Analisis Kebutuhan, Perancangan, Testing, Implementasi" },
      { name: "Microsoft Office & Dokumentasi Teknis", level: 90, experience: "4+ tahun", highlight: "Pelaporan Teknis, Dokumentasi Sistem, Presentasi" }
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-bnsp",
    title: "Web Developer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    issueDate: "2024",
    credentialId: "BNSP-WD-2024",
    credentialUrl: "https://bnsp.go.id"
  },
  {
    id: "cert-office",
    title: "Microsoft Offices Certified",
    issuer: "Politeknik Negeri Jember",
    issueDate: "2024",
    credentialId: "POLIJE-MOS-2024",
    credentialUrl: "https://polije.ac.id"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Engineering Lead",
    role: "Operational Technology",
    company: "88 Group",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    content: {
      id: "Fasta memiliki kemampuan teknis yang sangat solid, baik dalam membangun ekosistem aplikasi lintas divisi maupun mengelola infrastruktur server dengan reliabilitas tinggi. Solutif dalam pemecahan masalah.",
      en: "Fasta possesses solid technical acumen across cross-divisional application development and server infrastructure maintenance with high reliability. Exceptional problem-solving skills."
    }
  },
  {
    id: "test-2",
    name: "Project Manager",
    role: "Digital Solutions",
    company: "ESOLUSINDO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    content: {
      id: "Dalam pengembangan Belankon Kurir dan portal JDIH Jember, Fasta menunjukkan dedikasi penuh mengawal siklus proyek dari analisis hingga implementasi produksi dengan hasil yang sangat rapi dan tepat waktu.",
      en: "Throughout the development of Belankon Kurir and JDIH Jember, Fasta demonstrated outstanding dedication managing end-to-end SDLC from requirement analysis to production delivery."
    }
  }
];
