import { Outlet, useLocation } from "react-router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/heroSection/HeroSection";
import { useState } from "react";

export default function MainLayOut() {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const isHomeAndShop =
    location.pathname === "/" || location.pathname === "/shop";
  const isAboutUs = location.pathname === "/about";
  return (
    <div>
      <Header />
      <HeroSection
        setSearch={setSearch}
        isHomeAndShop={isHomeAndShop}
        isAboutUs={isAboutUs}
      />
      <Outlet context={{ search }} />
      <Footer />
    </div>
  );
}
