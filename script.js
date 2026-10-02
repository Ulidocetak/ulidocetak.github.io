/* =========================================================
   ULIDO CETAK — Version 2.0
   Konfigurasi utama ada di bagian SETTINGS dan DATA.
   ========================================================= */

const SETTINGS = {
  whatsappNumber: "6281314721670",
  instagram: "https://www.instagram.com/ulidocetak/",
  tiktok: "https://www.tiktok.com/@ulidocetak",
  address: "Jl. Agape No.33, RW.07, Tugu Sel., Kec. Koja, Jkt Utara, Daerah Khusus Ibukota Jakarta 14260",
  currency: "IDR",
};

const PRODUCTS = [
  {
    id: "paperbag-custom", name: "Paperbag Custom", category: "percetakan", categoryLabel: "Percetakan",
    description: "Percetakan paper bag custom untuk kebutuhan toko, event, souvenir, dan branding bisnis, tersedia dalam berbagai ukuran, bahan, dan desain sesuai identitas usaha.",
    priceFrom: 8000, unit: "/ pcs", image: "assets/products/paperbag-ulido.webp", imageAlt: "Produk paperbag custom ULIDO Cetak"
  },
  {
    id: "undangan-adat", name: "Undangan Adat", category: "undangan", categoryLabel: "Undangan",
    description: "Undangan bernuansa adat dengan elemen budaya, foto, warna, dan tata letak yang dibuat lebih personal untuk keluarga.",
    priceFrom: 4500, unit: "/ pcs", image: "assets/products/undangan-batak-toba.webp", imageAlt: "Produk undangan adat Batak Toba ULIDO Cetak"
  },
  {
    id: "kartu-nama", name: "Kartu Nama", category: "percetakan", categoryLabel: "Percetakan",
    description: "Kartu nama profesional untuk bisnis dan personal branding, tersedia dalam berbagai pilihan kertas dan finishing.",
    priceFrom: 30000, unit: "/ box", image: "assets/products/kartu-nama-ulido.webp", imageAlt: "Mockup kartu nama ULIDO Cetak"
  },
  {
    id: "stiker", name: "Stiker Custom", category: "percetakan", categoryLabel: "Percetakan",
    description: "Stiker untuk label produk, kemasan, logo, souvenir, dan promosi dengan bentuk serta ukuran yang dapat disesuaikan.",
    priceFrom: 20000, unit: "/ lembar", image: "assets/products/stiker-ulido.webp", imageAlt: "Mockup stiker custom ULIDO Cetak"
  },
  {
    id: "brosur-flyer", name: "Brosur & Flyer", category: "percetakan", categoryLabel: "Percetakan",
    description: "Media promosi informatif untuk usaha, sekolah, event, menu, layanan, dan kampanye pemasaran dengan cetak tajam.",
    priceFrom: 750, unit: "/ pcs", image: "assets/products/brosur-flyer-ulido.webp", imageAlt: "Mockup Brosur dan Flyer ULIDO Cetak"
  },
  {
    id: "id-card", name: "ID Card & Lanyard", category: "percetakan", categoryLabel: "Percetakan",
    description: "ID card untuk sekolah, organisasi, kantor, event, dan komunitas, tersedia dengan lanyard standar maupun custom.",
    priceFrom: 12000, unit: "/ pcs", image: "assets/products/idcard-ulido.webp", imageAlt: "Mockup ID Card dan lanyard ULIDO Cetak"
  },
  {
    id: "sertifikat", name: "Sertifikat", category: "percetakan", categoryLabel: "Percetakan",
    description: "Cetak sertifikat kegiatan, penghargaan, seminar, pelatihan, dan kebutuhan institusi dengan layout profesional.",
    priceFrom: 5000, unit: "/ pcs", icon: "✦", visualClass: "v-yellow"
  },
  {
    id: "buku-booklet", name: "Buku & Booklet", category: "percetakan", categoryLabel: "Percetakan",
    description: "Cetak buku, booklet, modul, company profile, katalog, dan materi informasi dengan pilihan jilid sesuai kebutuhan.",
    priceFrom: null, unit: "", icon: "▤", visualClass: "v-slate"
  },
  {
    id: "banner", name: "Banner & Spanduk", category: "advertising", categoryLabel: "Advertising",
    description: "Banner dan spanduk untuk toko, event, promosi, kampanye, sekolah, serta kebutuhan indoor dan outdoor berbagai ukuran.",
    priceFrom: 25000, unit: "/ m²", image: "assets/products/banner-ulido.webp", imageAlt: "Mockup banner ULIDO Cetak"
  },
  {
    id: "x-banner", name: "X-Banner", category: "advertising", categoryLabel: "Advertising",
    description: "Display promosi praktis untuk toko, pameran, seminar, booth, dan acara yang mudah dipindahkan serta digunakan ulang.",
    priceFrom: 90000, unit: "/ set", image: "assets/products/xbanner-ulido.webp", imageAlt: "Mockup X-Banner ULIDO Cetak"
  },
  {
    id: "roll-banner", name: "Roll Banner", category: "advertising", categoryLabel: "Advertising",
    description: "Media display premium dengan mekanisme roll-up, cocok untuk pameran, kantor, booth, dan presentasi bisnis.",
    priceFrom: null, unit: "", icon: "▰", visualClass: "v-blue"
  },
  {
    id: "backdrop", name: "Backdrop & Photowall", category: "advertising", categoryLabel: "Advertising",
    description: "Backdrop acara, photowall, panggung, wisuda, gathering, dan branding event dengan ukuran custom.",
    priceFrom: null, unit: "", icon: "▣", visualClass: "v-mint"
  },
  {
    id: "neon-signage", name: "Neon Box & Signage", category: "advertising", categoryLabel: "Advertising",
    description: "Media identitas lokasi untuk toko, kantor, restoran, dan usaha dengan ukuran serta konstruksi menyesuaikan kebutuhan.",
    priceFrom: null, unit: "", icon: "◆", visualClass: "v-slate"
  },
  {
    id: "desain-sosmed", name: "Desain Konten Promosi", category: "desain", categoryLabel: "Desain Grafis",
    description: "Desain poster, promosi, feed media sosial, banner digital, dan materi pemasaran dengan visual yang konsisten.",
    priceFrom: 50000, unit: "/ desain", icon: "✦", visualClass: "v-pink"
  },
  {
    id: "logo-branding", name: "Logo & Branding", category: "desain", categoryLabel: "Desain Grafis",
    description: "Pengembangan identitas visual untuk usaha, produk, komunitas, dan organisasi agar tampil lebih mudah dikenali.",
    priceFrom: 250000, unit: "mulai", icon: "◆", visualClass: "v-mint"
  },
  {
    id: "layout-cetak", name: "Layout Siap Cetak", category: "desain", categoryLabel: "Desain Grafis",
    description: "Penataan dan penyesuaian file agar ukuran, margin, resolusi, dan format lebih aman sebelum masuk proses produksi.",
    priceFrom: 35000, unit: "mulai", icon: "✎", visualClass: "v-slate"
  },
];

