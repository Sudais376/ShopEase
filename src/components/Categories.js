import React, { useEffect, useState } from "react";
import AOS from "aos";
import AddtoCart from '../components/AddtoCart';

const Categories = () => {

    const [isCartOpen, setCartOpen] = useState(false);

  const handleViewDetailsClick = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="max-w-[2400px] mx-auto">
        {/* Major Heading and descrition for Categories Section.  */}

        <div>
          <div data-aos="fade-up" className="max-w-[800px] mx-auto py-12 px-6 ">
            <h2
              data-aos="fade-up"
              className="font-bold text-2xl md:text-4xl text-center text-[#333333]"
            >
              Browse Our Collection!
            </h2>
            <p
              data-aos="fade-up"
              className="text-center px-2 py-4 text-lg text-[#666666] "
            >
              Discover footwear tailored to fit every occasion and lifestyle.
              From performance-driven athletic shoes to sophisticated formal
              styles, our curated collections offer something for everyone.
              Explore our range and find the perfect pair that complements your
              unique style and needs.
            </p>
          </div>
        </div>

        {/* Carousel for Major Categories */}

        <div
          id="shoeCategories"
          data-aos="fade-up"
          className="carousel slide pb-12 "
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
                  <img
                    className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                    src="/assets/athleticCollection.png"
                    width={500}
                    alt="Athletic Shoes Collection"
                  />
                  <p className=" text-center text-xl py-2 font-bold">
                    Athletic shoes
                  </p>
                  <button className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                    Browse Collection
                  </button>
                </div>
                <div className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
                  <img
                    className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                    src="/assets/sneakerCollection.png"
                    width={500}
                    alt="Sneaker Shoes Collection"
                  />
                  <p className=" text-center text-xl py-2 font-bold">
                    Casual Sneakers
                  </p>
                  <button className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                    Browse Collection
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
                  <img
                    className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                    src="/assets/formalCollection.png"
                    width={500}
                    alt="Formal Shoes Collection"
                  />
                  <p className=" text-center text-xl py-2 font-bold">
                    Formal & dress Shoes
                  </p>
                  <button className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                    Browse Collection
                  </button>
                </div>
                <div className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
                  <img
                    className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                    src="/assets/seasonalCollection.png"
                    width={500}
                    alt="Seasonal Shoes Collection"
                  />
                  <p className=" text-center text-xl py-2 font-bold">
                    Seasonal & Specialty Shoes
                  </p>
                  <button className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                    Browse Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#shoeCategories"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-[#FF6347]"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#shoeCategories"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-[#FF6347]"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Section for Athletic Shoes' sub-categories  */}

        <div data-aos ='fade-up' className=" py-12 ">
          <div data-aos ='fade-up' className="max-w-[800px] mx-auto px-6 ">
            <h3 data-aos ='fade-up' className="font-bold text-center text-xl md:text-3xl  ">
              Athletic Shoes
            </h3>
            <p data-aos ='fade-up' className="text-[16px] text-center px-2 py-2  ">
              Engineered for performance, our athletic shoes offer the support,
              comfort, and durability needed for all your activities. Whether
              you're hitting the track, gym, or court, discover styles that help
              you excel.
            </p>
          </div>
          <div data-aos ='fade-up' className="flex flex-wrap justify-center items-center gap-8 py-12">
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/runningshoe.png"
                width={250}
                alt="Running Shoes"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
                Running shoes
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View details
                </button>
              </div>
            </div>
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/trainingshoe.png"
                width={250}
                alt="Training Shoes"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
                Training Shoes
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View details
                </button>
              </div>
            </div>
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/soccercleats.png"
                width={250}
                alt="Soccer Cleats"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
                Soccer Cleats
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View details
                </button>
              </div>
            </div>
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/basketballshoe.png"
                width={250}
                alt="Basketball Shoes"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
                Basketball Shoes
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View detials
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section for Casual Sneakers' sub-categores  */}

        <div data-aos ='fade-up' className=" py-12 ">
          <div data-aos ='fade-up' className="max-w-[800px] mx-auto px-6 ">
            <h3 data-aos ='fade-up' className="font-bold text-center text-xl md:text-3xl  ">
              Casual Sneakers
            </h3>
            <p data-aos ='fade-up' className="text-[16px] text-center px-2 py-2  ">
            From classic designs to modern trends, our casual sneakers bring style and comfort to every step. Perfect for everyday wear, these versatile sneakers make it easy to look good wherever you go.
            </p>
          </div>
          <div data-aos ='fade-up' className="flex flex-wrap justify-center items-center gap-8 py-12">
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/classicsneakers.png"
                width={250}
                alt="Classic Sneakers"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
                Classic Sneakers
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View details
                </button>
              </div>
            </div>
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/slipOnsSneakers.png"
                width={250}
                alt="Slip-Ons Sneakers"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
                Slip-Ons
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View details
                </button>
              </div>
            </div>
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/highTopsSneakers.png"
                width={250}
                alt="High Top Sneakers"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
              High-Tops
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View details
                </button>
              </div>
            </div>
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/platformSneakers.png"
                width={250}
                alt="Platform Sneakers"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
              Platform Sneakers
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View detials
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section for Formal & dress shoes' sub-categores  */}

        <div data-aos ='fade-up' className=" py-12 ">
          <div data-aos ='fade-up' className="max-w-[800px] mx-auto px-6 ">
            <h3 data-aos ='fade-up' className="font-bold text-center text-xl md:text-3xl  ">
              Formal & Dress Shoes
            </h3>
            <p data-aos ='fade-up' className="text-[16px] text-center px-2 py-2  ">
            Step into sophistication with our collection of formal shoes. Ideal for business and special occasions, these refined styles combine elegance with exceptional comfort for a polished look.
            </p>
          </div>
          <div data-aos ='fade-up' className="flex flex-wrap justify-center items-center gap-8 py-12">
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/oxfordShoe.png"
                width={250}
                alt="Oxfords Shoes"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
                Oxfords
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View details
                </button>
              </div>
            </div>
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/loafersShoe.png"
                width={250}
                alt="Loafers"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
              Loafers
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View details
                </button>
              </div>
            </div>
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/derbiesShoe.png"
                width={250}
                alt="Derby Shoes"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
              Derbies
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View details
                </button>
              </div>
            </div>
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/monkStrapsShoe.png"
                width={250}
                alt="Monk Straps Shoes"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
              Monk Straps
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View detials
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section for Seasonal & Sepcialty shoes' sub-categories  */}

        <div data-aos ='fade-up' className=" py-12 ">
          <div data-aos ='fade-up' className="max-w-[800px] mx-auto px-6 ">
            <h3 data-aos ='fade-up' className="font-bold text-center text-xl md:text-3xl  ">
            Seasonal & Specialty Shoe
            </h3>
            <p data-aos ='fade-up' className="text-[16px] text-center px-2 py-2  ">
            Get ready for any season with our specialty footwear. From cozy winter boots to breathable summer sandals, find the perfect pair to match the weather or your lifestyle with style and function.
            </p>
          </div>
          <div data-aos ='fade-up' className="flex flex-wrap justify-center items-center gap-8 py-12">
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/winterBoots.png"
                width={250}
                alt="Winter Boots"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
                Winter Boots
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View details
                </button>
              </div>
            </div>
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/summerSandals.png"
                width={250}
                alt="Summer Sandals"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
              Summer Sandals
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View details
                </button>
              </div>
            </div>
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/rainBoots.png"
                width={250}
                alt="Rain boots"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
              Rain Boots
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View details
                </button>
              </div>
            </div>
            <div data-aos ='fade-up' className="max-w-[500px] px-6 py-4 rounded-md bg-[#F1F3F5] border border-[#E0E0E0] hover:!border-[#FF6347] transition duration-500">
              <img data-aos ='fade-up'
                className="h-[250px] object-cover rounded-md hover:scale-105 transition duration-500"
                src="/assets/ecoFriendly.png"
                width={250}
                alt="Eco-friendly Shoes"
              />
              <p data-aos ='fade-up' className=" text-center text-lg py-2 font-bold">
              Eco-Friendly Shoes
              </p>
              <div data-aos ='fade-up'>
                <button onClick={handleViewDetailsClick} className="font-bold w-full text-white px-6 py-2 rounded-md bg-[#ff6347] hover:bg-[#E5533D] transition duration-500">
                  View detials
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>

       {/* Render AddtoCart component if isCartOpen is true */}
       {isCartOpen && <AddtoCart onClose={closeCart} />}
    </>
  );
};

export default Categories;
