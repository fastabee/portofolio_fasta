import type { PersonalInfo, Project, Experience, SkillCategory, Certification, Testimonial } from '../types';

export const personalData: PersonalInfo = {
  name: "Rian Pratama",
  handle: "rianpratama.dev",
  title: "Senior Software Engineer",
  roles: [
    "Full-Stack Software Engineer",
    "Distributed Systems Architect",
    "Golang & TypeScript Specialist",
    "Cloud & DevOps Practitioner"
  ],
  status: {
    id: "Terbuka untuk peluang kerja & proyek baru",
    en: "Available for new opportunities & contracts"
  },
  location: "Jakarta, Indonesia (Available for Remote Worldwide)",
  email: "rian.pratama.dev@gmail.com",
  phone: "+62 812-3456-7890",
  bio: {
    id: "Software Engineer dengan 5+ tahun pengalaman dalam merancang dan membangun sistem perangkat lunak berskala besar, andal, dan berkinerja tinggi. Berfokus pada arsitektur microservices, concurrency, cloud-native infrastructure, dan antarmuka web modern yang responsif.",
    en: "Software Engineer with 5+ years of experience designing and building scalable, reliable, and high-performance software systems. Focused on microservices architecture, concurrency, cloud-native infrastructure, and modern responsive web interfaces."
  },
  philosophies: [
    {
      title: { id: "Arsitektur Skalabel & Andal", en: "Scalable & Resilient Systems" },
      desc: { 
        id: "Membangun sistem yang tahan beban tinggi, memiliki graceful degradation, serta menerapkan pola fault-tolerant seperti circuit breaker dan retry queues.",
        en: "Building systems that withstand high load, degrade gracefully, and apply fault-tolerant patterns like circuit breakers and retry queues."
      },
      icon: "Cpu"
    },
    {
      title: { id: "Clean Code & Type Safety", en: "Clean Code & Type Safety" },
      desc: { 
        id: "Kode yang rapi, teruji otomatis (unit & integration tests), serta type-safety yang ketat untuk meminimalisir bug sebelum mencapai produksi.",
        en: "Clean code with automated testing (unit & integration) and strict type-safety to eliminate bugs before hitting production."
      },
      icon: "Code2"
    },
    {
      title: { id: "Observabilitas Sejak Awal", en: "Observability by Default" },
      desc: { 
        id: "Menerapkan distributed tracing, structured logging, dan real-time metric dashboards (Prometheus/Grafana) agar performa sistem selalu terukur.",
        en: "Embedding distributed tracing, structured logging, and real-time metrics (Prometheus/Grafana) so performance is always measurable."
      },
      icon: "Activity"
    },
    {
      title: { id: "Automasi & Developer Experience", en: "Automation & DX" },
      desc: { 
        id: "Alur CI/CD otomatis, containerization dengan Docker, dan infrastruktur terkontrol (IaC) untuk rilis cepat dan bebas stres.",
        en: "Automated CI/CD pipelines, containerization with Docker, and Infrastructure as Code for rapid, stress-free releases."
      },
      icon: "GitBranch"
    }
  ],
  stats: [
    {
      label: { id: "Pengalaman", en: "Experience" },
      value: "5+ Thn",
      sublabel: { id: "Di Industri Tech", en: "In Tech Industry" }
    },
    {
      label: { id: "Proyek Selesai", en: "Projects Delivered" },
      value: "35+",
      sublabel: { id: "Produksi Skala Besar", en: "Production Systems" }
    },
    {
      label: { id: "System Uptime", en: "Reliability" },
      value: "99.98%",
      sublabel: { id: "SLA Produksi", en: "Production SLA" }
    },
    {
      label: { id: "GitHub Commits", en: "Code Commits" },
      value: "2,400+",
      sublabel: { id: "Aktivitas Kontribusi", en: "Active Contributions" }
    }
  ],
  socials: {
    github: "https://github.com/rianpratama",
    linkedin: "https://linkedin.com/in/rianpratama",
    twitter: "https://x.com/rianpratama_dev",
    email: "mailto:rian.pratama.dev@gmail.com",
    resume: "#resume"
  }
};

