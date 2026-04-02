// frontend/src/components/sections/TrustSection.jsx
import React from "react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { i18n } from "../../../../shared/i18n";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import styles from "../../styles/TrustSection.module.css";
import imgCarBefore from "../../assets/car-before.png"
import imgCarAfter from "../../assets/car-after.jpg"


export default function TrustSection() {
  const { lang } = useLanguage();
  const t = i18n[lang].trust;
  const [activeReview, setActiveReview] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  // Auto-rotate reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % t.reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [t.reviews.length]);

  // Before/After slider
  const handleMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const pos = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 5), 95);
    setSliderPos(pos);
  };

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseMove = (e) => { if (isDragging.current) handleMove(e.clientX); };
  const onMouseUp   = () => { isDragging.current = false; };
  const onTouchMove = (e) => { handleMove(e.touches[0].clientX); };

  return (
    <section className={styles.section}>
      <Container>

        <SectionTitle
          title={t.title}
          subtitle={t.subtitle}
          align="center"
        />

        {/* ── İstatistikler ── */}
        <div className={styles.stats}>
          {t.stats.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
              {i < t.stats.length - 1 && <div className={styles.statDivider} />}
            </div>
          ))}
        </div>

        {/* ── Alt blok: Yorumlar + Önce/Sonra ── */}
        <div className={styles.grid}>

          {/* ── Sol: Yorumlar ── */}
          <div className={styles.reviewsBlock}>

            {/* Aktif yorum */}
            <div className={styles.reviewCard}>
              <div className={styles.reviewQuote}>"</div>
              <p className={styles.reviewText}>
                {t.reviews[activeReview].text}
              </p>
              <div className={styles.reviewFooter}>
                <div className={styles.reviewAvatar}>
                  {t.reviews[activeReview].name.charAt(0)}
                </div>
                <div className={styles.reviewMeta}>
                  <span className={styles.reviewName}>
                    {t.reviews[activeReview].name}
                  </span>
                  <span className={styles.reviewService}>
                    {t.reviews[activeReview].service} · {t.reviews[activeReview].date}
                  </span>
                </div>
                <div className={styles.reviewStars}>
                  {"★".repeat(t.reviews[activeReview].rating)}
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className={styles.dots}>
              {t.reviews.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === activeReview ? styles.dotActive : ""}`}
                  onClick={() => setActiveReview(i)}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            {/* Küçük review önizlemeler */}
            <div className={styles.reviewList}>
              {t.reviews.map((review, i) => (
                <button
                  key={review.id}
                  className={`${styles.reviewThumb} ${i === activeReview ? styles.reviewThumbActive : ""}`}
                  onClick={() => setActiveReview(i)}
                >
                  <div className={styles.thumbAvatar}>{review.name.charAt(0)}</div>
                  <div className={styles.thumbMeta}>
                    <span className={styles.thumbName}>{review.name}</span>
                    <span className={styles.thumbService}>{review.service}</span>
                  </div>
                  <span className={styles.thumbStars}>★★★★★</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Sağ: Önce / Sonra slider ── */}
          <div className={styles.beforeAfterBlock}>
            <div className={styles.baHeader}>
              <h3 className={styles.baTitle}>{t.beforeAfterTitle}</h3>
              <p className={styles.baSub}>{t.beforeAfterSub}</p>
            </div>

            <div
              ref={sliderRef}
              className={styles.sliderWrap}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              onTouchMove={onTouchMove}
            >
              {/* AFTER (arka plan) */}
              <div className={styles.afterPane}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.placeholderEmoji}>
                    <img src={imgCarAfter} alt="dirty car" />
                  </span>
                  <span className={styles.placeholderLabel}>{t.after}</span>
                </div>
              </div>

              {/* BEFORE (üst katman, clip) */}
              <div
                className={styles.beforePane}
                style={{ width: `${sliderPos}%` }}
              >
                <div className={styles.imagePlaceholder} style={{ width: `${(1 / (sliderPos / 100)) * 100}%` }}>
                  <span className={styles.placeholderEmoji}>
                    <img src={imgCarBefore} alt="clean car" />
                  </span>
                  <span className={styles.placeholderLabel}>{t.before}</span>
                </div>
              </div>

              {/* Slider handle */}
              <div
                className={styles.handle}
                style={{ left: `${sliderPos}%` }}
              >
                <div className={styles.handleLine} />
                <div className={styles.handleKnob}>
                  <span>◀</span>
                  <span>▶</span>
                </div>
              </div>

              {/* Label'lar */}
              <span className={styles.labelBefore}>{t.before}</span>
              <span className={styles.labelAfter}>{t.after}</span>
            </div>

            <p className={styles.sliderHint}>
              {lang === "tr" ? "← Kaydırarak karşılaştır →" : "← Drag to compare →"}
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}