import React from 'react'

const SalesHero = () => {
  return (
    <>
      <section className="max-w-[2400px] mx-auto">
        {/* Hero section of Home page with background overlay and text  */}
        <div>
          <div className="relative">
            <div className=" absolute top-0 z-20 inset-0 w-full h-full bg-[#FF6347] opacity-15"></div>
            <img
              data-aos="fade-in"
              className="w-full h-[400px] md:h-[550px] object-fill md:object-cover"
              src="/assets/salesHero.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default SalesHero
