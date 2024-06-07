import React from "react";
import CarouselHome from "../components/Home/Carousel";
import Quote from "../components/Home/Quote";
import Card1 from "../components/Home/Card1";
import ResponsiveExample from "../components/Home/Table";

const Home = () => {
  return (
    <div>
      <Card1 />
      <ResponsiveExample />
      <CarouselHome />
      <Quote />
    </div>
  );
};

export default Home;
