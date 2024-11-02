import React, {useEffect} from 'react'
import AboutHero from '../components/AboutHero'
import AboutComponent from '../components/AboutComponent';
import SalesComponent from '../components/SalesComponent';
import { Helmet } from 'react-helmet'

const About = () => {

  useEffect(() => {
    window.scrollTo (0,0);
  }, []);


  
  return (
    <>
    <Helmet>
      <title>About - Shop Ease</title>
    </Helmet>

    <AboutHero />

    <AboutComponent />

    <SalesComponent />
    </>
  )
}

export default About
