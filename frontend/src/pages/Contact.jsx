// frontend/src/pages/Contact.jsx
import React from "react";
import SEO, { SEO_DATA } from "../seo/seo";
import { useLanguage }   from "../hooks/useLanguage";
import { i18n }          from "../../../shared/i18n";
import ContactSection    from "../components/sections/ContactSection";
import Container         from "../components/ui/Container";
import styles            from "../styles/PageHero.module.css";

export default function Contact() {
  const { lang } = useLanguage();
  const seo = SEO_DATA[lang].contact;
  const t   = i18n[lang].contact;

  return (
    <>
      <SEO title={seo.title} description={seo.description} lang={lang} />

      {/* ── Page Hero ── */}
      <section className={`${styles.pageHero} ${styles.compact}`}>
        <div className={styles.glow} />
        <Container>
          <div className={styles.content}>
            <div className={styles.tag}>
              <span className={styles.tagLine} />
              <span className={styles.tagText}>
                {lang === "tr" ? "Bize ulaşın" : "Get in touch"}
              </span>
            </div>
            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.subtitle}>{t.subtitle}</p>
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}