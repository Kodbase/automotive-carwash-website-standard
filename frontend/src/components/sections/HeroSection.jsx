// frontend/src/components/sections/HeroSection.jsx
import React from "react";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { i18n } from "../../../../shared/i18n";
import { CONTACT } from "../../../../shared/constants";
import CTAButton from "../ui/CTAButton";
import Container from "../ui/Container";
import imgHero from "../../assets/hero.jpg"
import styles from "../../styles/HeroSection.module.css";

export default function HeroSection() {
  const { lang } = useLanguage();
  const t = i18n[lang].hero;
  const grainRef = useRef(null);

  // Animated grain canvas
  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const draw = () => {
      const W = (canvas.width  = canvas.offsetWidth);
      const H = (canvas.height = canvas.offsetHeight);
      const img = ctx.createImageData(W, H);
      for (let i = 0; i < img.data.length; i += 4) {
        const v = Math.random() * 255;
        img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
        img.data[i + 3] = 14;
      }
      ctx.putImageData(img, 0, 0);
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  const stats = lang === "tr"
    ? [
        { value: "500+", label: "Mutlu Müşteri" },
        { value: "5★",   label: "Ortalama Puan" },
        { value: "3+",   label: "Yıllık Deneyim" },
      ]
    : [
        { value: "500+", label: "Happy Clients"   },
        { value: "5★",   label: "Average Rating"  },
        { value: "3+",   label: "Years Experience" },
      ];

  return (
    <section className={styles.hero}>
      {/* Grain */}
      <canvas ref={grainRef} className={styles.grain} />

      {/* Arka plan ışıkları */}
      <div className={styles.glowLeft}  />
      <div className={styles.glowRight} />

      {/* Sol dikey çizgi */}
      <div className={styles.borderLine} />

      <Container>
        <div className={styles.grid}>

          {/* ── SOL ── */}
          <div className={styles.content}>

            {/* Üst etiket */}
            <div className={styles.tag}>
              <span className={styles.tagLine} />
              <span className={styles.tagText}>
                {lang === "tr" ? "Profesyonel Detailing" : "Professional Detailing"}
              </span>
            </div>

            {/* Başlık */}
            <h1 className={styles.title}>
              {lang === "tr" ? (
                <>
                  Aracınız,{" "}
                  <span className={styles.titleGold}>En İyi</span>
                  <br />Haliyle.
                </>
              ) : (
                <>
                  Your Car,{" "}
                  <span className={styles.titleGold}>At Its</span>
                  <br />Best.
                </>
              )}
            </h1>

            {/* Alt başlık */}
            <p className={styles.subtitle}>{t.subtitle}</p>

            {/* CTA'lar */}
            <div className={styles.ctas}>
              <CTAButton variant="primary" size="lg" href={CONTACT.whatsapp}>
                <span>💬</span> {t.cta}
              </CTAButton>
              <CTAButton variant="ghost" size="lg" href={`tel:${CONTACT.phone}`}>
                <span>📞</span> {lang === "tr" ? "Hemen Ara" : "Call Now"}
              </CTAButton>
            </div>

            {/* İstatistikler */}
            <div className={styles.stats}>
              {stats.map((s, i) => (
                <div key={i} className={styles.statGroup}>
                  {i !== 0 && <div className={styles.statDivider} />}
                  <div className={styles.stat}>
                    <span className={styles.statValue}>{s.value}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SAĞ ── */}
          <div className={styles.visual}>

            {/* Dönen halka */}
            <div className={styles.ringOuter}>
              <div className={styles.ringInner} />
            </div>

            {/* Araç placeholder kartı */}
            <div className={styles.carCard}>
              <div className={styles.carEmoji}><img style={{borderRadius: "16px"}} src={imgHero} alt="Araba" /></div>
              <div className={styles.carCardBadge}>
                <span>✦</span>
                {lang === "tr" ? "Detailing Pro" : "Pro Detail"}
              </div>
            </div>

            {/* Floating badge — üst sağ */}
            <div className={`${styles.badge} ${styles.badgeTop}`}>
              <span className={styles.badgeDot} />
              {lang === "tr" ? "Randevu Müsait" : "Available Now"}
            </div>

            {/* Floating badge — alt sol */}
            <div className={`${styles.badge} ${styles.badgeBottom}`}>
              ⭐ 5.0 / {lang === "tr" ? "500 Yorum" : "500 Reviews"}
            </div>

          </div>
        </div>
      </Container>

      {/* Aşağı ok */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
}