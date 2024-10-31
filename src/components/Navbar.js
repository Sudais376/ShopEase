import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';

const Navbar = () => {
  // State to toggle between Navbar and SmNavbar
  const [isSmNavbarVisible, setIsSmNavbarVisible] = useState(false);
  // State to toggle search input on small screens
  const [showSearchInput, setShowSearchInput] = useState(false);

  // Toggle functions
  const toggleNavbar = () => {
    setIsSmNavbarVisible(!isSmNavbarVisible);
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  useEffect (() => {
    AOS.init ({duration : 1000});
  }, []);

  return (
    <>
      {/* Conditional Rendering: Show SmNavbar if isSmNavbarVisible is true, otherwise show Navbar */}
      {isSmNavbarVisible ? (
        // SmNavbar code
        <nav className="max-w-[2400px] mx-auto sticky top-0 z-30 bg-white py-6 px-12 lg:px-24">
          <div className="flex justify-between items-center">
            {/* Close icon */}
            <div className="block lg:hidden">
              <img
                src="/assets/close.png"
                width={40}
                alt=""
                onClick={toggleNavbar} // Toggle back to Navbar
                className="cursor-pointer"
              />
            </div>

            {/* Brand Logo */}
            <div className="flex justify-center items-center gap-2">
              <Link to="/" className="flex justify-center items-center gap-2">
                <img
                  className="cursor-pointer"
                  src="/assets/logo.png"
                  width={40}
                  alt=""
                />
              </Link>
            </div>

            {/* Search Icon for Small Screens */}
            <div className="block lg:hidden">
              <img
                src="/assets/search.png"
                width={40}
                alt=""
                onClick={toggleSearchInput} // Toggle search input visibility
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Full-Width Search Input for Small Screens */}
          {showSearchInput && (
            <div data-aos ="fade-down" className="w-full pt-8 lg:hidden">
              <form>
                <input
                  className="w-full px-4 py-2 border-2 border-[#FF6347] rounded-md focus:outline-[#FF6347] focus:shadow-md shadow-[#FF6347]"
                  type="search"
                  placeholder="Search here"
                />
              </form>
            </div>
          )}

          {/* Navigation Links on Small devices */}
          <ul className="flex flex-col py-8">
            <Link to="/">
              <li data-aos ="fade-down" onClick={toggleNavbar} className="text-[#333333] text-lg hover:!text-[#FF6347] hover:underline transition duration-500">
                Home
              </li>
            </Link>
            <hr data-aos ="fade-down" className="border-t-2 border-[#ff6347] pb-4" />
            <Link to="/shop">
              <li data-aos ="fade-down" onClick={toggleNavbar} className="text-[#333333] text-lg hover:!text-[#FF6347] hover:underline transition duration-500">
                Shop
              </li>
            </Link>
            <hr data-aos ="fade-down" className="border-t-2 border-[#ff6347] pb-4" />
            <Link to="/categories">
              <li data-aos ="fade-down" onClick={toggleNavbar} className="text-[#333333] text-lg hover:!text-[#FF6347] hover:underline transition duration-500">
                Categories
              </li>
            </Link>
            <hr data-aos ="fade-down" className="border-t-2 border-[#ff6347] pb-4" />
            <Link to="/sales">
              <li data-aos ="fade-down" onClick={toggleNavbar} className="text-[#333333] text-lg hover:!text-[#FF6347] hover:underline transition duration-500">
                Sales
              </li>
            </Link>
            <hr data-aos ="fade-down" className="border-t-2 border-[#ff6347] pb-4" />
            <Link to="/about">
              <li data-aos ="fade-down" onClick={toggleNavbar} className="text-[#333333] text-lg hover:!text-[#FF6347] hover:underline transition duration-500">
                About Us
              </li>
            </Link>
            <hr data-aos ="fade-down" className="border-t-2 border-[#ff6347] pb-4" />
            <Link to="/contact">
              <li data-aos ="fade-down" onClick={toggleNavbar} className="text-[#333333] text-lg hover:!text-[#FF6347] hover:underline transition duration-500">
                Contact
              </li>
            </Link>
            <hr data-aos ="fade-down" className="border-t-2 border-[#ff6347] pb-4" />
          </ul>
        </nav>
      ) : (
        // Main Navbar code
        <nav className="max-w-[2400px] mx-auto sticky top-0 z-30 flex justify-between items-center bg-white py-6 px-12 lg:px-24">
          {/* Hamburger Menu icon */}
          <div className="block lg:hidden">
            <img
              src="/assets/hamburger-menu.png"
              width={40}
              alt=""
              onClick={toggleNavbar} // Toggle to SmNavbar
              className="cursor-pointer"
            />
          </div>

          {/* Brand Logo and text */}
          <div className="flex justify-center items-center gap-2">
            <Link to="/" className="flex justify-center items-center gap-2">
              <img
                className="cursor-pointer"
                src="/assets/logo.png"
                width={40}
                alt=""
              />
            </Link>

            {/* Navigation Links hidden on Small devices */}
            <ul className="hidden lg:flex justify-center items-center gap-4 pl-8">
              <Link to="/">
                <li className="text-[#333333] text-lg hover:!text-[#FF6347] hover:underline transition duration-500">
                  Home
                </li>
              </Link>
              <Link to="/shop">
                <li className="text-[#333333] text-lg hover:!text-[#FF6347] hover:underline transition duration-500">
                  Shop
                </li>
              </Link>
              <Link to="/categories">
                <li className="text-[#333333] text-lg hover:!text-[#FF6347] hover:underline transition duration-500">
                  Categories
                </li>
              </Link>
              <Link to="/sales">
                <li className="text-[#333333] text-lg hover:!text-[#FF6347] hover:underline transition duration-500">
                  Sales
                </li>
              </Link>
              <Link to="/about">
                <li className="text-[#333333] text-lg hover:!text-[#FF6347] hover:underline transition duration-500">
                  About Us
                </li>
              </Link>
              <Link to="/contact">
                <li className="text-[#333333] text-lg hover:!text-[#FF6347] hover:underline transition duration-500">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="hidden lg:flex">
          <form>
            <input
              className=" px-4 py-2 border-2 border-[#FF6347] rounded-md focus:outline-[#FF6347] focus:shadow-md shadow-[#FF6347]"
              type="search"
              placeholder="Search here"
            />
          </form>
        </div>

          {/* Search Icon for Small Screens */}
          <div className="block lg:hidden">
            <img
              src="/assets/search.png"
              width={40}
              alt=""
              onClick={toggleSearchInput} // Toggle search input visibility
              className="cursor-pointer"
            />
          </div>
        </nav>
      )}

      {/* Full-Width Search Input for Small Screens outside of SmNavbar */}
      {!isSmNavbarVisible && showSearchInput && (
        <div className="w-full px-12 py-4 lg:hidden">
          <form>
            <input
              className="w-full px-4 py-2 border-2 border-[#FF6347] rounded-md focus:outline-[#FF6347] focus:shadow-md shadow-[#FF6347]"
              type="search"
              placeholder="Search here"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;
