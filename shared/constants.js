// shared/constants.js


// ─── CONTACT ───────────────────────────────────────
export const PHONE = "+90 544 371 27 59";
export const WHATSAPP_NUMBER = "905443712759"; // başında + olmadan
export const EMAIL = "omerfaruk123yilmaz@gmail.com";
export const ADDRESS = "Bursa, Türkiye";
export const FORMID = "xdapnbnl"

// ─── CONTACT OBJESİ (bileşenlerde kullanım için) ────
export const CONTACT = {
  phone:     PHONE,
  email:     EMAIL,
  address:   ADDRESS,
  hours:     "Pzt–Cts 09:00–18:00",
  whatsapp:  `https://wa.me/${WHATSAPP_NUMBER}`,
  instagram: "https://instagram.com/_kodbase_",
  formId:    FORMID
};

// ─── WHATSAPP LINK ─────────────────────────────────
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// ─── BRAND ─────────────────────────────────────────
export const BRAND_NAME = "Revive";
export const BRAND_SUB = "Auto Lab"
export const BRAND_SLOGAN = "Aracınız, En İyi Haliyle.";
import LOGO from "../frontend/src/assets/logo.png"

// ─── BRAND OBJESİ (bileşenlerde kullanım için) ────
export const BRAND = {
  brand_name: BRAND_NAME,
  brand_sub: BRAND_SUB,
  brand_slogan: BRAND_SLOGAN,
  logo: LOGO
}

// ─── THEME ─────────────────────────────────────────
export const THEME = {
  colors: {
    primary:   "#1a1a1a",   // koyu siyah — ana renk
    secondary: "#C9A84C",   // altın sarısı — vurgu
    accent:    "#ffffff",   // beyaz
    muted:     "#6b7280",   // gri — yardımcı metin
    bg:        "#0f0f0f",   // sayfa arka plan
    surface:   "#1e1e1e",   // kart arka plan
  },
  font: {
    heading: "'Inter', sans-serif",
    body:    "'Inter', sans-serif",
  },
  radius: {
    sm: "6px",
    md: "12px",
    lg: "20px",
  },
};

// ─── PACKAGES ──────────────────────────────────────
export const PACKAGES = [
  {
    id:      "basic",
    key:     "basic",   // i18n key için
    price:   "₺500",
    popular: false,
  },
  {
    id:      "premium",
    key:     "premium",
    price:   "₺900",
    popular: true,
  },
  {
    id:      "elite",
    key:     "elite",
    price:   "₺1400",
    popular: false,
  },
];

// ─── NAV LINKS ─────────────────────────────────────
export const NAV_LINKS = [
  { key: "home",     path: "/" },
  { key: "services", path: "/services" },
  { key: "about",    path: "/about" },
  { key: "contact",  path: "/contact" },
];