/* Semua data produk dan harga ada di sini. Ubah file ini saja, tanpa menyentuh desain. */
window.PRODUCT = {
  name: "AFC Life Science",
  reseller: "Lia AFC",
  whatsapp: "6281234567890",   // format 628..., tanpa +
  pixelId: "",                 // kosong = Meta Pixel tidak dimuat
  priceNote: "Harga per box, berdasarkan poster 3 September 2026. Harga dan stok terbaru dikonfirmasi lewat WhatsApp.",
  products: [
    { id: "sop", photo: "assets/images/lifestyle/sop-subarashi.webp", name: "SOP Subarashi", tag: "Produk unggulan", price: 2000000, image: "assets/images/product/sop-subarashi.webp",
      category: "Minuman serbuk",
      desc: "Minuman serbuk dengan sejumlah bahan nutrisi pilihan.",
      ingredients: ["Salmon Ovary Peptide / Salmon Egg Extract", "Anserine", "Sardine Extract", "Tuna Heart Extract", "Fruitflow", "L-Glutathione", "Vitamin C"],
      pack: "[isi sesuai label: jumlah sachet dan berat bersih]", usage: "Ikuti petunjuk konsumsi pada kemasan.",
      nie: "[isi nomor NIE dari kemasan]", halal: "[isi sesuai sertifikat produk]" },
    { id: "utsu", photo: "assets/images/lifestyle/utsukushhii.webp", name: "Utsukushhii", price: 1850000, image: "assets/images/product/utsukushhii.webp",
      category: "Minuman serbuk rasa anggur",
      desc: "Minuman serbuk dengan bahan yang tercantum pada materi produk.",
      ingredients: ["Fish Collagen", "Salmon Powder", "L-Glutathione", "Resveratrol", "Black Garlic Extract", "Vitamin D3", "Kultur bakteri baik"],
      pack: "[isi sesuai label: jumlah sachet dan berat bersih]", usage: "Ikuti petunjuk konsumsi pada kemasan.",
      nie: "[isi nomor NIE dari kemasan]", halal: "[isi sesuai sertifikat produk]" },
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