// Harga berikut hanya contoh agar kalkulator langsung berfungsi.
// Silakan ganti sesuai daftar harga ULIDO Cetak.
const CALCULATOR_DATA = {
  banner: {
    label: "Banner / Spanduk",
    pricing: "area",
    baseRate: 25000,
    sizes: [
      { label: "60 × 160 cm", factor: 0.96 },
      { label: "80 × 200 cm", factor: 1.6 },
      { label: "100 × 300 cm", factor: 3 },
      { label: "Custom 1 m²", factor: 1 },
    ],
    materials: [
      { label: "Flexi 280 gsm", factor: 1 },
      { label: "Flexi 340 gsm", factor: 1.25 },
      { label: "Albatros", factor: 1.55 },
    ],
    finishes: [
      { label: "Standar", add: 0 },
      { label: "Mata Ayam", add: 5000 },
      { label: "Selongsong", add: 8000 },
    ],
  },
  stiker: {
    label: "Stiker Custom",
    pricing: "sheet",
    baseRate: 20000,
    sizes: [
      { label: "A4", factor: 1 },
      { label: "A3", factor: 1.8 },
      { label: "A3+", factor: 2.15 },
    ],
    materials: [
      { label: "Chromolux", factor: 1 },
      { label: "Vinyl", factor: 1.4 },
      { label: "Transparan", factor: 1.55 },
    ],
    finishes: [
      { label: "Tanpa Laminasi", add: 0 },
      { label: "Laminasi Glossy", add: 5000 },
      { label: "Laminasi Doff", add: 6000 },
    ],
  },
  kartunama: {
    label: "Kartu Nama",
    pricing: "box",
    baseRate: 30000,
    sizes: [
      { label: "Standar 9 × 5.5 cm", factor: 1 },
      { label: "Custom", factor: 1.15 },
    ],
    materials: [
      { label: "Art Carton 260 gsm", factor: 1 },
      { label: "Art Carton 310 gsm", factor: 1.18 },
      { label: "Fancy Paper", factor: 1.6 },
    ],
    finishes: [
      { label: "Tanpa Laminasi", add: 0 },
      { label: "Laminasi Glossy", add: 10000 },
      { label: "Laminasi Doff", add: 12000 },
    ],
  },
  undangan: {
    label: "Undangan",
    pricing: "piece",
    baseRate: 3500,
    sizes: [
      { label: "A5 / setara", factor: 1 },
      { label: "20 × 20 cm / setara", factor: 1.25 },
      { label: "Custom Premium", factor: 1.55 },
    ],
    materials: [
      { label: "Art Carton", factor: 1 },
      { label: "Jasmine / Fancy", factor: 1.35 },
      { label: "Premium Textured", factor: 1.6 },
    ],
    finishes: [
      { label: "Standar", add: 0 },
      { label: "Laminasi", add: 700 },
      { label: "Hotprint / Foil", add: 1500 },
    ],
  },
  idcard: {
    label: "ID Card",
    pricing: "piece",
    baseRate: 12000,
    sizes: [
      { label: "CR80 / standar", factor: 1 },
      { label: "Custom", factor: 1.15 },
    ],
    materials: [
      { label: "PVC", factor: 1 },
      { label: "PVC Premium", factor: 1.25 },
    ],
    finishes: [
      { label: "Card Only", add: 0 },
      { label: "+ Lanyard Standar", add: 7000 },
      { label: "+ Lanyard Custom", add: 15000 },
    ],
  },
  xbanner: {
    label: "X-Banner",
    pricing: "set",
    baseRate: 90000,
    sizes: [
      { label: "60 × 160 cm", factor: 1 },
      { label: "80 × 180 cm", factor: 1.25 },
    ],
    materials: [
      { label: "Flexi", factor: 1 },
      { label: "Albatros", factor: 1.2 },
    ],
    finishes: [
      { label: "Dengan rangka X-Banner", add: 0 },
      { label: "Cetak ulang banner saja", add: -35000 },
    ],
  },
  brosur: {
    label: "Brosur / Flyer",
    pricing: "piece",
    baseRate: 750,
    sizes: [
      { label: "A5", factor: 1 },
      { label: "A4", factor: 1.6 },
      { label: "A3", factor: 2.8 },
    ],
    materials: [
      { label: "HVS", factor: 1 },
      { label: "Art Paper", factor: 1.35 },
      { label: "Art Carton", factor: 1.8 },
    ],
    finishes: [
      { label: "Tanpa finishing", add: 0 },
      { label: "Lipat 2", add: 150 },
      { label: "Lipat 3", add: 250 },
    ],
  },
};

