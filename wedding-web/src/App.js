import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import React, { useState } from "react";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./data/InfoData";
import Email from "./components/Email";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  /* const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n. changeLanguage(lang);
  }*/
  return (
    <Router>
      {/*  <p>{t("Thanks.1")}</p>
      <p>{t("Why.1")}</p>
      <nav
        style={{ width: "100%", padding: "2rem 0", backgroundColor: "gray" }}
      >
        <button onClick={() => handleClick("en")}>English</button>
        <button onClick={() => handleClick("hu")}>Hungary</button>
      </nav> */}
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Pricing />
      <Email />
      <Footer />
    </Router>
  );
}

export default App;
