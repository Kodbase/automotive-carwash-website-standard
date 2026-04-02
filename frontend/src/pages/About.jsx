// frontend/src/pages/About.jsx
import React from "react";
import SEO, { SEO_DATA } from "../seo/seo";
import { useLanguage }   from "../hooks/useLanguage";
import { i18n }          from "../../../shared/i18n";
import { CONTACT, BRAND_NAME, BRAND_SLOGAN } from "../../../shared/constants";
import TrustSection      from "../components/sections/TrustSection";
import ContactSection    from "../components/sections/ContactSection";
import Container         from "../components/ui/Container";
import CTAButton         from "../components/ui/CTAButton";
import styles            from "../styles/PageHero.module.css";
import aboutStyles       from "../styles/About.module.css";

const ABOUT_CONTENT = {
  tr: {
    tag:      "Biz kimiz?",
    title:    "Aracınıza Saygı,\nİşimize Tutku.",
    subtitle: "AutoShine olarak her aracı bir sanat eseri gibi ele alıyoruz. 3+ yıllık deneyimle Bursa'nın en güvenilir detailing merkezi olmayı sürdürüyoruz.",
    story: {
      title: "Hikayemiz",
      body:  "2021 yılında küçük bir garajda başladık. Amacımız tek bir araçtan fazlası değildi — onu mükemmel hale getirmek. Bugün 500'den fazla mutlu müşteri ve onlarca tamamlanmış projemizle Bursa'nın önde gelen detailing merkezi haline geldik.",
    },
    mission: {
      title: "Misyonumuz",
      body:  "Her müşterinin aracına kendi arabamız gibi bakmak. Ürün seçiminden uygulamaya kadar her adımda en yüksek standartı korumak.",
    },
    values: [
      { icon: "🎯", title: "Titizlik",    desc: "Her detayı önemsiyoruz." },
      { icon: "🛡️", title: "Güvenilirlik", desc: "Söz verdiğimizi yapıyoruz." },
      { icon: "✨", title: "Kalite",       desc: "Premium ürün, uzman uygulama." },
      { icon: "🤝", title: "Saydamlık",   desc: "Fiyat sürprizimiz yok." },
    ],
    ctaLabel: "Randevu Al",
  },
  en: {
    tag:      "Who are we?",
    title:    "Respect for Your Car,\nPassion for Our Work.",
    subtitle: "At AutoShine, we treat every vehicle like a work of art. With 3+ years of experience, we continue to be Bursa's most trusted detailing center.",
    story: {
      title: "Our Story",
      body:  "We started in a small garage in 2021 with a single goal — to make one car perfect. Today, with 500+ happy customers and dozens of completed projects, we've become Bursa's leading detailing center.",
    },
    mission: {
      title: "Our Mission",
      body:  "To treat every customer's vehicle as if it were our own. To maintain the highest standards at every step, from product selection to application.",
    },
    values: [
      { icon: "🎯", title: "Precision",     desc: "Every detail matters to us." },
      { icon: "🛡️", title: "Reliability",   desc: "We deliver on our promises." },
      { icon: "✨", title: "Quality",        desc: "Premium products, expert hands." },
      { icon: "🤝", title: "Transparency",  desc: "No surprise pricing." },
    ],
    ctaLabel: "Book Now",
  },
};

export default function About() {
  const { lang } = useLanguage();
  const seo = SEO_DATA[lang].about;
  const t   = ABOUT_CONTENT[lang];

  return (
    <>
      <SEO title={seo.title} description={seo.description} lang={lang} />

      {/* ── Page Hero ── */}
      <section className={styles.pageHero}>
        <div className={styles.glow} />
        <Container>
          <div className={styles.content}>
            <div className={styles.tag}>
              <span className={styles.tagLine} />
              <span className={styles.tagText}>{t.tag}</span>
            </div>
            <h1 className={`${styles.title} ${aboutStyles.multilineTitle}`}>
              {t.title.split("\n").map((line, i) => (
                <span key={i}>
                  {i === 0 ? line : <><br /><span className={styles.titleGold}>{line}</span></>}
                </span>
              ))}
            </h1>
            <p className={styles.subtitle}>{t.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* ── Story & Mission ── */}
      <section className={aboutStyles.section}>
        <Container>
          <div className={aboutStyles.storyGrid}>

            <div className={aboutStyles.storyCard}>
              <h2 className={aboutStyles.cardTitle}>{t.story.title}</h2>
              <p className={aboutStyles.cardBody}>{t.story.body}</p>
            </div>

            <div className={aboutStyles.storyCard}>
              <h2 className={aboutStyles.cardTitle}>{t.mission.title}</h2>
              <p className={aboutStyles.cardBody}>{t.mission.body}</p>
            </div>

          </div>

          {/* Values */}
          <div className={aboutStyles.valuesGrid}>
            {t.values.map((v) => (
              <div key={v.title} className={aboutStyles.valueCard}>
                <span className={aboutStyles.valueIcon}>{v.icon}</span>
                <h3 className={aboutStyles.valueTitle}>{v.title}</h3>
                <p className={aboutStyles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>

          <div className={aboutStyles.cta}>
            <CTAButton variant="primary" size="lg" href={CONTACT.whatsapp}>
              💬 {t.ctaLabel}
            </CTAButton>
          </div>

        </Container>
      </section>

      <TrustSection />
      <ContactSection />
    </>
  );
}