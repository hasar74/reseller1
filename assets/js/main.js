/* Katalog, detail produk, WhatsApp, navbar, animasi scroll. */
(function () {
  var P = window.PRODUCT, $ = function (s) { return document.querySelector(s); };
  var rp = function (n) { return "Rp" + n.toLocaleString("id-ID"); };
  var reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  var wa = function (text) { return "https://wa.me/" + P.whatsapp + "?text=" + encodeURIComponent(text); };
  var orderMsg = function (p) {
    return "Halo, saya tertarik membeli produk AFC Life Science.\n\nNama produk: " + p.name + "\nHarga pada website: " + rp(p.price) + "/box\nJumlah: 1 box\n\nMohon informasi ketersediaan produk, harga terbaru, dan cara pemesanannya.\n\nTerima kasih.";
  };

  // Katalog
  $("#cards").innerHTML = P.products.map(function (p) {
    return '<article class="card rv"><div class="ph"><img class="cover" src="' + p.photo + '" alt="Ilustrasi ' + p.name + '" loading="lazy"><img class="inset" src="' + p.image + '" alt="Kemasan ' + p.name + '" loading="lazy"></div><div class="cb">' +
      (p.tag ? '<span class="tag">' + p.tag + '</span>' : '') + '<h3>' + p.name + '</h3><p class="cat">' + p.category + '</p>' +
      '<div class="pr">' + rp(p.price) + '<small> / box</small></div><div class="row">' +
      '<button class="btn ghost" data-detail="' + p.id + '">Lihat Detail</button>' +
      '<a class="btn gold" data-wa="Katalog: ' + p.name + '" data-msg="' + p.id + '" href="#">Pesan</a></div></div></article>';
  }).join("");
  $("#pnote").textContent = P.priceNote;
  $("#total").textContent = rp(P.products.reduce(function (s, p) { return s + p.price; }, 0));
  document.querySelectorAll(".reseller").forEach(function (e) { e.textContent = P.reseller; });

  // Link WhatsApp
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    var p = P.products.filter(function (x) { return x.id === a.dataset.msg; })[0];
    a.href = wa(p ? orderMsg(p) : "Halo, saya tertarik dengan produk AFC Life Science. Mohon informasi produk, harga terbaru, dan cara pemesanannya. Terima kasih.");
    a.target = "_blank"; a.rel = "noopener";
  });

  // Detail produk (dialog)
  var dlg = $("#dlg");
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-detail]");
    if (b) {
      var p = P.products.filter(function (x) { return x.id === b.dataset.detail; })[0];
      $("#dbody").innerHTML = '<div class="dimg"><img src="' + p.photo + '" alt="Ilustrasi ' + p.name + '"><img class="pk" src="' + p.image + '" alt="Kemasan ' + p.name + '"></div><div class="dtx"><h3>' + p.name + '</h3><p class="cat">' + p.category + '</p>' +
        '<p>' + p.desc + '</p><h4>Komposisi</h4><ul class="ing">' + p.ingredients.map(function (i) { return "<li>" + i + "</li>"; }).join("") + '</ul>' +
        '<p class="small">Komposisi akhir wajib dicocokkan dengan label kemasan terbaru.</p>' +
        '<dl><dt>Kemasan</dt><dd>' + p.pack + '</dd><dt>Aturan konsumsi</dt><dd>' + p.usage + '</dd><dt>Nomor izin edar BPOM</dt><dd>' + p.nie + '</dd><dt>Halal</dt><dd>' + p.halal + '</dd></dl>' +
        '<div class="pr">' + rp(p.price) + '<small> / box</small></div><a class="btn gold" data-wa="Detail: ' + p.name + '" target="_blank" rel="noopener" href="' + wa(orderMsg(p)) + '">Pesan via WhatsApp</a>' +
        '<p class="small">Suplemen bukan obat dan tidak menggantikan pengobatan atau konsultasi medis.</p></div>';
      dlg.showModal();
    }
    if (e.target === dlg || e.target.closest("[data-close]")) dlg.close();
  });

  // Referensi paten
  var pt = $("#ptabs"), pl = $("#plist"), pim = $("#pimg"), pdlg = $("#pdlg"), pbody = $("#pbody"), PT = window.PATENTS || [], cur = 0;
  var two = function (n) { return (n < 10 ? "0" : "") + n; };
  var pstat = function (no) {
    var m = no.match(/([AB])\d?$/);
    return !m ? "Dokumen paten" : m[1] === "A" ? "Publikasi permohonan" : "Paten diberikan";
  };
  var pdesc = function (no) {
    var s = pstat(no);
    return s === "Paten diberikan" ? "Dokumen ini adalah publikasi paten yang telah diberikan oleh kantor paten terkait."
      : s === "Publikasi permohonan" ? "Dokumen ini adalah publikasi permohonan paten. Belum tentu sudah diberikan, jadi cek statusnya di Google Patents."
      : "Status dokumen perlu dicek langsung di Google Patents.";
  };
  var gp = function (no) { return "https://patents.google.com/patent/" + no + "/en"; };
  var drawP = function (i) {
    cur = i;
    var p = PT[i];
    [].slice.call(pt.children).forEach(function (b, k) { b.setAttribute("aria-selected", k === i); b.classList.toggle("on", k === i); });
    pim.innerHTML = '<button class="pimg" data-zoom="1" aria-label="Perbesar infografis ' + p.name + '"><img src="' + p.img + '" alt="Infografis referensi paten ' + p.name + '" loading="lazy"><span>Klik untuk memperbesar</span></button>';
    pl.innerHTML = p.items.map(function (x, k) {
      return x.show ? '<button class="pc" data-k="' + k + '"><span class="no">' + two(k + 1) + '</span><b>' + x.no + '</b><span class="st">' + pstat(x.no) + '</span><p>' + x.topic + '</p></button>' : "";
    }).join("");
  };
  if (pt && PT.length) {
    pt.innerHTML = PT.map(function (p, i) { return '<button role="tab" data-p="' + i + '">' + p.name + '</button>'; }).join("");
    pt.onclick = function (e) { var b = e.target.closest("[data-p]"); if (b) drawP(+b.dataset.p); };
    drawP(0);
    document.addEventListener("click", function (e) {
      var c = e.target.closest("[data-k]"), z = e.target.closest("[data-zoom]");
      if (c) {
        var k = +c.dataset.k, x = PT[cur].items[k];
        pbody.innerHTML = '<div class="pd"><span class="eyebrow">' + PT[cur].name + ' · Paten ' + two(k + 1) + '</span><h3>' + x.no + '</h3><span class="st">' + pstat(x.no) + '</span>' +
          '<h4>Topik dokumen</h4><p>' + x.topic + '</p><p>' + pdesc(x.no) + '</p>' + (x.note ? '<div class="warn">' + x.note + '</div>' : '') +
          '<p class="small">Topik ini berasal dari dokumen paten dan bukan daftar khasiat produk. Paten bukan bukti manfaat klinis produk jadi, dan hubungannya dengan bahan serta formula perlu diverifikasi. Suplemen bukan obat dan tidak menggantikan pengobatan dokter.</p>' +
          '<a class="btn" target="_blank" rel="noopener" href="' + gp(x.no) + '">Buka di Google Patents</a></div>';
        pdlg.showModal();
      } else if (z) {
        pbody.innerHTML = '<img class="zoom" src="' + PT[cur].img + '" alt="Infografis referensi paten ' + PT[cur].name + '">';
        pdlg.showModal();
      }
      if (e.target === pdlg || e.target.closest("[data-pclose]")) pdlg.close();
    });
  }

  // Info penyesuaian harga
  var PI = P.priceInfo, pinfo = $("#pinfo");
  if (PI && pinfo) {
    var subOn = new Date() <= new Date(PI.until + "T23:59:59"), nb = '<span class="nb">Berlaku sekarang</span>';
    pinfo.innerHTML = '<div><span class="eyebrow">' + PI.eyebrow + '</span><h3>' + PI.title + '</h3>' +
      '<p class="small" style="margin:0 0 14px">Diperbarui: ' + PI.updated + '</p><div class="tw"><table><tr><th>Produk</th>' +
      '<th class="' + (subOn ? "on" : "") + '">Harga subsidi<br><small>hingga ' + PI.untilLabel + '</small>' + (subOn ? nb : "") + '</th>' +
      '<th class="' + (subOn ? "" : "on") + '">Harga final<br><small>setelah periode subsidi</small>' + (subOn ? "" : nb) + '</th></tr>' +
      PI.rows.map(function (r) {
        return '<tr><td>' + r.name + '</td><td class="' + (subOn ? "on" : "") + '">' + rp(r.sub) + '</td><td class="' + (subOn ? "" : "on") + '">' + rp(r.fin) + (r.tetap ? ' <small>(harga tetap)</small>' : '') + '</td></tr>';
      }).join("") + '</table></div><p class="small">' + PI.note + '</p></div>' +
      (PI.image ? '<button class="pimg" data-zoomsrc="' + PI.image + '" aria-label="Perbesar poster harga"><img src="' + PI.image + '" alt="Poster penyesuaian harga" loading="lazy"><span>Klik untuk memperbesar</span></button>' : '');
  }
  document.addEventListener("click", function (e) {
    var z = e.target.closest("[data-zoomsrc]");
    if (z) { pbody.innerHTML = '<img class="zoom" src="' + z.dataset.zoomsrc + '" alt="Poster penyesuaian harga">'; pdlg.showModal(); }
  });

  // Navbar
  var hd = $("#hd"), nav = $("#nav"), bg = $("#bg");
  addEventListener("scroll", function () { hd.classList.toggle("s", scrollY > 20); }, { passive: true });
  bg.onclick = function () { bg.setAttribute("aria-expanded", nav.classList.toggle("open")); };
  var links = [].slice.call(nav.querySelectorAll("a"));
  links.forEach(function (a) { a.onclick = function () { nav.classList.remove("open"); bg.setAttribute("aria-expanded", "false"); }; });
  var so = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) links.forEach(function (l) { l.classList.toggle("on", l.getAttribute("href") === "#" + e.target.id); }); });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["top", "tentang", "paten", "katalog", "kualitas", "legalitas", "penghargaan", "faq"].forEach(function (i) { var el = document.getElementById(i); el && so.observe(el); });

  // Elemen tambahan ikut animasi muncul
  document.querySelectorAll("section:not(.hero) h2, section:not(.hero) .eyebrow, .ti, .bd, .yr").forEach(function (el) {
    if (!el.closest(".rv")) el.classList.add("rv");
  });

  // Hitung naik angka
  var fmt = function (n, d) { return n.toLocaleString("id-ID", { minimumFractionDigits: d, maximumFractionDigits: d }); };
  var co = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target, to = parseFloat(el.dataset.to), d = +(el.dataset.dec || 0), pre = el.dataset.prefix || "", suf = el.dataset.suffix || "", t0 = performance.now();
      co.unobserve(el);
      (function tick(t) {
        var k = Math.min((t - t0) / 1300, 1), v = to * (1 - Math.pow(1 - k, 3));
        el.textContent = pre + fmt(v, d) + suf;
        if (k < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.6 });
  if (!reduce) document.querySelectorAll("[data-to]").forEach(function (el) { co.observe(el); });

  // Progress bar scroll dan parallax hero
  var prog = $("#prog"), arch = $(".arch img");
  addEventListener("scroll", function () {
    var h = document.documentElement.scrollHeight - innerHeight;
    prog.style.transform = "scaleX(" + (h > 0 ? scrollY / h : 0) + ")";
    if (!reduce && arch && scrollY < 900) arch.style.setProperty("--py", scrollY * 0.06 + "px");
  }, { passive: true });

  // Animasi scroll
  var ro = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".rv").forEach(function (el, i) { el.style.transitionDelay = (i % 3) * 80 + "ms"; ro.observe(el); });

  // FAQ: satu terbuka
  var ds = document.querySelectorAll("details");
  ds.forEach(function (d) { d.addEventListener("toggle", function () { if (d.open) ds.forEach(function (o) { if (o !== d) o.open = false; }); }); });
})();
