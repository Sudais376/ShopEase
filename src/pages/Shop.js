import React, {useEffect} from 'react'
import ShopHero from '../components/ShopHero'
import { Helmet } from 'react-helmet'

const Shop = () => {

  useEffect(() => {
    window.scrollTo (0,0);
  }, []);



  return (
    <>
    <Helmet>
      <title>Shop - Shop Ease</title>
    </Helmet>
    <ShopHero />
    </>
  )
}

export default Shop
