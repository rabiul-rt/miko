/* ============================================================
   FLORAL CRAFT — PRODUCT DATA
   Edit / add products here. Image files live in images/products/.
   Categories: muffler | tupi | dress | flower | combo
   ============================================================ */
window.PRODUCTS = [
  {
    slug: "blue-wool-muffler",
    name: "Blue Wool Muffler", name_bn: "নীল উলের মাফলার",
    category: "muffler", price: 450,
    images: ["images/products/blue-wool-muffler-1.svg", "images/products/blue-wool-muffler-2.svg"],
    description: "Soft wool muffler, hand-knit. Length 65 inch, warm and light.",
    description_bn: "নরম উলের হাতে বোনা মাফলার। দৈর্ঘ্য ৬৫ ইঞ্চি।",
    colors: ["Blue", "Grey", "Maroon"], in_stock: true, featured: true, added: "2026-10-20"
  },
  {
    slug: "cozy-cable-knit-muffler",
    name: "Cozy Cable-Knit Muffler", name_bn: "কেবল নিট মাফলার",
    category: "muffler", price: 550,
    images: ["images/products/cozy-cable-knit-muffler-1.svg", "images/products/cozy-cable-knit-muffler-2.svg"],
    description: "Thick cable-knit pattern muffler, perfect for cold Dhaka mornings.",
    description_bn: "মোটা কেবল ডিজাইনের মাফলার, শীতের সকালের জন্য পারফেক্ট।",
    colors: ["Cream", "Mustard", "Black"], in_stock: true, featured: true, added: "2026-10-25"
  },
  {
    slug: "rainbow-striped-muffler",
    name: "Rainbow Striped Muffler", name_bn: "রঙিন স্ট্রাইপ মাফলার",
    category: "muffler", price: 400,
    images: ["images/products/rainbow-striped-muffler-1.svg", "images/products/rainbow-striped-muffler-2.svg"],
    description: "Cheerful multicolor striped muffler, great gift for kids and teens.",
    description_bn: "রঙিন স্ট্রাইপের মাফলার, ছোটদের জন্য দারুণ উপহার।",
    colors: ["Multicolor"], in_stock: true, featured: false, added: "2026-09-30"
  },
  {
    slug: "classic-wool-tupi",
    name: "Classic Wool Tupi", name_bn: "ক্লাসিক উলের টুপি",
    category: "tupi", price: 300,
    images: ["images/products/classic-wool-tupi-1.svg", "images/products/classic-wool-tupi-2.svg"],
    description: "Snug hand-knit beanie with a folded brim. One size fits most.",
    description_bn: "হাতে বোনা নরম টুপি, ফোল্ডেড ব্রিম। ফ্রি সাইজ।",
    colors: ["Maroon", "Grey", "Blue", "Black"], in_stock: true, featured: true, added: "2026-10-18"
  },
  {
    slug: "pom-pom-tupi",
    name: "Pom-Pom Tupi", name_bn: "পম-পম টুপি",
    category: "tupi", price: 350,
    images: ["images/products/pom-pom-tupi-1.svg", "images/products/pom-pom-tupi-2.svg"],
    description: "Cute beanie with a fluffy pom-pom on top. Soft and stretchy.",
    description_bn: "মাথায় নরম পম-পম দেওয়া কিউট টুপি।",
    colors: ["Pink", "Cream", "Mustard"], in_stock: true, featured: false, added: "2026-10-05"
  },
  {
    slug: "handmade-crochet-dress",
    name: "Handmade Crochet Dress", name_bn: "হাতে বোনা ক্রোশে ড্রেস",
    category: "dress", price: 1800,
    images: ["images/products/handmade-crochet-dress-1.svg", "images/products/handmade-crochet-dress-2.svg"],
    description: "Delicate crochet dress, made to order. Sizes S, M, L. Takes 5-7 days.",
    description_bn: "অর্ডার অনুযায়ী তৈরি সূক্ষ্ম ক্রোশে ড্রেস। সাইজ S, M, L।",
    colors: ["Cream", "Pink", "Sage"], in_stock: true, featured: true, added: "2026-10-28"
  },
  {
    slug: "kids-woolen-frock",
    name: "Kids Woolen Frock", name_bn: "বাচ্চাদের উলের ফ্রক",
    category: "dress", price: 1200,
    images: ["images/products/kids-woolen-frock-1.svg", "images/products/kids-woolen-frock-2.svg"],
    description: "Warm hand-knit frock for girls aged 2-8. Available in many colors.",
    description_bn: "২-৮ বছরের মেয়েদের জন্য হাতে বোনা গরম ফ্রক।",
    colors: ["Red", "Pink", "Blue"], in_stock: true, featured: false, added: "2026-10-10"
  },
  {
    slug: "sota-rose-bouquet",
    name: "Sota Rose Bouquet", name_bn: "সুতার গোলাপ বুকে",
    category: "flower", price: 650,
    images: ["images/products/sota-rose-bouquet-1.svg", "images/products/sota-rose-bouquet-2.svg"],
    description: "Everlasting handmade rose bouquet, 7 roses. Never wilts.",
    description_bn: "৭টি গোলাপের হাতে তৈরি বুকে, কখনো শুকায় না।",
    colors: ["Red", "Pink", "White"], in_stock: true, featured: true, added: "2026-11-01"
  },
  {
    slug: "sunflower-bunch",
    name: "Sunflower Bunch", name_bn: "সূর্যমুখী ফুলের তোড়া",
    category: "flower", price: 500,
    images: ["images/products/sunflower-bunch-1.svg", "images/products/sunflower-bunch-2.svg"],
    description: "Bright sunflower bunch of 5 stems. Lovely for desks and shelves.",
    description_bn: "৫টি সূর্যমুখী ফুলের তোড়া, ডেস্ক সাজাতে দারুণ।",
    colors: ["Yellow"], in_stock: true, featured: true, added: "2026-10-22"
  },
  {
    slug: "tulip-flower-pot",
    name: "Tulip Flower Pot", name_bn: "টিউলিপ ফুলের টব",
    category: "flower", price: 750,
    images: ["images/products/tulip-flower-pot-1.svg", "images/products/tulip-flower-pot-2.svg"],
    description: "Handcrafted tulips in a small ceramic pot. A charming décor piece.",
    description_bn: "ছোট টবে হাতে তৈরি টিউলিপ, ঘর সাজানোর জন্য সুন্দর।",
    colors: ["Pink", "Purple", "Orange"], in_stock: true, featured: false, added: "2026-09-25"
  },
  {
    slug: "mini-flower-keychain",
    name: "Mini Flower Keychain", name_bn: "মিনি ফুলের কিচেইন",
    category: "flower", price: 150,
    images: ["images/products/mini-flower-keychain-1.svg", "images/products/mini-flower-keychain-2.svg"],
    description: "Tiny handmade flower keychain. Great as a return gift.",
    description_bn: "ছোট্ট হাতে তৈরি ফুলের কিচেইন, রিটার্ন গিফটের জন্য উপযুক্ত।",
    colors: ["Assorted"], in_stock: true, featured: false, added: "2026-09-15"
  },
  {
    slug: "winter-gift-combo",
    name: "Winter Gift Combo", name_bn: "শীতের গিফট কম্বো",
    category: "combo", price: 1100,
    images: ["images/products/winter-gift-combo-1.svg", "images/products/winter-gift-combo-2.svg"],
    description: "Muffler + tupi + 3 sota flowers, in a gift box with a card.",
    description_bn: "মাফলার + টুপি + ৩টি সুতার ফুল, গিফট বক্স ও কার্ডসহ।",
    colors: ["Maroon set", "Blue set", "Cream set"], in_stock: true, featured: true, added: "2026-11-05"
  }
];
