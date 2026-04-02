// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./hooks/useLanguage";
import Layout from "./components/layout/Layout";
import { ROUTES } from "../../shared/routes";   

import Home     from "./pages/Home";
import Services from "./pages/Services";
import About    from "./pages/About";
import Contact  from "./pages/Contact";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.home}     element={<Home />}     />
            <Route path={ROUTES.services} element={<Services />} />
            <Route path={ROUTES.about}    element={<About />}    />
            <Route path={ROUTES.contact}  element={<Contact />}  />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}