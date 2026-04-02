// frontend/src/components/ui/Container.jsx
import React from "react";
import styles from "../../styles/Container.module.css";

export default function Container({
  children,
  className = "",
  size = "default",  // "narrow" | "default" | "wide"
}) {
  return (
    <div className={[styles.container, styles[size], className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}