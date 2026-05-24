# 🎯 Visi & Arah Pengembangan — Portal Publik (PWA)

## Tujuan
Portal publik interaktif untuk mempromosikan pariwisata Baubau. Aplikasi ini merupakan bagian dari **Pesona Baubau Digital Hub** — ekosistem pariwisata digital untuk Kota Baubau yang terdiri dari 3 repositori + 1 API Gateway:

| Repo | Nama | Target | Bentuk |
|------|------|--------|--------|
| 1 | **pesona-baubau-web** (ini) | Wisatawan domestik & mancanegara | PWA (mobile-first, installable) |
| 2 | pesona-baubau-admin | Staf Dinas Pariwisata | Web (desktop-first, responsive) |
| 3 | pesona-baubau-mitra | UMKM, Hotel, Pokdarwis | Web (mobile-friendly) |
| API | pesona-baubau-api | Internal + Satu Data Baubau | REST/GraphQL |

## Acuan Desain
**WAJIB** mengacu pada desain di `public/acuan-desain/`. Setiap folder berisi:
- `screen.png` — visual screenshot dari desain
- `code.html` — struktur komponen HTML

### Daftar Halaman yang Ada Acuannya

#### Portal Publik (PWA) — Halaman yang Relevan:
1. **homepage_pesona_baubau** — Halaman beranda utama
2. **katalog_destinasi_pesona_baubau** — Katalog daftar destinasi wisata
3. **detail_destinasi_pesona_baubau** — Detail destinasi wisata
4. **detail_produk_pesona_baubau** — Detail produk UMKM
5. **marketplace_umkm_pesona_baubau** — Marketplace UMKM
6. **peta_interaktif_pesona_baubau** — Peta interaktif GIS
7. **virtual_tour_pesona_baubau** — Virtual tour 360°
8. **kalender_event_pesona_baubau** — Kalender event & budaya
9. **trip_planner_pesona_baubau** — Perencana perjalanan
10. **maritime_heritage** — Warisan maritim
11. **daftar_pesanan_pesona_baubau** — Daftar pesanan

#### Dashboard Admin — Referensi (untuk API/backend):
12. **dashboard_admin_pesona_baubau** — Dashboard admin
13. **kelola_destinasi_admin_dinas** — Kelola destinasi
14. **laporan_analitik_admin_dinas** — Laporan & analitik
15. **manajemen_mitra_admin_dinas** — Manajemen mitra

#### Portal Mitra — Referensi (untuk API/backend):
16. **dashboard_mitra_pesona_baubau** — Dashboard mitra
17. **kelola_produk_pesona_baubau** — Kelola produk mitra
18. **profil_analitik_mitra_pesona_baubau** — Profil & analitik mitra

## Design System

### Warna
| Peran | Warna | Hex | Penggunaan |
|-------|-------|-----|------------|
| Primary | Biru Laut | #1A5276 | Navbar, tombol utama, heading |
| Secondary | Emas Tenun | #C9A96E | Aksen, highlight, badge, hover |
| Background | Putih | #FFFFFF | Latar belakang utama |
| Surface | Abu-abu Muda | #F8F9FA | Card, section background |
| Text Primary | Hitam Pekat | #2C3E50 | Body text, judul |
| Text Secondary | Abu-abu | #7F8C8D | Subtitle, caption |
| Success | Hijau | #27AE60 | Status aktif, verified |
| Warning | Oranye | #F39C12 | Peringatan, menunggu |
| Error | Merah | #E74C3C | Error, hapus |

### Tipografi
| Level | Font | Size | Weight |
|-------|------|------|--------|
| Display | Inter / Poppins | 36px | Bold (700) |
| H1 | Inter / Poppins | 28px | Bold (700) |
| H2 | Inter / Poppins | 22px | Semi Bold (600) |
| H3 | Inter / Poppins | 18px | Semi Bold (600) |
| Body | Inter / Poppins | 14px | Regular (400) |
| Small | Inter / Poppins | 12px | Regular (400) |
| Button | Inter / Poppins | 14px | Medium (500) |

### Radius & Shadow
| Elemen | Border Radius | Shadow |
|--------|--------------|--------|
| Card | 12px | 0 2px 8px rgba(0,0,0,0.08) |
| Button | 8px | none (flat design) |
| Input | 8px | 0 1px 3px rgba(0,0,0,0.1) |
| Modal | 16px | 0 8px 32px rgba(0,0,0,0.12) |

### User Flow — Portal Publik (Wisatawan)
```
Beranda → [Cari Destinasi] → Detail Destinasi
   ├── → Marketplace → Filter Produk → Lihat Detail → Chat WA
   ├── → Kalender Event → Detail Event → Tambah ke Calendar
   └── → Trip Planner → Pilih Minat & Budget → Dapat Itinerary
```

## Tech Stack
- React + Vite + TypeScript
- Tailwind CSS untuk styling
- Leaflet.js untuk peta
- PWA (vite-plugin-pwa)
- Lucide React untuk icons
- Pannellum untuk virtual tour 360°

## Aturan Kode
- **Mobile-first**, lalu desktop
- Warna: biru laut #1A5276, emas tenun #C9A96E, latar #F5F3F0
- Font: Inter
- Semua komponen baru harus mengacu screen.png dari stitch
- Bottom navigation (mobile), Top navigation (desktop)
- Card styling: bg white, border-radius 12px, shadow subtle
