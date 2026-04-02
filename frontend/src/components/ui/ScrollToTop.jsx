import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Sayfa geçişlerinde kaydırma işlemi yapmak için ScrollToTop bileşeni
export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Her sayfa değişiminde scroll pozisyonunu en üste alır
    window.scrollTo(0, 0);
  }, [location]); // location değiştiğinde bu effect çalışır

  return null; // Bu bileşenin UI'da hiçbir şey render etmesine gerek yok
}