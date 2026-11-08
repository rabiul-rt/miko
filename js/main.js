/* ============================================================
   FLORAL CRAFT — shared UI (header, footer, WhatsApp, cards, pages)
   ============================================================ */
(function () {
  "use strict";
  var C = window.FC_CONFIG;
  var P = window.PRODUCTS || [];
  var page = document.body.getAttribute("data-page") || "";

  var CAT = {
    muffler: { en: "Muffler", bn: "মাফলার", icon: "🧣" },
    tupi:    { en: "Tupi", bn: "টুপি", icon: "🧢" },
    dress:   { en: "Dress", bn: "ড্রেস", icon: "👗" },
    flower:  { en: "Sota Flower", bn: "সুতার ফুল", icon: "🌸" },
    combo:   { en: "Gift Combo", bn: "গিফট কম্বো", icon: "🎁" }
  };

  var SWATCH = {
    blue: "#4F7CAC", grey: "#9A9A9A", maroon: "#7B2D3B", cream: "#EFE3CC", mustard: "#D4A574",
    black: "#2D2420", pink: "#E8A0B4", sage: "#6B8E6B", red: "#C0392B", white: "#FFFFFF",
    yellow: "#F2C230", purple: "#8E6BAE", orange: "#E08A3C", multicolor: "linear-gradient(135deg,#E8A0B4,#F2C230,#6B8E6B,#4F7CAC)",
    assorted: "linear-gradient(135deg,#C97B5E,#D4A574,#6B8E6B)"
  };

  function enc(s) { return encodeURIComponent(s); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function bdt(n) { return "৳ " + Number(n).toLocaleString("en-US"); }

  function formBase() { return "https://docs.google.com/forms/d/e/" + C.formId + "/viewform"; }
  function formLink(p, opts) {
    opts = opts || {};
    var url = formBase() + "?usp=pp_url";
    if (p) {
      url += "&" + C.entryProduct + "=" + enc(p.name) + "&" + C.entryPrice + "=" + enc(p.price);
      if (opts.color && C.entryColor) url += "&" + C.entryColor + "=" + enc(opts.color);
      if (opts.qty && C.entryQty) url += "&" + C.entryQty + "=" + enc(opts.qty);
    }
    return url;
  }
  function waLink(p, opts) {
    opts = opts || {};
    var msg = "Hi Floral Craft! I want to order";
    if (p) {
      msg += ": " + p.name + " (" + bdt(p.price) + ")";
      if (opts.color) msg += ", Color: " + opts.color;
      if (opts.qty) msg += ", Qty: " + opts.qty;
    }
    return "https://wa.me/" + C.whatsapp + "?text=" + enc(msg);
  }

  /* ---------- Header ---------- */
  var NAV = [
    { id: "home", href: "index.html", bn: "হোম", en: "Home" },
    { id: "shop", href: "shop.html", bn: "শপ", en: "Shop" },
    { id: "about", href: "about.html", bn: "আমাদের কথা", en: "About" },
    { id: "how", href: "how-to-order.html", bn: "অর্ডার করুন", en: "How to Order" },
    { id: "faq", href: "faq.html", bn: "প্রশ্নোত্তর", en: "FAQ" },
    { id: "contact", href: "contact.html", bn: "যোগাযোগ", en: "Contact" }
  ];

  function renderHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.id === page ? ' class="active" aria-current="page"' : "") + ">" +
        '<span class="bn">' + n.bn + "</span><small>" + n.en + "</small></a>";
    }).join("");
    el.innerHTML =
      '<header class="header"><div class="container header-inner">' +
        '<a class="brand" href="index.html" aria-label="Floral Craft home"><img src="images/logo.svg" alt="" width="40" height="40"><span>Floral Craft</span></a>' +
        '<nav class="nav-desktop" aria-label="Main navigation">' + links + "</nav>" +
        '<div class="header-actions">' +
          '<a class="icon-btn" href="shop.html?focus=1" aria-label="Search products">🔍</a>' +
          '<a class="icon-btn" href="' + waLink() + '" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>' +
          '<a class="btn btn-primary btn-sm hide-sm" href="' + formLink() + '" target="_blank" rel="noopener">Order Now</a>' +
          '<button class="icon-btn menu-toggle" id="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">☰</button>' +
        "</div>" +
      "</div></header>" +
      '<div class="drawer-backdrop" id="drawer-backdrop"></div>' +
      '<aside class="drawer" id="drawer" aria-hidden="true">' +
        '<button class="icon-btn drawer-close" id="drawer-close" aria-label="Close menu">✕</button>' +
        '<nav aria-label="Mobile navigation">' + links + "</nav>" +
        '<a class="btn btn-primary" href="' + formLink() + '" target="_blank" rel="noopener">Order Now</a>' +
      "</aside>";

    var drawer = document.getElementById("drawer");
    var back = document.getElementById("drawer-backdrop");
    var toggle = document.getElementById("menu-toggle");
    function setOpen(open) {
      drawer.classList.toggle("open", open);
      back.classList.toggle("open", open);
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    }
    toggle.addEventListener("click", function () { setOpen(true); });
    document.getElementById("drawer-close").addEventListener("click", function () { setOpen(false); });
    back.addEventListener("click", function () { setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
    drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
  }

  /* ---------- Footer + WhatsApp ---------- */
  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    el.innerHTML =
      '<footer class="footer"><div class="container footer-grid">' +
        '<div><a class="brand brand-light" href="index.html"><img src="images/logo.svg" alt="" width="40" height="40"><span>Floral Craft</span></a>' +
          '<p class="footer-blurb">' + C.tagline_bn + " — " + C.tagline_en + ". Handmade mufflers, tupis, dresses and sota flowers from Bangladesh.</p>" +
          '<div class="social">' +
            '<a href="' + C.facebook + '" target="_blank" rel="noopener" aria-label="Facebook">f</a>' +
            '<a href="' + C.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">ig</a>' +
            '<a href="' + C.tiktok + '" target="_blank" rel="noopener" aria-label="TikTok">tt</a>' +
          "</div></div>" +
        "<div><h4>Quick Links</h4><ul>" +
          NAV.map(function (n) { return '<li><a href="' + n.href + '">' + n.en + "</a></li>"; }).join("") +
        "</ul></div>" +
        "<div><h4>Categories</h4><ul>" +
          Object.keys(CAT).map(function (k) { return '<li><a href="shop.html?cat=' + k + '">' + CAT[k].en + "</a></li>"; }).join("") +
        "</ul></div>" +
        "<div><h4>Contact</h4><ul>" +
          '<li>📱 <a href="tel:' + C.phoneDisplay.replace(/[^+\d]/g, "") + '">' + esc(C.phoneDisplay) + "</a></li>" +
          '<li>💬 <a href="' + waLink() + '" target="_blank" rel="noopener">WhatsApp</a></li>' +
          '<li>📧 <a href="mailto:' + C.email + '">' + esc(C.email) + "</a></li>" +
          "<li>📍 " + esc(C.location) + "</li>" +
        "</ul></div>" +
      '</div><div class="footer-bottom">© 2026 Floral Craft &nbsp;|&nbsp; Made with ❤️ in Bangladesh</div></footer>';
  }

  function renderWhatsApp() {
    var a = document.createElement("a");
    a.className = "wa-float";
    a.href = waLink();
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "Chat on WhatsApp");
    a.innerHTML = '<svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true"><path fill="#fff" d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.3.6 4.4 1.7 6.3L3 29l7.3-1.9c1.8 1 3.8 1.500 5.700 1.500 7 0 12.700-5.600 12.700-12.600S23 3 16 3zm0 23c-1.800 0-3.500-.5-5-1.400l-.4-.2-4.300 1.100 1.200-4.200-.3-.4c-1-1.500-1.500-3.300-1.500-5.100C5.700 9.800 10.300 5.300 16 5.300s10.300 4.500 10.300 10.300S21.700 26 16 26zm5.600-7.700c-.3-.2-1.800-.9-2.100-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100c-.3-.2-1.300-.5-2.500-1.500-.9-.8-1.500-1.800-1.700-2.100-.2-.3 0-.5.100-.6l.5-.5c.2-.2.200-.3.300-.5.100-.2.100-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1.100 1.100-1.100 2.600s1.100 3 1.300 3.200c.2.200 2.200 3.300 5.300 4.600.7.300 1.300.5 1.800.6.700.2 1.400.2 1.900.1.600-.1 1.800-.7 2-1.400.3-.7.300-1.300.2-1.400-.1-.2-.3-.2-.6-.4z"/></svg>';
    document.body.appendChild(a);
  }

  /* ---------- Cards ---------- */
  function productCard(p) {
    var cat = CAT[p.category] || { en: p.category, bn: "", icon: "" };
    var href = "product.html?slug=" + enc(p.slug);
    return '<article class="card">' +
      '<a class="card-img" href="' + href + '" tabindex="-1" aria-hidden="true"><img src="' + p.images[0] + '" alt="" loading="lazy" width="400" height="400"></a>' +
      '<div class="card-body">' +
        '<span class="badge">' + cat.icon + " " + cat.en + "</span>" +
        '<h3><a href="' + href + '">' + esc(p.name_bn) + "</a></h3>" +
        '<p class="card-en">' + esc(p.name) + "</p>" +
        '<p class="price">' + bdt(p.price) + "</p>" +
        '<a class="btn btn-primary btn-block" href="' + formLink(p) + '" target="_blank" rel="noopener">অর্ডার করুন · Order Now</a>' +
      "</div></article>";
  }

  /* ---------- Home ---------- */
  function initHome() {
    var g = document.getElementById("featured-grid");
    if (!g) return;
    var feats = P.filter(function (p) { return p.featured; }).slice(0, 6);
    g.innerHTML = feats.map(productCard).join("");
    var ig = document.getElementById("ig-link");
    if (ig) { ig.href = C.instagram; ig.textContent = C.instagramHandle; }
    document.querySelectorAll("[data-order-link]").forEach(function (a) {
      a.href = formLink(); a.target = "_blank"; a.rel = "noopener";
    });
  }

  /* ---------- Shop ---------- */
  function initShop() {
    var grid = document.getElementById("shop-grid");
    if (!grid) return;
    var params = new URLSearchParams(location.search);
    var state = { cat: params.get("cat") || "all", q: params.get("q") || "", sort: "newest" };
    var tabs = document.getElementById("cat-tabs");
    var search = document.getElementById("shop-search");
    var sort = document.getElementById("shop-sort");
    var count = document.getElementById("shop-count");
    var empty = document.getElementById("shop-empty");

    var tabDefs = [{ k: "all", label: "সব · All" }].concat(Object.keys(CAT).map(function (k) {
      return { k: k, label: CAT[k].icon + " " + CAT[k].bn + " · " + CAT[k].en };
    }));
    tabs.innerHTML = tabDefs.map(function (t) {
      return '<button class="tab" type="button" data-cat="' + t.k + '" role="tab">' + t.label + "</button>";
    }).join("");
    search.value = state.q;

    function render() {
      var q = state.q.trim().toLowerCase();
      var list = P.filter(function (p) {
        var okCat = state.cat === "all" || p.category === state.cat;
        var okQ = !q || (p.name + " " + p.name_bn + " " + p.category + " " + p.description).toLowerCase().indexOf(q) !== -1;
        return okCat && okQ;
      });
      if (state.sort === "low") list.sort(function (a, b) { return a.price - b.price; });
      else if (state.sort === "high") list.sort(function (a, b) { return b.price - a.price; });
      else list.sort(function (a, b) { return b.added < a.added ? -1 : 1; });

      grid.innerHTML = list.map(productCard).join("");
      count.textContent = list.length + (list.length === 1 ? " product" : " products");
      empty.hidden = list.length !== 0;
      tabs.querySelectorAll(".tab").forEach(function (b) {
        var on = b.getAttribute("data-cat") === state.cat;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
    }
    tabs.addEventListener("click", function (e) {
      var b = e.target.closest(".tab");
      if (!b) return;
      state.cat = b.getAttribute("data-cat");
      render();
    });
    search.addEventListener("input", function () { state.q = search.value; render(); });
    sort.addEventListener("change", function () { state.sort = sort.value; render(); });
    document.getElementById("shop-reset").addEventListener("click", function () {
      state.cat = "all"; state.q = ""; search.value = ""; render();
    });
    render();
    if (params.get("focus")) search.focus();
  }

  /* ---------- Product detail ---------- */
  function initProduct() {
    var root = document.getElementById("product-root");
    if (!root) return;
    var slug = new URLSearchParams(location.search).get("slug");
    var p = P.filter(function (x) { return x.slug === slug; })[0];
    if (!p) {
      root.innerHTML = '<div class="empty"><h2>Product not found</h2><p>এই প্রোডাক্টটি পাওয়া যায়নি।</p><a class="btn btn-primary" href="shop.html">Back to Shop</a></div>';
      return;
    }
    var cat = CAT[p.category] || { en: p.category, bn: "", icon: "" };
    document.title = p.name + " | Floral Craft";
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", p.description);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", p.name + " | Floral Craft");

    document.getElementById("crumb-name").textContent = p.name;

    var thumbs = p.images.map(function (src, i) {
      return '<button type="button" class="thumb' + (i === 0 ? " active" : "") + '" data-src="' + src + '" aria-label="Image ' + (i + 1) + '"><img src="' + src + '" alt="" width="80" height="80"></button>';
    }).join("");

    var swatches = p.colors.map(function (c, i) {
      var bg = SWATCH[c.toLowerCase().split(" ")[0]] || "#ddd";
      return '<button type="button" class="swatch' + (i === 0 ? " active" : "") + '" data-color="' + esc(c) + '" aria-label="' + esc(c) + '">' +
        '<span class="dot" style="background:' + bg + '"></span>' + esc(c) + "</button>";
    }).join("");

    root.innerHTML =
      '<div class="pd-gallery">' +
        '<div class="pd-main"><img id="pd-main-img" src="' + p.images[0] + '" alt="' + esc(p.name) + '" width="600" height="600"></div>' +
        '<div class="thumbs">' + thumbs + "</div>" +
      "</div>" +
      '<div class="pd-info">' +
        '<span class="badge">' + cat.icon + " " + cat.bn + " · " + cat.en + "</span>" +
        "<h1>" + esc(p.name_bn) + "</h1>" +
        '<p class="card-en pd-en">' + esc(p.name) + "</p>" +
        '<p class="price price-lg">' + bdt(p.price) + "</p>" +
        '<p class="stock ' + (p.in_stock ? "in" : "out") + '">' + (p.in_stock ? "✔ In stock · স্টকে আছে" : "✖ Out of stock · স্টক নেই") + "</p>" +
        "<p>" + esc(p.description_bn) + "</p>" +
        '<p class="muted">' + esc(p.description) + "</p>" +
        '<div class="field"><span class="label">Color / রঙ: <strong id="pd-color-label">' + esc(p.colors[0]) + "</strong></span>" +
          '<div class="swatches" id="swatches">' + swatches + "</div></div>" +
        '<div class="field"><span class="label">Quantity / পরিমাণ</span>' +
          '<div class="qty"><button type="button" id="qty-minus" aria-label="Decrease">−</button>' +
          '<input id="qty" type="number" min="1" max="20" value="1" aria-label="Quantity">' +
          '<button type="button" id="qty-plus" aria-label="Increase">+</button></div></div>' +
        '<div class="pd-actions">' +
          '<a id="order-form" class="btn btn-primary btn-lg" target="_blank" rel="noopener">📝 Order via Google Form</a>' +
          '<a id="order-wa" class="btn btn-outline btn-lg" target="_blank" rel="noopener">💬 Order via WhatsApp</a>' +
        "</div>" +
        '<div class="accordion">' +
          "<details open><summary>Product Details · বিস্তারিত</summary><p>Material: soft acrylic/wool blend yarn (or cotton thread for sota flowers). 100% handmade, so small variations make each piece unique.</p></details>" +
          "<details><summary>Care · যত্ন</summary><p>Hand wash gently in cold water. Do not wring. Dry flat in shade. Keep flowers away from moisture.</p></details>" +
          "<details><summary>Delivery · ডেলিভারি</summary><p>Dhaka 2-3 days (৳80). Outside Dhaka 4-5 days by courier (৳150). Custom orders take 5-7 extra days.</p></details>" +
          "<details><summary>Return Policy · রিটার্ন</summary><p>Returns accepted for damaged products only. Please notify us within 24 hours of delivery with a photo.</p></details>" +
        "</div>" +
      "</div>";

    var state = { color: p.colors[0], qty: 1 };
    var form = document.getElementById("order-form");
    var wa = document.getElementById("order-wa");
    var qty = document.getElementById("qty");
    function update() {
      form.href = formLink(p, state);
      wa.href = waLink(p, state);
      document.getElementById("pd-color-label").textContent = state.color;
    }
    update();

    document.getElementById("swatches").addEventListener("click", function (e) {
      var b = e.target.closest(".swatch"); if (!b) return;
      document.querySelectorAll(".swatch").forEach(function (s) { s.classList.remove("active"); });
      b.classList.add("active");
      state.color = b.getAttribute("data-color");
      update();
    });
    function setQty(n) { n = Math.max(1, Math.min(20, parseInt(n, 10) || 1)); qty.value = n; state.qty = n; update(); }
    document.getElementById("qty-minus").addEventListener("click", function () { setQty(state.qty - 1); });
    document.getElementById("qty-plus").addEventListener("click", function () { setQty(state.qty + 1); });
    qty.addEventListener("input", function () { setQty(qty.value); });
    root.querySelector(".thumbs").addEventListener("click", function (e) {
      var b = e.target.closest(".thumb"); if (!b) return;
      root.querySelectorAll(".thumb").forEach(function (t) { t.classList.remove("active"); });
      b.classList.add("active");
      document.getElementById("pd-main-img").src = b.getAttribute("data-src");
    });

    var related = P.filter(function (x) { return x.category === p.category && x.slug !== p.slug; });
    P.forEach(function (x) { if (related.length < 3 && x.slug !== p.slug && related.indexOf(x) === -1) related.push(x); });
    document.getElementById("related-grid").innerHTML = related.slice(0, 3).map(productCard).join("");
  }

  /* ---------- Google Form embeds ---------- */
  function initEmbeds() {
    document.querySelectorAll("[data-form-embed]").forEach(function (frame) {
      var placeholder = C.formId === "YOUR_FORM_ID";
      var note = frame.parentNode.querySelector(".embed-note");
      if (placeholder) {
        if (note) note.hidden = false;
        frame.hidden = true;
      } else {
        frame.src = formBase() + "?embedded=true";
      }
    });
    document.querySelectorAll("[data-order-link]").forEach(function (a) {
      a.href = formLink(); a.target = "_blank"; a.rel = "noopener";
    });
    document.querySelectorAll("[data-wa-link]").forEach(function (a) {
      a.href = waLink(); a.target = "_blank"; a.rel = "noopener";
    });
    document.querySelectorAll("[data-config]").forEach(function (el) {
      var k = el.getAttribute("data-config");
      var v = C[k];
      if (!v) return;
      if (el.tagName === "A") {
        el.href = k === "email" ? "mailto:" + v : k === "phoneDisplay" ? "tel:" + v.replace(/[^+\d]/g, "") : v;
        if (el.hasAttribute("data-text")) el.textContent = v.replace(/^https?:\/\//, "");
      } else { el.textContent = v; }
    });
  }

  /* ---------- Boot ---------- */
  renderHeader();
  renderFooter();
  renderWhatsApp();
  initHome();
  initShop();
  initProduct();
  initEmbeds();
})();
