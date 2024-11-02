import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="py-12 bg-[#333333] max-w-[2400px] mx-auto">
        <div
          data-aos=""
          className="flex flex-col lg:flex-row justify-around items-center gap-2"
        >
          <div>
            <div className="flex items-center gap-2">
              <Link to="/">
                <img src="/assets/logo.png" width={40} alt="Logo" />
              </Link>
              <Link to="/" className="pt-2">
                <span className="text-white hover:!text-[#FF6347] transition duration-500 font-bold text-2xl ">
                  ShopEase
                </span>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <ul className="text-white flex flex-wrap justify-center items-center gap-8 lg:gap-4 xl:gap-8 pr-6 py-4">
                <Link
                  to="/"
                  className="text-lg text-white hover:!text-[#FF6347] transition duration-500"
                >
                  Home
                </Link>
                <Link
                  to="/categories"
                  className="text-lg text-white hover:!text-[#FF6347] transition duration-500"
                >
                  Categories
                </Link>
                <Link
                  to="/sales"
                  className="text-lg text-white hover:!text-[#FF6347] transition duration-500"
                >
                  Sales
                </Link>
                <Link
                  to="/about"
                  className="text-lg text-white hover:!text-[#FF6347] transition duration-500"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-lg text-white hover:!text-[#FF6347] transition duration-500"
                >
                  Contact Us
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <p className="text-white">
                <span className="text-lg font-bold">Contact:</span>{" "}
                <span>(555) 123-4567</span>
              </p>
              <p className="text-white">
                <span className="text-lg font-bold">Email:</span>
                <span> randomuser@example.com</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="pt-4 text-center px-2 text-white">&copy; Copy Right 2024 | Built with Love by CodeBloom Developer</div>
      </section>
    </>
  );
};

export default Footer;
