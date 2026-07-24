import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/heroSection/HeroSection";
import { useState } from "react";

export default function MainLayOut() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Header />
      <HeroSection setSearch={setSearch} />
      <Outlet context={{ search }} />
      <Footer />
    </div>
  );
}
