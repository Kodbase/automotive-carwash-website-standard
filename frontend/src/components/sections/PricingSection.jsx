// frontend/src/components/sections/PricingSection.jsx
import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { i18n } from "../../../../shared/i18n";
import { CONTACT } from "../../../../shared/constants";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import styles from "../../styles/PricingSection.module.css";

export default function PricingSection() {
  const { lang } = useLanguage();
  const t = i18n[lang].pricing;

  const waMessage = (pkgName) => {
    const msg = lang === "tr"
      ? `Merhaba! ${pkgName} paketi hakkında bilgi almak istiyorum.`
      : `Hello! I'd like to get information about the ${pkgName} package.`;
    return `${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className={styles.section}>
      <Container>

        <SectionTitle
          title={t.title}
          subtitle={t.subtitle}
          align="center"
        />

        {/* ── Kartlar ── */}
        <div className={styles.grid}>
          {t.packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`${styles.card} ${pkg.popular ? styles.popular : ""}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className={styles.popularBadge}>
                  <span>✦</span> {t.popular}
                </div>
              )}

              {/* Header */}
              <div className={styles.cardHeader}>
                <h3 className={styles.pkgName}>{pkg.name}</h3>
                <p className={styles.pkgDesc}>{pkg.desc}</p>
              </div>

              {/* Fiyat */}
              <div className={styles.priceWrap}>
                <span className={styles.price}>{pkg.price}</span>
                <span className={styles.pricePer}>
                  {lang === "tr" ? "/ araç" : "/ vehicle"}
                </span>
              </div>

              {/* Divider */}
              <div className={styles.divider} />

              {/* Feature list */}
              <ul className={styles.features}>
                {pkg.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
                {pkg.excluded.map((f) => (
                  <li key={f} className={`${styles.featureItem} ${styles.excluded}`}>
                    <span className={styles.cross}>✕</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={waMessage(pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cta} ${pkg.popular ? styles.ctaPopular : ""}`}
              >
                <span>💬</span> {t.cta}
              </a>

              {/* Glow */}
              {pkg.popular && <div className={styles.cardGlow} />}
            </div>
          ))}
        </div>

        {/* Not */}
        <p className={styles.note}>{t.note}</p>

      </Container>
    </section>
  );
}