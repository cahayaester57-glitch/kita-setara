# Kita Setara
Website edukasi multi-page tentang hak dan kewajiban warga negara dalam lingkungan pekerjaan.

## Menjalankan secara lokal
1. Install Node.js 20 atau lebih baru.
2. Jalankan `npm install`.
3. Jalankan `npm run dev`.
4. Buka `http://localhost:3000`.

## Deploy ke Vercel
Unggah folder proyek ini ke repository GitHub, lalu impor repository melalui Vercel. Framework akan terdeteksi sebagai Next.js. Build command: `npm run build`.

## Routes
- `/` Beranda
- `/edukasi` Edukasi & database hukum
- `/studi-kasus` Isu & studi kasus
- `/solusi` Solusi & tanggung jawab
- `/panduan-melapor` Panduan melapor
- `/games` Pilihan story games
- `/games/alya` Behind the Opportunity
- `/games/daniel` The Unpaid Promise
- `/tentang` Tentang kami

Progres checklist dan permainan disimpan di localStorage setelah komponen dimuat di browser. Initial render tidak membaca browser storage, untuk menghindari hydration mismatch.
