/* Meta Pixel + event. Klik WhatsApp = minat (Contact), bukan transaksi. Jangan kirim data pribadi/kesehatan. */
(function () {
  var id = window.PRODUCT && PRODUCT.pixelId;
  window.track = function (name, params) { try { window.fbq && fbq("track", name, params); } catch (e) {} };
  if (id) {
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", id); fbq("track", "PageView");
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-wa]");
    if (a) track("Contact", { content_name: PRODUCT.name, source: a.dataset.wa });
  });
  document.addEventListener("DOMContentLoaded", function () {
    var el = document.getElementById("katalog"), done = false;
    if (!el || !("IntersectionObserver" in window)) return;
    new IntersectionObserver(function (en, o) {
      if (en[0].isIntersecting && !done) { done = true; track("ViewContent", { content_name: PRODUCT.name }); o.disconnect(); }
    }).observe(el);
  });
})();
