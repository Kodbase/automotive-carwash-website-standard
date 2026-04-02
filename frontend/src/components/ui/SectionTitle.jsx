// frontend/src/components/ui/SectionTitle.jsx
import React from "react";
import styles from "../../styles/SectionTitle.module.css";

export default function SectionTitle({
  title,
  subtitle,
  align = "center",  // "center" | "left"
  gold = false,
}) {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      <h2 className={`${styles.title} ${gold ? styles.gold : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={styles.subtitle}>{subtitle}</p>
      )}
    </div>
  );
}