const rupiah = (value) => new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: SETTINGS.currency,
  maximumFractionDigits: 0,
}).format(value);

const encodeWA = (message) => {
  const number = SETTINGS.whatsappNumber.replace(/\D/g, "");
  if (!number || number === "6280000000000") {
    alert("Nomor WhatsApp belum diatur. Buka script.js lalu ganti SETTINGS.whatsappNumber dengan nomor resmi ULIDO Cetak.");
    return null;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

const openWhatsApp = (message) => {
  const url = encodeWA(message);
  if (url) window.open(url, "_blank", "noopener,noreferrer");
};

// ---------------------------------------------------------
// Katalog produk
// ---------------------------------------------------------
const productGrid = document.getElementById("productGrid");
const productSearch = document.getElementById("productSearch");
const filterButtons = [...document.querySelectorAll(".filter-btn")];
const emptyProducts = document.getElementById("emptyProducts");
let activeCategory = "all";

function renderProducts() {
  const keyword = productSearch.value.trim().toLowerCase();
  const items = PRODUCTS.filter((product) => {
    const categoryMatch = activeCategory === "all" || product.category === activeCategory;
    const searchMatch = [product.name, product.description, product.categoryLabel]
      .join(" ")
      .toLowerCase()
      .includes(keyword);
    return categoryMatch && searchMatch;
  });

    productGrid.innerHTML = items.map((product) => `
    <article class="product-card">
      ${product.image ? `
        <div class="product-photo-wrap">
          <img class="product-photo" src="${product.image}" alt="${product.imageAlt || product.name}" loading="lazy" />
        </div>
      ` : `
        <div class="product-visual ${product.visualClass}">
          <span class="visual-icon" aria-hidden="true">${product.icon}</span>
          <span class="visual-word">${product.name}</span>
        </div>
      `}
      <div class="product-body">
        <span class="product-tag">${product.categoryLabel}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-price">
          <div><small>${product.priceFrom ? "Estimasi mulai" : "Harga"}</small><strong>${product.priceFrom ? rupiah(product.priceFrom) : "Konsultasi"}</strong></div>
          <small>${product.unit || "via WhatsApp"}</small>
        </div>
        <div class="product-actions">
          <button class="btn-outline" type="button" data-product-estimate="${product.id}">Estimasi</button>
          <button class="btn-mini-primary" type="button" data-product-wa="${product.id}">Pesan</button>
        </div>
      </div>
    </article>
  `).join("");

  emptyProducts.hidden = items.length > 0;
}

productSearch.addEventListener("input", renderProducts);
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    renderProducts();
  });
});

