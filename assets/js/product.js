/* Semua data produk dan harga ada di sini. Ubah file ini saja, tanpa menyentuh desain. */
window.PRODUCT = {
  name: "AFC Life Science",
  reseller: "[Nama Toko Anda]",
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
