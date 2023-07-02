import React from "react";
import Notification from "./components/Notification/Notification";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import CompanyList from "./components/CompanyList/CompanyList";
import Features from "./components/Features/Features";
import FeatureOverview from "./components/FeatureOverview/FeatureOverview";
import Reviews from "./components/Reviews/Reviews";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";
import "./index.css";
const App = () => {
  return (
    <div>
      <Notification />
      <NavBar />
      <Hero />
      <CompanyList />
      <Features />
      <FeatureOverview />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;
