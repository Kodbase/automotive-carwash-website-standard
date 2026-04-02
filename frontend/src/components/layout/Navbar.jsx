// src/components/layout/Navbar.jsx
import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../../../shared/routes";
import { useLanguage } from "../../hooks/useLanguage";
import { i18n } from "../../../../shared/i18n";
import { BRAND } from "../../../../shared/constants";
import styles from "../../styles/Navbar.module.css";


export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen]           = useState(false);
  const { lang, setLang }                 = useLanguage();
  const location                          = useLocation();
  const t                                 = i18n[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const progress =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Route değişince menüyü kapat
  useEffect(() => setMenuOpen(false), [location]);

  const navLinks = [
    { path: ROUTES.home,     label: t.home     },
    { path: ROUTES.services, label: t.services },
    { path: ROUTES.about,    label: t.about    },
    { path: ROUTES.contact,  label: t.contact  },
  ];

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        style={{ "--scroll-progress": `${scrollProgress}%` }}
      >
        {/* Logo */}
        <Link to={ROUTES.home} className={styles.logo}>
          <div className={styles.logoIcon}>
            <span><img className={styles.logo} src={BRAND.logo} alt="logo" /></span>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoBrand}>{BRAND.brand_name}</span>
            <span className={styles.logoSub}>{BRAND.brand_sub}</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`${styles.navLink} ${location.pathname === path ? styles.active : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Cluster */}
        <div className={styles.navRight}>
          <div className={styles.langToggle}>
            {["tr", "en"].map((l) => (
              <button
                key={l}
                className={`${styles.langBtn} ${lang === l ? styles.langActive : ""}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <Link to={ROUTES.contact} className={styles.navCta}>
            <span>📞</span> {t.cta}
          </Link>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menü"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}>
        <ul>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={location.pathname === path ? styles.mobileActive : ""}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}