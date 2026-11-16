# 🚀 Modern Software Engineer Portfolio

Website portofolio interaktif dan modern yang dirancang khusus untuk **Software Engineer**, **Backend / Full-Stack Developer**, dan **Cloud Architect**. Dibangun dengan **React 19**, **TypeScript**, **Tailwind CSS v4**, dan **Vite** untuk performa kilat, modularitas tinggi, dan desain profesional standar industri.

---

## ✨ Fitur Utama

- 🎨 **Developer Aesthetic & Dark Mode First**: Tampilan modern dengan perpaduan warna dark slate/zinc, efek glowing grid/mesh, dan transisi halus.
- ⚡ **Headline Rotator & Typewriter**: Menampilkan spesialisasi teknis dinamis (Full-Stack Engineer, Distributed Systems, Golang & TypeScript, Cloud/DevOps).
- 💻 **Interactive CLI Terminal**: Terminal simulator langsung di website dengan perintah interaktif (`help`, `about`, `skills`, `projects`, `exp`, `cat resume.txt`, `sudo hire`, `clear`) dan tombol chip sekali klik untuk mobile.
- 🛠️ **Engineering Mindset & Live Code Preview**: Cuplikan kode interaktif (`engineer.go` & `engineer.ts`) dengan syntax formatting dan 4 pilar filosofi rekayasa perangkat lunak.
- 🎯 **Filterable Tech Stack Matrix**: Pencarian dan filter instan untuk keahlian teknis (Bahasa Pemrograman, Backend & Arsitektur, Frontend & UI, Cloud, DevOps & Database) dengan progress bar dan highlight teknis.
- 📦 **Arsitektur Proyek Skala Produksi**: Kartu proyek lengkap dengan metrik performa (mis. 120k RPS, sub-5ms P99 latency), arsitektur microservices, dan modal deep-dive rincian teknis.
- 📈 **Career Timeline & Quantifiable Impact**: Riwayat karier terstruktur dengan metrik pencapaian (mis. memangkas latensi 85%, efisiensi cloud spend 35%).
- 📜 **Sertifikasi Resmi & Testimoni**: Menampilkan sertifikasi cloud (AWS, CKA Kubernetes) dan rekomendasi rekan kerja.
- 🌐 **Bilingual (Indonesian & English Toggle)**: Beralih bahasa dalam 1 klik tanpa reload halaman.
- 📬 **Formulir Kontak & 1-Click Copy**: Formulir pesan langsung, validasi otomatis, notifikasi toast, serta tombol salin email sekali klik.

---

## 📁 Struktur Proyek

```text
portofolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.tsx           # Filosofi kode & editor snippet
│   │   ├── Certifications.tsx  # Sertifikasi & rekomendasi
│   │   ├── Contact.tsx         # Formulir kontak & info sosial
│   │   ├── Experience.tsx      # Timeline riwayat karier
│   │   ├── Footer.tsx          # Footer dengan jam WIB real-time
│   │   ├── Hero.tsx            # Hero section & typewriter headline
│   │   ├── Icons.tsx           # Komponen SVG brand icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx          # Navigasi sticky blur & kontrol bahasa
│   │   ├── ProjectModal.tsx    # Modal deep-dive arsitektur proyek
│   │   ├── Projects.tsx        # Filter & galeri proyek
│   │   ├── Skills.tsx          # Matriks skill & filter pencarian
│   │   ├── Terminal.tsx        # Emulator terminal developer interaktif
│   │   └── Toast.tsx           # Feedback notifikasi interaktif
│   ├── data/
│   │   └── portfolioData.ts    # ⭐ Pusat data portofolio (cukup edit file ini!)
│   ├── types/
│   │   └── index.ts            # Type definitions TypeScript
│   ├── App.tsx                 # Root layout & state
│   ├── index.css               # Styling Tailwind CSS v4 & custom scrollbar
│   └── main.tsx                # Entry point React
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Cara Menjalankan Proyek

### 1. Jalankan Development Server
Server development saat ini sudah berjalan, atau dapat dijalankan kapan saja dengan:
```bash
npm run dev
```
Buka browser di: **`http://localhost:5173/`**

### 2. Build untuk Produksi
```bash
npm run build
```
Hasil build yang optimal dan ter-minifikasi akan berada di folder `dist/`.

### 3. Preview Hasil Build
```bash
npm run preview
```

---

## ✏️ Cara Mengubah Data Portofolio

Semua informasi (nama, bio, foto, proyek, pengalaman kerja, keahlian, dan tautan sosial) terpusat rapi di satu file:

👉 **`src/data/portfolioData.ts`**

Anda cukup mengedit file tersebut untuk mengubah:
- `personalData`: Nama, status ketersediaan kerja, email, tautan GitHub/LinkedIn, filosofi kerja.
- `projectsData`: Daftar proyek, tag teknologi, tautan demo/repo, dan metrik performa.
- `experiencesData`: Riwayat perusahaan, jabatan, periode, dan pencapaian terukur.
- `skillCategoriesData`: Daftar skill, tingkat penguasaan (%), dan highlight keahlian.
- `certificationsData`: Sertifikasi resmi dan nomor lisensi.
- `testimonialsData`: Ulasan atau rekomendasi dari rekan kerja / tech lead.

---

## 🚀 Panduan Deployment

### Deploy ke Vercel
1. Push repository ke GitHub.
2. Buka [vercel.com](https://vercel.com/) dan import repository Anda.
3. Framework Preset akan otomatis terdeteksi sebagai **Vite**.
4. Klik **Deploy**!

### Deploy ke Netlify
1. Hubungkan repository GitHub ke [netlify.com](https://netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
