import React from "react";
import Carousel_Home from "../components/Home/Carousel";
import Quote from "../components/Home/Quote";
import Card1 from "../components/Home/Card1";
import ResponsiveExample from "../components/Home/Table";

const Home = () => {
  return (
    <div>
      <Carousel_Home />
      <Quote />
      <Card1 />
      <ResponsiveExample />
    </div>
  );
};

export default Home;
