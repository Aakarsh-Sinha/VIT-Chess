import React from "react";
import Carousel_Home from "../components/Home/Carousel";
import Quote from "../components/Home/Quote";
import Card1 from "../components/Home/Card1";
import ResponsiveExample from "../components/Home/Table";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <div>
      <Card1 />
      <ResponsiveExample />
      <Carousel_Home />
      <Quote />
    </div>
  );
};

export default Home;