document.querySelectorAll("[data-category-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const category = link.dataset.categoryLink;
    activeCategory = category;
    filterButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.filter === category));
    renderProducts();
  });
});

productGrid.addEventListener("click", (event) => {
  const waButton = event.target.closest("[data-product-wa]");
  const estimateButton = event.target.closest("[data-product-estimate]");

  if (waButton) {
    const product = PRODUCTS.find((item) => item.id === waButton.dataset.productWa);
    openWhatsApp(`Halo ULIDO Cetak, saya tertarik dengan produk ${product.name}. Mohon informasi pilihan bahan, ukuran, harga, dan estimasi pengerjaannya.`);
  }

  if (estimateButton) {
    const product = PRODUCTS.find((item) => item.id === estimateButton.dataset.productEstimate);
    document.getElementById("kalkulator").scrollIntoView({ behavior: "smooth", block: "start" });
    const match = Object.entries(CALCULATOR_DATA).find(([, data]) => product.name.toLowerCase().includes(data.label.split(" ")[0].toLowerCase()));
    if (match) {
      calcProduct.value = match[0];
      populateCalculatorOptions();
      calculateEstimate();
    } else {
      openWhatsApp(`Halo ULIDO Cetak, saya ingin meminta estimasi harga untuk ${product.name}. Mohon informasi pilihan ukuran, bahan, finishing, minimal order, dan estimasi pengerjaannya.`);
    }
  }
});

renderProducts();

// ---------------------------------------------------------
// Kalkulator harga
// ---------------------------------------------------------
const calcProduct = document.getElementById("calcProduct");
const calcSize = document.getElementById("calcSize");
const calcMaterial = document.getElementById("calcMaterial");
const calcQty = document.getElementById("calcQty");
const calcFinish = document.getElementById("calcFinish");
const estimatedPrice = document.getElementById("estimatedPrice");
const estimatedUnit = document.getElementById("estimatedUnit");
const sendEstimateBtn = document.getElementById("sendEstimateBtn");

function initCalculator() {
  calcProduct.innerHTML = Object.entries(CALCULATOR_DATA)
    .map(([key, value]) => `<option value="${key}">${value.label}</option>`)
    .join("");
  populateCalculatorOptions();
  calculateEstimate();
}

function populateCalculatorOptions() {
  const data = CALCULATOR_DATA[calcProduct.value];
  calcSize.innerHTML = data.sizes.map((item, index) => `<option value="${index}">${item.label}</option>`).join("");
  calcMaterial.innerHTML = data.materials.map((item, index) => `<option value="${index}">${item.label}</option>`).join("");
  calcFinish.innerHTML = data.finishes.map((item, index) => `<option value="${index}">${item.label}</option>`).join("");
}

