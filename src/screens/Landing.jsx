import React from "react";
// // Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Schemes from "../components/Sections/Scheme";
import Blog from "../components/Sections/Blog";
import Team from "../components/Sections/Team";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
// import Login from "../components/Sections/Login"
export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Schemes />
      <Blog />
      <Team />
      <Contact />
      <Footer />
      </>
  );
}
