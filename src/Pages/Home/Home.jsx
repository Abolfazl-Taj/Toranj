import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Download from "../../Components/Download/Download";
import Prodouct from "../../Components/Prodouct/Prodouct";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
  return (
    <div className="Home_Page">
      <Navbar />
      <Hero />
      <Download />
      <Prodouct />
      <Contact/>
    </div>
  );
};

export default Home;