function getEstimateDetails() {
  const data = CALCULATOR_DATA[calcProduct.value];
  const size = data.sizes[Number(calcSize.value) || 0];
  const material = data.materials[Number(calcMaterial.value) || 0];
  const finish = data.finishes[Number(calcFinish.value) || 0];
  const qty = Math.max(1, Number(calcQty.value) || 1);

  const base = data.baseRate * size.factor * material.factor;
  const total = Math.round((base + finish.add) * qty / 500) * 500;
  return { data, size, material, finish, qty, total };
}

function calculateEstimate() {
  const { data, qty, total } = getEstimateDetails();
  estimatedPrice.textContent = rupiah(total);
  estimatedUnit.textContent = `${qty} ${data.pricing === "piece" ? "pcs" : data.pricing === "box" ? "box" : data.pricing === "sheet" ? "lembar" : "unit"}`;
}

calcProduct.addEventListener("change", () => { populateCalculatorOptions(); calculateEstimate(); });
[calcSize, calcMaterial, calcFinish].forEach((element) => element.addEventListener("change", calculateEstimate));
calcQty.addEventListener("input", calculateEstimate);

sendEstimateBtn.addEventListener("click", () => {
  const { data, size, material, finish, qty, total } = getEstimateDetails();
  const message = [
    "Halo ULIDO Cetak, saya ingin menanyakan pesanan berdasarkan kalkulator website:",
    "",
    `Produk: ${data.label}`,
    `Ukuran: ${size.label}`,
    `Bahan: ${material.label}`,
    `Jumlah: ${qty}`,
    `Finishing: ${finish.label}`,
    `Estimasi website: ${rupiah(total)}`,
    "",
    "Mohon konfirmasi harga final dan estimasi pengerjaannya. Terima kasih.",
  ].join("\n");
  openWhatsApp(message);
});

initCalculator();

// ---------------------------------------------------------
// WhatsApp CTA global
// ---------------------------------------------------------
document.querySelectorAll("[data-wa-message]").forEach((button) => {
  button.addEventListener("click", () => openWhatsApp(button.dataset.waMessage));
});
document.getElementById("floatingWa").addEventListener("click", () => openWhatsApp("Halo ULIDO Cetak, saya ingin konsultasi kebutuhan cetak."));
document.getElementById("bottomWa").addEventListener("click", () => openWhatsApp("Halo ULIDO Cetak, saya ingin konsultasi kebutuhan cetak."));

// ---------------------------------------------------------
// Menu mobile
// ---------------------------------------------------------
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu.hidden = isOpen;
});

mobileMenu.querySelectorAll("a, button").forEach((item) => {
  item.addEventListener("click", () => {
    menuBtn.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
  });
});

// ---------------------------------------------------------
// FAQ accordion
// ---------------------------------------------------------
document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const shouldOpen = !item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach((faq) => {
      faq.classList.remove("open");
      faq.querySelector("button").setAttribute("aria-expanded", "false");
      faq.querySelector("button b").textContent = "+";
    });

    if (shouldOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      button.querySelector("b").textContent = "−";
    }
  });
});

// ---------------------------------------------------------
// Portfolio modal
// ---------------------------------------------------------
const portfolioModal = document.getElementById("portfolioModal");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalWa = document.getElementById("modalWa");
let currentPortfolioTitle = "produk ini";

function closeModal() {
  portfolioModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".portfolio-item").forEach((item) => {
  item.querySelector(".round-btn").addEventListener("click", () => {
    currentPortfolioTitle = item.dataset.title;
    modalTitle.textContent = item.dataset.title;
    modalCategory.textContent = item.dataset.category.toUpperCase();
    portfolioModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  });
});

document.querySelectorAll("[data-close-modal]").forEach((element) => element.addEventListener("click", closeModal));
modalWa.addEventListener("click", () => openWhatsApp(`Halo ULIDO Cetak, saya tertarik dengan produk/karya seperti ${currentPortfolioTitle}. Bisa dibantu informasi dan estimasinya?`));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && portfolioModal.getAttribute("aria-hidden") === "false") closeModal();
});

// ---------------------------------------------------------
// Reveal animation
// ---------------------------------------------------------
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

// ---------------------------------------------------------
// Misc.
// ---------------------------------------------------------
document.getElementById("currentYear").textContent = new Date().getFullYear();
