import React, { useEffect } from "react";
import HomeHero from "../components/HomeHero";
import Categories from "../components/Categories";
import Sales from "../components/Sales";
import Reviews from "../components/Reviews";

const Home = () => {

  useEffect(() => {
    window.scrollTo (0,0);
  }, []);
  return (
    <>
     <HomeHero />

     <Categories />

     <Sales />

     <Reviews />
    </>
  );
};

export default Home;
