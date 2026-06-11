# Plan Pengembangan Arsitektur: Pesona Baubau Digital Hub

## 1. Pendahuluan
Dokumen ini merupakan perencanaan arsitektur sistem untuk proyek **Pesona Baubau Digital Hub**, yang dirancang berdasarkan analisis kebutuhan Dinas Pariwisata Kota Baubau. Sistem ini bertujuan untuk mengintegrasikan informasi pariwisata, manajemen UMKM/Ekraf, serta menyediakan dashboard analitik yang komprehensif bagi pemerintah daerah.

## 2. Arsitektur Sistem Utama
Sistem akan dibagi menjadi 3 repository utama untuk frontend dan 1 API Gateway untuk backend, memastikan modularitas, keamanan, dan skalabilitas.

### A. Portal Publik (PWA)
- **Nama Repository**: `pesona-baubau-web`
- **Target Pengguna**: Wisatawan domestik & mancanegara
- **Bentuk**: Progressive Web App (PWA), mobile-first, dapat diinstal ke smartphone.
- **Fitur Utama**:
  - Katalog Destinasi (Virtual Tour 360°, Audio Guide QR Code).
  - Peta Interaktif & GIS (Rute, titik Wi-Fi gratis).
  - Kalender Event & Budaya (Sync ke Google/Apple Calendar).
  - Marketplace UMKM/Ekraf (Katalog tenun, kuliner, suvenir, direct-to-WA).
  - Trip Planner Wizard & Status Kepadatan Destinasi (Real-time).

### B. Dashboard Admin Dinas
- **Nama Repository**: `pesona-baubau-admin`
- **Target Pengguna**: Staf Dinas Pariwisata Baubau
- **Bentuk**: Web Based (desktop-first, responsive)
- **Fitur Utama**:
  - CMS Manajemen Konten (destinasi, event, berita).
  - Dashboard Analitik (statistik kunjungan, profiling, demografi).
  - Sentimen Analisis Ulasan.
  - Log Aktivitas Admin (Audit Trail) & Enkripsi Dokumen Digital.
  - Export Data terstandarisasi (.json/.csv).

### C. Portal Mitra (UMKM, Hotel, Pokdarwis)
- **Nama Repository**: `pesona-baubau-mitra`
- **Target Pengguna**: Pelaku UMKM, pengelola hotel/homestay, Pokdarwis
- **Bentuk**: Web Based (mobile-friendly)
- **Fitur Utama**:
  - Dashboard Mitra (statistik produk/kunjungan spesifik mitra).
  - Kelola Katalog Produk & Manajemen Akomodasi.

### D. API Gateway & Integrasi
- **Nama Repository**: `pesona-baubau-api`
- **Target**: Internal system & "Satu Data Baubau"
- **Fungsi**: 
  - Service Layer terpusat (RESTful API / GraphQL).
  - Sinkronisasi SPBE dengan ekosistem "Satu Data Baubau".
  - Manajemen API Key, JWT Authentication & Role-Based Access Control (RBAC).

---

## 3. Rekomendasi Tech Stack
Pemilihan teknologi didasarkan pada kebutuhan performa, keamanan, dan dukungan fungsionalitas spesifik seperti GIS (Geographic Information System).

| Layer | Teknologi | Alasan |
|-------|-----------|--------|
| **Frontend Publik (PWA)** | Next.js / Nuxt.js + Tailwind CSS | SEO optimal, performa tinggi, mobile-first design. |
| **Frontend Admin / Mitra** | React / Vue.js + Ant Design | Menyediakan library komponen UI lengkap untuk dashboard yang kompleks. |
| **Backend API** | Node.js (Express/NestJS) atau Laravel | Cepat, kaya akan ekosistem library, pengembangan efisien. |
| **Database Utama** | PostgreSQL + PostGIS | Handal untuk data relasional dan sangat mendukung kueri GIS/Geospatial. |
| **Maps & GIS** | Leaflet.js + OpenStreetMap | Open source, gratis, fleksibel untuk peta titik wisata. |
| **Storage / Media** | Google Drive API / Cloud CDN | Efisiensi biaya penyimpanan untuk gambar, audio guide, dan dokumen. |
| **Autentikasi & Keamanan** | JWT + Role-Based Access Control | Standar industri untuk keamanan API dan sesi pengguna. |
| **Deployment & Infrastruktur**| VPS Linux + Docker | Kontrol penuh, isolasi environment, skalabilitas yang baik. |

---

## 4. Keamanan & SPBE Governance (Sistem Pemerintahan Berbasis Elektronik)
Mengingat platform ini adalah aset pemerintah, standar keamanan berikut wajib diimplementasikan:
- **Cybersecurity Ready**: Penggunaan SSL/HTTPS dan Enkripsi Dokumen Digital (AES-256).
- **Audit Trail**: Perekaman aktivitas secara mendetail di log sistem admin.
- **Standarisasi Ekspor Data**: Memudahkan interoperabilitas data antar institusi pemerintah.

---

## 5. Roadmap Implementasi Pengembangan
Pengembangan dibagi menjadi 3 tahapan (Milestone) strategis:

1. **Tahap 1: Fondasi & Informasi**
   - *Fokus*: Pengumpulan data, desain UI/UX, peluncuran PWA Portal Publik.
   - *Output*: Web profil destinasi & Peta Wisata Interaktif siap diakses wisatawan.
2. **Tahap 2: Interaksi & Ekraf**
   - *Fokus*: Integrasi Marketplace UMKM, Kalender Event, Audio Guide.
   - *Output*: Ekosistem ekonomi kreatif mulai berputar secara digital.
3. **Tahap 3: Integrasi & Analitik**
   - *Fokus*: Peluncuran Dashboard Admin, Portal Mitra, dan sinkronisasi "Satu Data Kota Baubau".
   - *Output*: Platform beroperasi penuh sebagai pusat data pengambilan keputusan pariwisata.
