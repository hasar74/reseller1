# Landing Page Reseller AFC Life Science

Website statis (HTML, CSS, JavaScript) untuk Cloudflare Pages. Tanpa database dan backend.

## Yang wajib diganti sebelum iklan jalan
1. `assets/js/product.js`: nama toko, nomor WhatsApp, Pixel ID, produk, harga, NIE, halal.
2. `index.html`: domain pada `canonical`/`og:image`, dan nama toko (otomatis dari `product.js`).
3. `robots.txt` dan `sitemap.xml`: ganti `www.domainanda.com` dengan domain Anda.
4. `assets/images/`: product, awards, certification. Tambahkan galeri sertifikat/piagam asli bila ada.

## Struktur
- `assets/css/style.css`: desain dan responsive layout
- `assets/js/product.js`: data produk dan harga
- `assets/js/tracking.js`: Meta Pixel dan event
- `assets/js/main.js`: navigasi, animasi, FAQ, tombol WhatsApp
- `_headers`: keamanan dan cache. `_redirects`: pengalihan URL

## Deploy
1. Buat proyek di Cloudflare Pages (Workers & Pages), unggah folder ini atau hubungkan repo GitHub.
   Framework: None. Build command: kosong. Output directory: `/`.
2. Custom domains, lalu Set up a domain. Arahkan nameserver ke Cloudflare.
3. Periksa HTTPS untuk domain utama dan www.
4. Uji di HP: tombol WhatsApp, Pixel (Meta Pixel Helper), kecepatan, tautan.

## Catatan
- Jika menambah layanan analitik lain, tambahkan domainnya ke `Content-Security-Policy` di `_headers`.
- Klik WhatsApp bukan transaksi. Jangan kirim data kesehatan pribadi ke platform iklan.
- Pastikan klaim produk, komposisi, dan izin edar sesuai ketentuan dan kebijakan iklan Meta.
