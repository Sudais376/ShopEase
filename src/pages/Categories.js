import React, {useEffect} from 'react'
import CategoriesHero from '../components/CategoriesHero'
import CategoriesComponent from '../components/CategoriesComponent'
import { Helmet } from 'react-helmet'
import SalesComponent from '../components/SalesComponent'

const Categories = () => {

  useEffect(() => {
    window.scrollTo (0,0);
  }, []);


  
  return (
    <>
    <Helmet>
      <title>Categories - Shop Ease</title>
    </Helmet>

    <CategoriesHero />

    <CategoriesComponent />

    <SalesComponent />
    </>
  )
}

export default Categories