export const projectsData: Project[] = [
  {
    id: "omnipulse-engine",
    title: "OmniPulse Event Stream",
    tagline: {
      id: "Platform streaming event terdistribusi dengan throughput tinggi & latensi sub-5ms",
      en: "High-throughput distributed event streaming platform with sub-5ms latency"
    },
    description: {
      id: "Sistem pengolahan event terdistribusi untuk memproses transaksi finansial secara real-time. Dibangun menggunakan Go dan Kafka dengan protokol komunikasi gRPC untuk efisiensi transfer data maksimal.",
      en: "Distributed event processing system for real-time financial transaction streams. Built using Go and Kafka with gRPC communication protocols for maximal throughput."
    },
    architecture: {
      id: "Event-driven microservices dengan partition balancing otomatis, Redis pub/sub caching, dan sinkronisasi log append-only.",
      en: "Event-driven microservices featuring auto partition rebalancing, Redis pub/sub caching, and append-only log synchronization."
    },
    category: "Backend & Cloud",
    tags: ["Go (Golang)", "Apache Kafka", "gRPC", "Docker", "Redis", "PostgreSQL", "Prometheus"],
    metrics: ["120k RPS Throughput", "sub-5ms P99 Latency", "Zero Message Loss"],
    githubUrl: "https://github.com/rianpratama/omnipulse-engine",
    demoUrl: "https://omnipulse-demo.dev",
    featured: true,
    keyFeatures: {
      id: [
        "Distributed consensus menggunakan protokol Raft",
        "Pipeline kompresi binary protocol buffers (Protobuf)",
        "Dukungan dead-letter queue (DLQ) otomatis",
        "Dashboard metrik Prometheus & Grafana terintegrasi"
      ],
      en: [
        "Distributed consensus using Raft protocol",
        "Binary protocol buffer (Protobuf) compression pipeline",
        "Automated dead-letter queue (DLQ) support",
        "Built-in Prometheus & Grafana metric dashboard"
      ]
    }
  },
  {
    id: "codesentinel-ai",
    title: "CodeSentinel AI Reviewer",
    tagline: {
      id: "Asisten review kode otomatis berbasis LLM & analisis statis keamanan untuk CI/CD",
      en: "LLM-powered automated code review & security static analysis agent for CI/CD"
    },
    description: {
      id: "Alat CLI dan GitHub Actions bot yang memindai pull request, menganalisis Abstract Syntax Tree (AST), mendeteksi celah keamanan OWASP, dan memberikan saran refactoring kode secara kontekstual.",
      en: "CLI tool and GitHub Actions bot that scans pull requests, parses ASTs, detects OWASP security vulnerabilities, and suggests context-aware refactoring."
    },
    architecture: {
      id: "CLI Node.js/TypeScript dengan Babel AST parser, integrasi Gemini 2.0 Flash API dengan prompt chaining berstruktur.",
      en: "Node.js/TypeScript CLI with Babel AST parser, Gemini 2.0 Flash API integration with structured prompt chaining."
    },
    category: "AI & Tools",
    tags: ["TypeScript", "Node.js", "AST Parser", "Gemini API", "GitHub Actions", "Docker"],
    metrics: ["70% Review Time Saved", "450+ Active Repos", "OWASP Top 10 Coverage"],
    githubUrl: "https://github.com/rianpratama/codesentinel-ai",
    demoUrl: "https://codesentinel.dev",
    featured: true,
    keyFeatures: {
      id: [
        "Pemeriksaan celah SQL Injection, XSS, dan Secret Leaks",
        "Saran perbaikan kode otomatis berupa diff git satu-klik",
        "Integrasi native dengan workflow GitHub Actions & GitLab CI",
        "Model token optimizer untuk menekan biaya API hingga 65%"
      ],
      en: [
        "Automated vulnerability detection for SQLi, XSS, and Secret Leaks",
        "One-click Git diff suggestions directly in PR comments",
        "Native GitHub Actions & GitLab CI workflow integrations",
        "Token optimization caching reducing LLM costs by 65%"
      ]
    }
  },
  {
    id: "devpulse-dashboard",
    title: "DevPulse APM & Cloud Console",
    tagline: {
      id: "Dashboard monitoring observability aplikasi & metrik cloud multi-cluster",
      en: "Modern application observability & multi-cluster cloud metrics dashboard"
    },
    description: {
      id: "Aplikasi web modern untuk memonitor health check server, error rate, memory leak, dan trace jaringan lintas microservices dengan UI yang interaktif dan responsif.",
      en: "Full-stack observability web application to track microservice health checks, error rates, memory leaks, and distributed network traces."
    },
    architecture: {
      id: "React 19 + TypeScript, Tailwind CSS, WebSocket live updates, dan backend ClickHouse untuk query log bervolume tinggi.",
      en: "React 19 + TypeScript, Tailwind CSS, WebSocket live streaming, and ClickHouse backend for high-volume log querying."
    },
    category: "Full-Stack",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "WebSocket", "ClickHouse", "Go", "Docker"],
    metrics: ["10M+ Daily Logs Indexed", "<200ms Query Response", "Real-time SSE"],
    githubUrl: "https://github.com/rianpratama/devpulse-apm",
    demoUrl: "https://devpulse-demo.dev",
    featured: true,
    keyFeatures: {
      id: [
        "Visualisasi dependensi service dalam grafik interaktif",
        "Live tail log streaming via WebSocket",
        "Pemberitahuan alert via Telegram, Slack & Webhook",
        "Sistem tema Dark/Light modern dengan layout responsif"
      ],
      en: [
        "Interactive service dependency topology map",
        "Live tail log streaming over WebSockets",
        "Instant alert notifications via Telegram, Slack & Webhooks",
        "Modern Dark/Light theme with responsive layout"
      ]
    }
  },
  {
    id: "finpay-distributed-ledger",
    title: "FinPay Idempotent Ledger",
    tagline: {
      id: "Sistem buku kas transaksi keuangan terdistribusi dengan jaminan ACID & zero-duplicate",
      en: "Distributed financial transaction ledger with ACID guarantee & idempotent execution"
    },
    description: {
      id: "Core engine perbankan digital untuk mutasi rekening, transfer antar-bank, dan rekonsiliasi otomatis dengan integritas data ganda (double-entry bookkeeping).",
      en: "Core digital banking engine handling balance mutations, inter-bank transfers, and automated reconciliation with double-entry bookkeeping."
    },
    architecture: {
      id: "PostgreSQL dengan transaksi serializable, Redis distributed locks, dan arsitektur Outbox Pattern untuk pengiriman event transaksi.",
      en: "PostgreSQL serializable isolation, Redis distributed locking, and Outbox Pattern for reliable transactional event dispatching."
    },
    category: "Backend & Cloud",
    tags: ["Go", "PostgreSQL", "Redis", "Docker", "Clean Architecture", "REST API"],
    metrics: ["100% Data Accuracy", "10,000+ TPS Tested", "Zero Concurrency Drift"],
    githubUrl: "https://github.com/rianpratama/finpay-ledger",
    demoUrl: "https://finpay-ledger-docs.dev",
    featured: false,
    keyFeatures: {
      id: [
        "Idempotency key enforcement mencegah double spending",
        "Audit trail lengkap dengan cryptographic hash verification",
        "Automated reconciliation worker setiap akhir hari",
        "Unit test & load test coverage mencapai 92%"
      ],
      en: [
        "Idempotency key enforcement preventing double payments",
        "Complete audit trail with cryptographic hash verification",
        "Automated end-of-day reconciliation background worker",
        "92% unit test & load test suite code coverage"
      ]
    }
  },
  {
    id: "kubeops-iac",
    title: "NexusOps Kubernetes Engine",
    tagline: {
      id: "Otomasi provisi cluster Kubernetes & CI/CD GitOps dengan Terraform",
      en: "Automated Kubernetes cluster provisioning & GitOps CI/CD engine with Terraform"
    },
    description: {
      id: "Blueprint Infrastructure as Code (IaC) modular untuk deploy cluster Kubernetes multi-cloud (AWS EKS & GCP GKE) lengkap dengan auto-scaling, ingress controller, dan cert-manager.",
      en: "Modular Infrastructure as Code (IaC) blueprint for deploying multi-cloud Kubernetes clusters with auto-scaling, ingress controllers, and SSL cert-manager."
    },
    architecture: {
      id: "Terraform HCL modules, ArgoCD GitOps sync, Helm charts, dan GitHub Actions automation.",
      en: "Terraform HCL modules, ArgoCD GitOps synchronizer, Helm charts, and GitHub Actions automation."
    },
    category: "Systems & DevOps",
    tags: ["Kubernetes", "Terraform", "AWS EKS", "ArgoCD", "Docker", "Helm", "GitHub Actions"],
    metrics: ["90% Infra Setup Time Reduction", "Multi-AZ Resilience", "Cost Optimized"],
    githubUrl: "https://github.com/rianpratama/nexusops-iac",
    demoUrl: "https://nexusops-docs.dev",
    featured: false,
    keyFeatures: {
      id: [
        "Auto-scaling worker node berbasis Kubernetes Karpenter",
        "Implementasi Zero-Trust network policy dengan Calico",
        "Automasi rotasi TLS certificates menggunakan Let's Encrypt",
        "Cost-optimization analyzer untuk mendeteksi resource idle"
      ],
      en: [
        "Auto-scaling worker nodes powered by Kubernetes Karpenter",
        "Zero-Trust network security policy with Calico",
        "Automated TLS certificate rotation via Let's Encrypt",
        "Cost-optimization analyzer identifying idle cluster resources"
      ]
    }
  },
  {
    id: "cacheforge-db",
    title: "CacheForge InMemory Store",
    tagline: {
      id: "In-memory key-value database ringan dengan protokol RESP kompatibel Redis",
      en: "Lightweight in-memory key-value store with RESP protocol compatible with Redis"
    },
    description: {
      id: "Implementasi database in-memory cepat yang mendukung struktur data string, hash, set, dan TTL expiration berbasis algoritma SkipList dan lock-free concurrency.",
      en: "Fast in-memory database implementation supporting strings, hashes, sets, and TTL expiration built with SkipList and lock-free concurrency."
    },
    architecture: {
      id: "Dibangun dengan Golang, network polling non-blocking epoll/kqueue, dan snapshot AOF persistence ke disk.",
      en: "Written in Golang with non-blocking epoll/kqueue network poller and append-only file (AOF) disk persistence."
    },
    category: "Systems & DevOps",
    tags: ["Go (Golang)", "Concurrency", "Network Programming", "Data Structures", "TCP Sockets"],
    metrics: ["85,000+ QPS", "Lock-free Read", "RESP v2 Compliant"],
    githubUrl: "https://github.com/rianpratama/cacheforge",
    demoUrl: "https://cacheforge-benchmark.dev",
    featured: false,
    keyFeatures: {
      id: [
        "Kompatibel langsung dengan client library Redis (redis-cli)",
        "Dukungan sliding TTL expiration & LRU eviction policy",
        "Snapshot background persistence (RDB-style & AOF)",
        "Zero external dependencies"
      ],
      en: [
        "Drop-in compatible with standard Redis clients (redis-cli)",
        "Sliding TTL expiration & LRU cache eviction policy",
        "Background disk persistence (RDB-style & AOF)",
        "Zero external runtime dependencies"
      ]
    }
  }
];

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Software Engineer / Tech Lead",
    company: "FinScale Payments",
    companyUrl: "https://finscale.example.com",
    period: "2023 - Sekarang (Present)",
    location: "Jakarta, Indonesia (Hybrid)",
    type: "Full-time",
    description: {
      id: "Memimpin tim rekayasa backend beranggotakan 6 engineer untuk mengelola arsitektur payment gateway dan penyelesaian rekonsiliasi transaksi lintas bank.",
      en: "Leading a backend engineering squad of 6 engineers managing high-volume payment gateway pipelines and inter-bank transaction settlement."
    },
    achievements: {
      id: [
        "Merancang ulang payment pipeline dari arsitektur monolitik ke event-driven microservices (Go + Kafka), meningkatkan throughput sebesar 320%.",
        "Memangkas latensi p99 transaksi pembayaran dari 450ms menjadi 68ms melalui caching layer Redis dan optimasi connection pooling PostgreSQL.",
        "Mengurangi cloud infrastructure spending sebesar 35% di AWS dengan migrasi ke spot instances dan kontainerisasi EKS."
      ],
      en: [
        "Re-architected payment processing from monolith to event-driven microservices (Go + Kafka), increasing system throughput by 320%.",
        "Slashed payment p99 transaction latency from 450ms to 68ms using multi-tier Redis caching and PostgreSQL connection pooling tuning.",
        "Reduced AWS cloud infrastructure spend by 35% by migrating workloads to spot instances and managed EKS clusters."
      ]
    },
    techStack: ["Go (Golang)", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "AWS", "Redis", "gRPC"]
  },
  {
    id: "exp-2",
    role: "Full-Stack Software Engineer",
    company: "CloudCore SaaS Platform",
    companyUrl: "https://cloudcore.example.com",
    period: "2021 - 2023",
    location: "Remote",
    type: "Full-time",
    description: {
      id: "Mengembangkan fitur-fitur analitik B2B, automasi webhook, dan portal dashboard interaktif yang digunakan oleh lebih dari 50.000 pengguna aktif bulanan.",
      en: "Engineered B2B analytics features, webhook automation pipelines, and interactive dashboard portals used by 50,000+ monthly active users."
    },
    achievements: {
      id: [
        "Membangun dashboard analitik real-time menggunakan React, TypeScript, dan WebSocket dengan 60fps chart rendering.",
        "Mengimplementasikan sistem OAuth2, RBAC granular, dan multi-tenant schema isolation untuk pelanggan enterprise tier.",
        "Meningkatkan test coverage frontend dan backend dari 45% menjadi 88%, mengurangi rollback deployment sebesar 80%."
      ],
      en: [
        "Engineered real-time analytics dashboard with React, TypeScript, and WebSockets delivering smooth 60fps chart rendering.",
        "Implemented robust OAuth2, granular RBAC, and multi-tenant schema isolation for enterprise tier customers.",
        "Elevated test coverage across frontend and backend from 45% to 88%, cutting production rollback incidents by 80%."
      ]
    },
    techStack: ["TypeScript", "React", "Node.js", "NestJS", "PostgreSQL", "Tailwind CSS", "Jest", "Docker"]
  },
  {
    id: "exp-3",
    role: "Backend Developer",
    company: "Nexa Digital Studio",
    companyUrl: "https://nexastudio.example.com",
    period: "2019 - 2021",
    location: "Bandung, Indonesia",
    type: "Full-time",
    description: {
      id: "Membangun RESTful API, integrasi payment gateway pihak ketiga, dan manajemen database untuk puluhan klien skala menengah hingga startup.",
      en: "Built robust RESTful APIs, third-party payment integrations, and database schemas for diverse startup and SME clients."
    },
    achievements: {
      id: [
        "Mengirimkan lebih dari 15 proyek web dan API tepat waktu dengan zero-downtime database migrations.",
        "Mengotomasi pipeline CI/CD menggunakan GitHub Actions dan Docker untuk staging dan production deployment.",
        "Mementori 4 junior developer dalam best practice Git, code review, dan penulisan unit test."
      ],
      en: [
        "Delivered over 15 client web and API projects on schedule with zero-downtime database migrations.",
        "Automated CI/CD pipelines via GitHub Actions and Docker containers for staging and production environments.",
        "Mentored 4 junior developers in Git workflows, constructive code reviews, and unit test authoring."
      ]
    },
    techStack: ["Node.js", "Express", "TypeScript", "MySQL", "MongoDB", "Redis", "Git", "Linux"]
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: { id: "Bahasa Pemrograman", en: "Programming Languages" },
    iconName: "FileCode2",
    skills: [
      { name: "TypeScript / JavaScript", level: 95, experience: "5+ tahun", highlight: "Strict typing, Async/Concurrency, Modern ESNext" },
      { name: "Go (Golang)", level: 90, experience: "4+ tahun", highlight: "Goroutines, Channels, Microservices, gRPC" },
      { name: "SQL", level: 90, experience: "5+ tahun", highlight: "Complex Queries, Indexing, Query Optimization, Locks" },
      { name: "Python", level: 82, experience: "3+ tahun", highlight: "Automation, FastApi, Data Processing, LLM Agents" },
      { name: "Rust", level: 68, experience: "1.5 tahun", highlight: "Memory Safety, CLI Tools, Systems Exploration" }
    ]
  },
  {
    title: { id: "Backend & Arsitektur Sistem", en: "Backend & Systems Architecture" },
    iconName: "Server",
    skills: [
      { name: "Microservices & Distributed Systems", level: 92, experience: "4+ tahun", highlight: "Event-driven, SAGA Pattern, Outbox Pattern" },
      { name: "RESTful & gRPC APIs", level: 95, experience: "5+ tahun", highlight: "Protocol Buffers, API Versioning, Rate Limiting" },
      { name: "Kafka & Message Queues", level: 88, experience: "3+ tahun", highlight: "Partitions, Consumer Groups, DLQ, RabbitMQ" },
      { name: "Node.js & NestJS", level: 92, experience: "5+ tahun", highlight: "Dependency Injection, Middleware, TypeORM/Prisma" },
      { name: "GraphQL", level: 80, experience: "2+ tahun", highlight: "Schema Design, Resolvers, Dataloaders" }
    ]
  },
  {
    title: { id: "Frontend & Antarmuka Web", en: "Frontend & Web UI" },
    iconName: "Layout",
    skills: [
      { name: "React 19 & Next.js", level: 94, experience: "5+ tahun", highlight: "Server Components, Custom Hooks, Performance tuning" },
      { name: "Tailwind CSS & Modern UI", level: 95, experience: "4+ tahun", highlight: "Responsive Design, Glassmorphism, Design Systems" },
      { name: "State Management", level: 90, experience: "5+ tahun", highlight: "Zustand, TanStack Query (React Query), Redux" },
      { name: "WebSockets & Realtime", level: 88, experience: "3+ tahun", highlight: "Socket.io, SSE, Reconnection Handlers, STOMP" },
      { name: "Web Performance & Core Web Vitals", level: 86, experience: "4+ tahun", highlight: "Lazy Loading, Asset Bundling, Lighthouse 95+" }
    ]
  },
  {
    title: { id: "Cloud, DevOps & Database", en: "Cloud, DevOps & Databases" },
    iconName: "Cloud",
    skills: [
      { name: "Docker & Containerization", level: 94, experience: "5+ tahun", highlight: "Multi-stage builds, Alpine optimizations, Compose" },
      { name: "Kubernetes & IaC", level: 84, experience: "3+ tahun", highlight: "EKS, Pod autoscaling, Ingress, Terraform" },
      { name: "PostgreSQL & MySQL", level: 92, experience: "5+ tahun", highlight: "Partitioning, Replication, Tuning EXPLAIN ANALYZE" },
      { name: "Redis Caching & Streams", level: 92, experience: "4+ tahun", highlight: "Distributed Locking, Pub/Sub, Cluster Mode" },
      { name: "CI/CD & Observability", level: 90, experience: "4+ tahun", highlight: "GitHub Actions, Prometheus, Grafana, OpenTelemetry" }
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2024",
    credentialId: "AWS-SAA-839210",
    credentialUrl: "https://aws.amazon.com/verification"
  },
  {
    id: "cert-2",
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    issueDate: "2023",
    credentialId: "CKA-402918",
    credentialUrl: "https://www.cncf.io/certification/cka/"
  },
  {
    id: "cert-3",
    title: "Meta Certified Front-End Developer Professional",
    issuer: "Meta (Coursera)",
    issueDate: "2022",
    credentialId: "META-FED-9912",
    credentialUrl: "https://coursera.org"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Hendra Wijaya",
    role: "VP of Engineering",
    company: "FinScale Payments",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    content: {
      id: "Rian adalah software engineer teladan. Kemampuannya mengubah requirement bisnis yang rumit menjadi arsitektur microservices yang bersih dan teruji sungguh mengesankan. Kinerjanya selalu melebihi ekspektasi.",
      en: "Rian is an exemplary software engineer. His ability to distill complex financial requirements into clean, resilient microservice architectures is exceptional. Always delivers well above expectations."
    }
  },
  {
    id: "test-2",
    name: "Sarah Jenkins",
    role: "Lead Product Architect",
    company: "CloudCore Global",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    content: {
      id: "Kolaborasi bersama Rian selalu menyenangkan. Dia tidak hanya memikirkan kode backend yang cepat, tapi juga sangat peduli dengan UX frontend dan kemudahan pemeliharaan kode oleh anggota tim lainnya.",
      en: "Working alongside Rian is a privilege. He cares deeply not only about backend performance, but also about delightful frontend UX and ergonomic code maintainability for the entire engineering squad."
    }
  }
];
