// src/components/layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../shared/routes";
import { useLanguage } from "../../hooks/useLanguage";
import { i18n } from "../../../../shared/i18n";
import { CONTACT, BRAND } from "../../../../shared/constants";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  const { lang } = useLanguage();
  const t = i18n[lang].footer;

  const socialLinks = [
    { label: "ig", href: CONTACT.instagram },
    { label: "wa", href: CONTACT.whatsapp  },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link to={ROUTES.home} className={styles.logo}>
            <div className={styles.logoIcon}><span><img className={styles.logo} src={BRAND.logo} alt="logo" /></span></div>
            <div className={styles.logoText}>
              <span className={styles.logoBrand}>{BRAND.brand_name}</span>
              <span className={styles.logoSub}>{BRAND.brand_sub}</span>
            </div>
          </Link>
          <p>{t.description}</p>
          <div className={styles.socialRow}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={styles.socialBtn}
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Pages */}
        <div className={styles.col}>
          <h4>{t.pages}</h4>
          <ul>
            <li><Link to={ROUTES.home}>{i18n[lang].nav.home}</Link></li>
            <li><Link to={ROUTES.services}>{i18n[lang].nav.services}</Link></li>
            <li><Link to={ROUTES.about}>{i18n[lang].nav.about}</Link></li>
            <li><Link to={ROUTES.contact}>{i18n[lang].nav.contact}</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4>{t.servicesTitle}</h4>
          <ul>
            {t.servicesList.map((s) => (
              <li key={s}><Link to={ROUTES.services}>{s}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4>{t.contact}</h4>
          <div className={styles.contactItem}><span>📍</span><span>{CONTACT.address}</span></div>
          <div className={styles.contactItem}><span>📞</span><span>{CONTACT.phone}</span></div>
          <div className={styles.contactItem}><span>🕐</span><span>{CONTACT.hours}</span></div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} AutoShine. {t.rights}</span>
        <span>Made with ♥ in Bursa</span>
      </div>
    </footer>
  );
}