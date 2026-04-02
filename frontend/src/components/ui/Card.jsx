// frontend/src/components/ui/Card.jsx
import React from "react";
import styles from "../../styles/Card.module.css";

export default function Card({
  children,
  className = "",
  hover = true,
  gold = false,
}) {
  return (
    <div
      className={[
        styles.card,
        hover ? styles.hover : "",
        gold  ? styles.gold  : "",
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}