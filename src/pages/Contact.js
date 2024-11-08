import React, { useEffect } from "react";
import ContactHero from "../components/ContactHero";
import ContactComp2 from "../components/ContactComp2";
import SalesComponent from "../components/SalesComponent";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact - Shop Ease</title>
      </Helmet>

      <ContactHero />

      <ContactComp2 />

      <SalesComponent />
    </>
  );
};

export default Contact;
