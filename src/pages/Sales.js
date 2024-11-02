import React, {useEffect} from 'react'
import SalesHero from '../components/SalesHero'
import SalesComponent from '../components/SalesComponent'
import { Helmet } from 'react-helmet'
import Reviews from '../components/Reviews'

const Sales = () => {

  useEffect(() => {
    window.scrollTo (0,0);
  }, []);


  return (
    <>
    <Helmet>
      <title>Sales - Shop Ease</title>
    </Helmet>
    <SalesHero />

    <SalesComponent />

    <Reviews />
    </>
  )
}

export default Sales
