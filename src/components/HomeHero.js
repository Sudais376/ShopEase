import React, { useEffect } from "react";
import AOS from "aos";

const HomeHero = () => {

   // Function to handle scrolling to target divs
   const scrollToCategory = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = -400; // Adjust this value as needed
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="max-w-[2400px] mx-auto">
        {/* Hero section of Home page with background overlay and text  */}
        <div>
          <div className="relative">
            <div className=" absolute top-0 z-20 inset-0 w-full h-full bg-[#FF6347] opacity-15"></div>
            <img
              data-aos="fade-in"
              className="w-full h-[400px] md:h-[550px] object-cover"
              src="/assets/homeHero.png"
              alt=""
            />
            <div
              data-aos="fade-up"
              className=" z-20 w-full absolute top-[25%] bg-[rgba(250,250,250,0.6)] py-3"
            >
              <h1
                data-aos="fade-up"
                className="text-center font-bold text-3xl md:text-5xl text-[#333333] px-6 "
              >
                Fall Collection is Here!
              </h1>
              <p
                data-aos="fade-up"
                className="px-6 text-center py-2 md:text-lg text-[#666666]"
              >
                Discover the latest trends of the season.
              </p>
              <div
                data-aos="fade-up"
                className="flex justify-center items-center "
              >
                <button onClick={() => scrollToCategory("Sales")} className="font-bold text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500 ">
                  Exclosive Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
