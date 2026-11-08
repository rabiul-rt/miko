# Floral Craft — Static Website

Handmade mufflers, tupis, dresses and sota flowers. Plain HTML + CSS + JavaScript, no build step, no backend.
Orders are collected through a Google Form (pre-filled per product) or WhatsApp.

## Run it locally

Just double-click `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Files

```
floral-craft/
├── index.html          Home
├── shop.html           All products (category tabs, search, sort)
├── product.html        Product detail (reads ?slug=...)
├── about.html
├── contact.html        Contact info + Google Form embed
├── faq.html            Accordion FAQ
├── how-to-order.html   4-step guide + Google Form embed
├── css/style.css       All styles (colors are CSS variables at the top)
├── js/config.js        ★ Your Google Form ID, WhatsApp, email, socials
├── js/products.js      ★ All product data
├── js/main.js          Header, footer, WhatsApp button, shop filter, product page
├── images/             Placeholder SVGs (replace with real photos)
├── robots.txt, netlify.toml
```

## Setup checklist

1. **Edit `js/config.js`**
   - `formId`: the long ID in your Google Form link (`.../forms/d/e/<FORM_ID>/viewform`)
   - `entryProduct`, `entryPrice`, `entryColor`, `entryQty`: get these from
     Form → ⋮ → "Get pre-filled link", fill sample values, copy the link, and read the `entry.XXXX` numbers.
   - `whatsapp`: `8801XXXXXXXXX` (country code + number, no `+`)
   - email, phone, Facebook / Instagram / TikTok links
2. **Add real photos.** Put images in `images/products/` and update the `images` array of each product in `js/products.js`.
   Square images (e.g. 800x800 JPG/WebP) look best. Replace `images/hero.svg`, `images/about.svg` and `images/instagram-*.svg` too.
3. **Edit products** in `js/products.js` (name, name_bn, category, price, colors, featured, added date).
   Categories: `muffler`, `tupi`, `dress`, `flower`, `combo`.
4. **Google Form fields** (suggested): Name, Phone (WhatsApp), Full address, Product (dropdown), Quantity,
   Color/Size, Customization, Payment method (bKash / Nagad / COD), Transaction ID, Special instructions.
   Confirmation message: "ধন্যবাদ! আমরা ২৪ ঘণ্টার মধ্যে WhatsApp এ যোগাযোগ করব। 🧵🌸"
5. Turn on response notifications: Form → Responses → Link to Sheets, and enable email notifications.

## Deploy to Netlify (free)

1. Go to https://app.netlify.com/drop
2. Drag the whole `floral-craft` folder onto the page.
3. Done. Add your custom domain (e.g. `floralcraft.bd`) in Site settings → Domain management.

Vercel / GitHub Pages / any static host also works: upload the folder as is.

## Notes

- Product pages are one template: `product.html?slug=blue-wool-muffler`.
- Google Fonts (Playfair Display, Poppins, Hind Siliguri) load from the internet; the site falls back to system fonts offline.
- To add Google Analytics or Facebook Pixel, paste their snippets inside `<head>` of each HTML file.
