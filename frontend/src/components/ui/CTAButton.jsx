// frontend/src/components/ui/CTAButton.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CONTACT } from "../../../../shared/constants";
import styles from "../../styles/CTAButton.module.css";

export default function CTAButton({
  variant = "primary",  // "primary" | "whatsapp" | "outline" | "ghost"
  href,
  to,
  onClick,
  children,
  className = "",
  size = "md",          // "sm" | "md" | "lg"
}) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(" ");

  const resolvedHref = href ?? (variant === "whatsapp" ? CONTACT.whatsapp : undefined);

  if (to) {
    return <Link to={to} className={cls}>{children}</Link>;
  }

  if (resolvedHref) {
    return (
      <a href={resolvedHref} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}