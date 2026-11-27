/* Semua data produk dan harga ada di sini. Ubah file ini saja, tanpa menyentuh desain. */
window.PRODUCT = {
  name: "AFC Life Science",
  reseller: "Lia Distributor Resmi AFC",
  whatsapp: "6281234567890",   // format 628..., tanpa +
  pixelId: "",                 // kosong = Meta Pixel tidak dimuat
  priceNote: "Harga per box, berdasarkan poster 3 September 2026. Harga dan stok terbaru dikonfirmasi lewat WhatsApp.",
  products: [
    { id: "sop", photo: "assets/images/lifestyle/sop-subarashi.webp", name: "SOP Subarashi", tag: "Produk unggulan", price: 2000000, image: "assets/images/product/sop-subarashi.webp",
      category: "Minuman serbuk",
      desc: "Minuman serbuk dengan sejumlah bahan nutrisi pilihan.",
      ingredients: ["Salmon Ovary Peptide / Salmon Egg Extract", "Anserine", "Sardine Extract", "Tuna Heart Extract", "Fruitflow", "L-Glutathione", "Vitamin C"],
      pack: "[isi sesuai label: jumlah sachet dan berat bersih]", usage: "Ikuti petunjuk konsumsi pada kemasan.",
      nie: "ML 243135000300302", halal: "ID11110081017390926" },
    { id: "utsu", photo: "assets/images/lifestyle/utsukushhii.webp", name: "Utsukushhii", price: 1850000, image: "assets/images/product/utsukushhii.webp",
      category: "Minuman serbuk rasa anggur",
      desc: "Minuman serbuk dengan bahan yang tercantum pada materi produk.",
      ingredients: ["Fish Collagen", "Salmon Powder", "L-Glutathione", "Resveratrol", "Black Garlic Extract", "Vitamin D3", "Kultur bakteri baik"],
      pack: "[isi sesuai label: jumlah sachet dan berat bersih]", usage: "Ikuti petunjuk konsumsi pada kemasan.",
      nie: "ML 273182000100302", halal: "ID00410020764430724" },
    { id: "hikari", photo: "assets/images/lifestyle/hikari.webp", name: "Hikari", price: 1800000, image: "assets/images/product/hikari.webp",
      category: "Suplemen makanan",
      desc: "Produk dengan kandungan yang tercantum pada materi produk.",
      ingredients: ["Lutein dari Marigold", "Blueberry", "Acerola", "Inulin", "L-Cysteine", "L-Carnitine", "Vitamin B6"],
      pack: "[isi sesuai label]", usage: "Ikuti petunjuk konsumsi pada kemasan.",
      nie: "[isi nomor NIE dari kemasan]", halal: "[isi sesuai sertifikat produk]" }
  ]
};

/* Referensi paten dari materi produk. show:false menyembunyikan satu nomor dari website.
   note = keterangan tambahan yang tampil saat kartu diklik. */
