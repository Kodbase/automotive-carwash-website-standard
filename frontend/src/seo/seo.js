// frontend/src/seo/seo.js
import { useEffect } from "react";

export default function SEO({ title, description, lang = "tr" }) {
  useEffect(() => {
    // Title
    document.title = `${title} | AutoShine`;

    // Description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Lang
    document.documentElement.lang = lang;
  }, [title, description, lang]);

  return null;
}

// ── SEO verileri — her sayfa için ──
export const SEO_DATA = {
  tr: {
    home: {
      title:       "Ana Sayfa",
      description: "Bursa'nın profesyonel araç detailing ve yıkama merkezi. Seramik kaplama, boya koruma ve daha fazlası.",
    },
    services: {
      title:       "Hizmetler",
      description: "Dış yıkama, iç temizlik, boya koruma, seramik kaplama, cam filmi ve motor temizliği hizmetlerimiz.",
    },
    about: {
      title:       "Hakkımızda",
      description: "AutoShine olarak 3+ yıldır Bursa'da profesyonel araç detailing hizmeti sunuyoruz.",
    },
    contact: {
      title:       "İletişim",
      description: "Randevu almak için bize ulaşın. WhatsApp, telefon veya form ile iletişime geçebilirsiniz.",
    },
  },
  en: {
    home: {
      title:       "Home",
      description: "Bursa's professional car detailing and wash center. Ceramic coating, paint protection and more.",
    },
    services: {
      title:       "Services",
      description: "Exterior wash, interior clean, paint protection, ceramic coating, window film and engine cleaning.",
    },
    about: {
      title:       "About Us",
      description: "AutoShine has been providing professional car detailing in Bursa for 3+ years.",
    },
    contact: {
      title:       "Contact",
      description: "Get in touch to book an appointment via WhatsApp, phone or contact form.",
    },
  },
};