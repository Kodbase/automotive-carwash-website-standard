// frontend/src/pages/Home.jsx
import React from "react";
import SEO, { SEO_DATA } from "../seo/seo";
import { useLanguage } from "../hooks/useLanguage";
import HeroSection     from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import TrustSection    from "../components/sections/TrustSection";
import PricingSection  from "../components/sections/PricingSection";
import ContactSection  from "../components/sections/ContactSection";

export default function Home() {
  const { lang } = useLanguage();
  const seo = SEO_DATA[lang].home;

  return (
    <>
      <SEO title={seo.title} description={seo.description} lang={lang} />
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}