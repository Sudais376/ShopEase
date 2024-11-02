import React, { useEffect } from "react";
import HomeHero from "../components/HomeHero";
import CategoriesComponent from "../components/CategoriesComponent";
import SalesComponent from "../components/SalesComponent";
import Reviews from "../components/Reviews";
import ContactComp2 from "../components/ContactComp2";
import { Helmet } from "react-helmet";

const Home = () => {

  useEffect(() => {
    window.scrollTo (0,0);
  }, []);



  return (
    <>
    <Helmet>
      <title>Home - Shop Ease</title>
    </Helmet>
     <HomeHero />

     <CategoriesComponent />

     <SalesComponent />

     <Reviews />

     <ContactComp2 />
    </>
  );
};

export default Home;