window.PATENTS = [
  { name: "SOP Subarashi", img: "assets/images/patents/sop-subarashi.webp", items: [
    { no: "JP3946238", topic: "Regenerasi sel", show: true },
    { no: "JP3946239", topic: "Sirkulasi darah perifer", show: true },
    { no: "WO2003055901A1", topic: "Peptida dengan aktivitas antihipertensi", show: true },
    { no: "JP2009538895A", topic: "Ekstrak tomat terkait pembentukan bekuan darah", show: true },
    { no: "JP5641734B2", topic: "Peremajaan sel dan ekstrak sel", show: true },
    { no: "JP3899116", topic: "Perbaikan kulit / anti-aging", show: true },
    { no: "JP4247444B2", topic: "Komposisi penghambat penurunan fungsi hati", show: true },
    { no: "CN108559764B", topic: "Oligopeptida ikan laut terkait penurunan asam urat", show: true } ] },
  { name: "Utsukushhii", img: "assets/images/patents/utsukushhii.webp", items: [
    { no: "JP3040711B2", topic: "Agen antitumor dan metode pembuatannya", show: true },
    { no: "JP3272023B2", topic: "Agen untuk leukopenia (penurunan jumlah sel darah putih)", show: true },
    { no: "JP2712000B2", topic: "Agen terapi hepatitis C", show: true },
    { no: "JP2969017B2", topic: "Agen perlindungan terhadap infeksi", show: true },
    { no: "JP5635690B2", topic: "Mikrovesikel bakteri untuk metode terapi dan diagnosis kanker", show: true },
    { no: "US7048953B2", topic: "Metode dan alat inhalasi terkait SARS", show: true,
      note: "Dokumen ini membahas inhalasi, sehingga tidak dapat langsung dijadikan bukti manfaat suplemen oral untuk SARS." },
    { no: "JP5697788B1", topic: "Strain bakteri asam laktat", show: true,
      note: "Dokumen ini membahas strain bakteri. Jangan langsung disamakan dengan klaim perlindungan terhadap toksisitas oksigen." },
    { no: "JP3040699B2", topic: "Agen pengurang toksisitas terkait obat antikanker", show: true } ] },
  { name: "Hikari", img: "assets/images/patents/hikari.webp", items: [
    { no: "US20130231297A1", topic: "Komposisi suplemen terkait performa visual", show: true },
    { no: "US9226940B2", topic: "Metode penanganan gangguan mata", show: true,
      note: "Dirujuk dalam materi Hikari terkait perlindungan cahaya biru." },
    { no: "EP2498765A1", topic: "Komposisi mengandung lutein untuk aspek tertentu dari memori", show: true },
    { no: "US10537604B2", topic: "Komposisi terkait aktivitas otak", show: true },
    { no: "EP3538085B1", topic: "Penggunaan ekstrak spearmint terkait pembentukan neuron baru (neurogenesis)", show: true,
      note: "Ekstrak spearmint tidak tercantum pada daftar komposisi Hikari di website ini. Cocokkan dengan label kemasan." } ] }
];

/* Info penyesuaian harga. Tidak mengubah harga di katalog (price pada products).
   Ubah angka, tanggal, dan teks di sini kapan pun harga berubah. */
window.PRODUCT.priceInfo = {
  eyebrow: "Pembaruan Harga",
  title: "Info Penyesuaian Harga",
  updated: "27 November 2026",
  until: "2026-12-13",            // format TAHUN-BULAN-TANGGAL, batas akhir harga subsidi
  untilLabel: "13 Desember 2026",
  image: "assets/images/banners/penyesuaian-harga.webp",
  note: "Harga dapat berubah sewaktu-waktu. Konfirmasi harga yang berlaku lewat WhatsApp sebelum memesan.",
  rows: [
    { name: "SOP Subarashi", sub: 2000000, fin: 2050000 },
    { name: "Utsukushhii", sub: 1850000, fin: 1900000 },
    { name: "Hikari", sub: 1800000, fin: 1800000, tetap: true }
  ]
};

/* Galeri dokumentasi. show:false menyembunyikan foto. cap = teks kecil di atas foto. */
window.GALLERY = [
  { src: "assets/images/gallery/foto-1.webp", w: 1441, h: 1920, alt: "Stok SOP Subarashi dan Utsukushhii versi 2.0 bersama kami", cap: "Stok SOP Subarashi dan Utsukushhii 2.0", show: true },
  { src: "assets/images/gallery/foto-2.webp", w: 864, h: 1920, alt: "Tumpukan stok SOP Subarashi dan Utsukushhii", cap: "Stok produk kami", show: true },
  { src: "assets/images/gallery/foto-3.webp", w: 1920, h: 864, alt: "Deretan kemasan SOP Subarashi dan Utsukushhii dengan segel plastik", cap: "Kemasan tersegel plastik", show: true },
  { src: "assets/images/gallery/foto-4.webp", w: 864, h: 1920, alt: "Foto bersama pelanggan dengan produk SOP Subarashi dan Utsukushhii", cap: "Bersama pelanggan kami", show: true },
  { src: "assets/images/gallery/foto-5.webp", w: 1920, h: 864, alt: "Foto bersama pelanggan dengan produk SOP Subarashi", cap: "Bersama pelanggan kami", show: true },
  { src: "assets/images/gallery/foto-6.webp", w: 864, h: 1920, alt: "Dokumentasi bersama produk SOP Subarashi dan Utsukushhii", cap: "", show: true },
  { src: "assets/images/gallery/foto-7.webp", w: 1448, h: 1920, alt: "Foto bersama pelanggan dengan produk Utsukushhii dan SOP Subarashi", cap: "Bersama pelanggan kami", show: true }
];
