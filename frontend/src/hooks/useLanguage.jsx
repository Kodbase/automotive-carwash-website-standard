// src/hooks/useLanguage.js
import React from "react";
import { useState, useEffect, createContext, useContext } from "react";

// ─── Context ────────────────────────────────────────
const LanguageContext = createContext(null);

// ─── Provider ───────────────────────────────────────
export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "tr" || stored === "en") return stored;
    } catch (_) {}
    // Tarayıcı diline göre varsayılan
    return navigator.language?.startsWith("tr") ? "tr" : "en";
  });

  // Dil değişince localStorage'a yaz
  const setLang = (newLang) => {
    if (newLang !== "tr" && newLang !== "en") return;
    setLangState(newLang);
    try { localStorage.setItem("lang", newLang); } catch (_) {}
  };

  // <html lang="..."> güncelle (SEO + erişilebilirlik)
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ─── Hook ───────────────────────────────────────────
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}