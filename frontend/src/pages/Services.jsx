// frontend/src/pages/Services.jsx
import React from "react";
import SEO, { SEO_DATA }  from "../seo/seo";
import { useLanguage }    from "../hooks/useLanguage";
import { i18n }           from "../../../shared/i18n";
import { CONTACT }        from "../../../shared/constants";
import ServicesSection    from "../components/sections/ServicesSection";
import PricingSection     from "../components/sections/PricingSection";
import ContactSection     from "../components/sections/ContactSection";
import Container          from "../components/ui/Container";
import CTAButton          from "../components/ui/CTAButton";
import styles             from "../styles/PageHero.module.css";

export default function Services() {
  const { lang } = useLanguage();
  const seo = SEO_DATA[lang].services;
  const t   = i18n[lang];

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
              <span className={styles.tagText}>
                {lang === "tr" ? "Ne yapıyoruz?" : "What we do"}
              </span>
            </div>
            <h1 className={styles.title}>{t.services.title}</h1>
            <p className={styles.subtitle}>{t.services.subtitle}</p>
            <CTAButton variant="primary" size="lg" href={CONTACT.whatsapp}>
              💬 {lang === "tr" ? "Randevu Al" : "Book Now"}
            </CTAButton>
          </div>
        </Container>
      </section>

      <ServicesSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}