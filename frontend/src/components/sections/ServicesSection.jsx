// frontend/src/components/sections/ServicesSection.jsx
import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { i18n } from "../../../../shared/i18n";
import { ROUTES } from "../../../../shared/routes";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import CTAButton from "../ui/CTAButton";
import styles from "../../styles/ServicesSection.module.css";

export default function ServicesSection() {
  const { lang } = useLanguage();
  const t = i18n[lang].services;

  const [first, second, ...rest] = t.list;
  const lastItem = rest[rest.length - 1];
  const middleItems = rest.slice(0, rest.length - 1);

  return (
    <section className={styles.section}>
      <Container>

        <SectionTitle
          title={t.title}
          subtitle={t.subtitle}
          align="center"
        />

        {/* ── Row 1: 2 büyük kart ── */}
        <div className={styles.rowTop}>
          {[first, second].map((service) => (
            <ServiceCard key={service.id} service={service} size="large" lang={lang} />
          ))}
        </div>

        {/* ── Row 2: 3 orta kart ── */}
        <div className={styles.rowMiddle}>
          {middleItems.map((service) => (
            <ServiceCard key={service.id} service={service} size="medium" lang={lang} />
          ))}
        </div>

        {/* ── Row 3: 1 geniş kart ── */}
        <div className={styles.rowBottom}>
          <ServiceCard service={lastItem} size="wide" lang={lang} />
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <CTAButton variant="outline" size="lg" to={ROUTES.services}>
            {lang === "tr" ? "Tüm Hizmetleri Gör →" : "View All Services →"}
          </CTAButton>
        </div>

      </Container>
    </section>
  );
}

function ServiceCard({ service, size, lang }) {
  return (
    <div className={`${styles.card} ${styles[size]}`}>

      {/* Tag */}
      <span className={styles.tag}>{service.tag}</span>

      {/* Icon */}
      <div className={styles.iconWrap}>
        <span className={styles.icon}>{service.icon}</span>
        <div className={styles.iconGlow} />
      </div>

      {/* Text */}
      <div className={styles.text}>
        <h3 className={styles.name}>{service.name}</h3>
        <p className={styles.desc}>{service.description}</p>
      </div>

      {/* Arrow */}
      <div className={styles.arrow}>→</div>

      {/* Hover border glow */}
      <div className={styles.cardGlow} />
    </div>
  );
}