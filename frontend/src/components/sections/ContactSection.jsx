// frontend/src/components/sections/ContactSection.jsx
import React from "react";
import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { i18n } from "../../../../shared/i18n";
import { CONTACT } from "../../../../shared/constants";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import styles from "../../styles/ContactSection.module.css";

export default function ContactSection() {
  const { lang } = useLanguage();
  const t = i18n[lang].contact;

  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
  
    try {
      const res = await fetch(`https://formspree.io/f/${CONTACT.formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
  
      if (res.ok) {
        setStatus('success');
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        console.log("bir sorun oluştu");
        
        setStatus('error');
        alert(t.form.error);
      }
    } catch {
      console.log("bağlantı hatası");
      
      setStatus('error');
      alert(t.form.error);
    }
  };



  const infoItems = [
    {
      icon:  "📍",
      label: t.info.address,
      value: CONTACT.address,
      sub:   null,
    },
    {
      icon:  "🕐",
      label: t.info.hours,
      value: t.info.hoursVal,
      sub:   t.info.hoursNote,
    },
    {
      icon:  "📞",
      label: lang === "tr" ? "Telefon" : "Phone",
      value: CONTACT.phone,
      sub:   null,
      href:  `tel:${CONTACT.phone}`,
    },
  ];

  return (
    <section className={styles.section}>
      <Container>

        <SectionTitle
          title={t.title}
          subtitle={t.subtitle}
          align="center"
        />

        <div className={styles.grid}>

          {/* ── Sol: Form ── */}
          <div className={styles.formBlock}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>

              <div className={styles.row}>
                {/* Ad */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">
                    {t.form.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="Ahmet Yılmaz"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={status === "sending" || status === "success"}
                  />
                </div>

                {/* Mail */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">
                    {t.form.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="tel"
                    className={styles.input}
                    placeholder="revive@mail.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={status === "sending" || status === "success"}
                  />
                </div>
              </div>

              {/* Mesaj */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder={t.form.messagePh}
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  disabled={status === "sending" || status === "success"}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`${styles.submitBtn} ${status === "sending" ? styles.sending : ""}`}
                disabled={status === "sending" || status === "success"}
              >
                {status === "sending" ? (
                  <>
                    <span className={styles.spinner} />
                    {t.form.sending}
                  </>
                ) : (
                  <>{t.form.send} →</>
                )}
              </button>

              {/* Feedback */}
              {status === "success" && (
                <div className={styles.feedbackSuccess}>
                  ✓ {t.form.success}
                </div>
              )}
              {status === "error" && (
                <div className={styles.feedbackError}>
                  ✕ {t.form.error}
                </div>
              )}

            </form>
          </div>

          {/* ── Sağ: Bilgiler ── */}
          <div className={styles.infoBlock}>

            {/* WhatsApp CTA */}
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <span className={styles.whatsappIcon}>💬</span>
              <div className={styles.whatsappText}>
                <span className={styles.whatsappLabel}>{t.whatsapp}</span>
                <span className={styles.whatsappSub}>
                  {lang === "tr" ? "Hızlı yanıt garantisi" : "Fast response guaranteed"}
                </span>
              </div>
              <span className={styles.whatsappArrow}>→</span>
            </a>

            {/* Info items */}
            <div className={styles.infoList}>
              {infoItems.map((item) => (
                <div key={item.label} className={styles.infoItem}>
                  <div className={styles.infoIcon}>{item.icon}</div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className={styles.infoValue}>
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.infoValue}>{item.value}</span>
                    )}
                    {item.sub && (
                      <span className={styles.infoSub}>{item.sub}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Harita placeholder */}
            <div className={styles.mapWrap}>
              <div className={styles.mapPlaceholder}>
                <span className={styles.mapPin}>📍</span>
                <span className={styles.mapLabel}>Bursa, Türkiye</span>
                <a
                  href="https://maps.google.com/?q=Bursa,Türkiye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLink}
                >
                  {lang === "tr" ? "Haritada Aç →" : "Open in Maps →"}
                </a>
              </div>
            </div>

            {/* Sosyal medya */}
            <div className={styles.social}>
              <span className={styles.socialLabel}>{t.info.follow}</span>
              <div className={styles.socialLinks}>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                >
                  Instagram
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                >
                  WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}