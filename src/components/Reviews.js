import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Reviews = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    
      return (
        <>
          <section data-aos ="fade-up" className="py-12 max-w-[2400px] mx-auto bg-[#F8F9FA] px-6 ">

        <div data-aos ="fade-up" className="max-w-[800px] mx-auto py-12">
          <h2 data-aos ="fade-up" className="text-center font-bold text-[#1B1F3B] text-xl md:text-2xl pb-4">What our Customers Are Saying</h2>
          <p data-aos ="fade-up" className="text-center text-[14px] md:text-[16px] text-[#333333] px-6">Discover how our footwear has transformed the lives of our customers. Read their stories and see why they trust us for all their shoe needs!</p>
        </div>

        <div data-aos="fade-up" id="Testimonial" className="carousel slide ">
          <div className="carousel-inner">
            
            {/* First carousel item with 3 reviews */}
            <div className="carousel-item active">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="rs bg-[#F2F2F2] w-[500px] max-h-[300px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl text-[#1B1F3B]">Emma Johnson</span>{" "}
                    <span>– ⭐⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center text-[#333333]">
                  Absolutely love my new sneakers! They are so comfortable and stylish. I've received so many compliments!
                  </p>
                </div>
                <div className="rs bg-[#F2F2F2] w-[500px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl text-[#1B1F3B]">Micheal Smith</span>{" "}
                    <span>– ⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center text-[#333333]">
                  The quality of these shoes exceeded my expectations. Perfect for my morning runs—highly recommend!
                  </p>
                </div>
              </div>
            </div>

            {/* Second carousel item */}
            <div className="carousel-item">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="rs bg-[#F2F2F2] w-[500px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl text-[#1B1F3B]">Sophia Lee</span>{" "}
                    <span>– ⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center text-[#333333]">
                  “I purchased formal shoes for my job interview, and I felt so confident wearing them. I got the job!
                  </p>
                </div>
                <div className="rs bg-[#F2F2F2] w-[500px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl text-[#1B1F3B]">James Brown</span>{" "}
                    <span>– ⭐⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center text-[#333333]">
                  Great selection of shoes at amazing prices! The customer service was exceptional too. I’ll be back for more.
                  </p>
                </div>
              </div>
            </div>
          <div className="carousel-item">
            <div className="flex flex-wrap justify-center gap-6">
            <div className="rs bg-[#F2F2F2] w-[500px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl text-[#1B1F3B]">Olivia Davis</span>{" "}
                    <span>– ⭐⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center text-[#333333]">
                  Shopping was a breeze, and my sandals arrived quickly. They fit perfectly and are very comfortable for all-day wear!
                  </p>
                </div>
            </div>

          </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#Testimonial"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-black opacity-1"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#Testimonial"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-black opacity-1"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
        </>
      );
    };
    

export default Reviews
