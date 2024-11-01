import React, { useEffect, useState } from "react";
import AOS from "aos";

const Sales = () => {
  const [timeLeft, setTimeLeft] = useState(86399); // Set initial time in seconds (24 hours)
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0; // Stop the timer at 0
        }
        return prevTime - 1;
      });

      // Blink effect every 5 seconds
      setIsBlinking((prevBlink) => !prevBlink);
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <>
    
      <section data-aos="fade-up" className="bg-[#FFF4E1] pt-6 pb-12 px-6">
        <div>
          <div data-aos="fade-up" className="max-w-[800px] mx-auto px-6 pt-12">
            <p className="text-2xl md:text-4xl font-bold text-[#333333] text-center">
              Flash Sale
            </p>
            <p id="Sales"
              className={`text-xl md:text-2xl text-center font-semibold py-2 ${
                isBlinking ? "text-red-500" : "text-[#000000]"
              }`}
            >
              Ends in: {formatTime(timeLeft)}
            </p>
          </div>
        </div>

        {/* Sales Offers Cards  */}

        <div data-aos ="fade-up" className="flex flex-wrap justify-center items-center gap-8 py-12">
          <div data-aos ="fade-up" className="rounded-2xl shadow-lg p-3 bg-white border-[#E0E0E0]">
            <div data-aos ="fade-up" className="relative flex flex-col items-center p-5 pt-10 bg-red-100 rounded-xl">
              <span className=" absolute top-0 right-0 flex items-center bg-[#FF6347] hover:bg-[#f75336] transition duration-500 rounded-l-full py-2 px-3 text-xl font-semibold text-amber-100">
                SALE
              </span>
              <div data-aos ="fade-up" className="py-4">
                <img className=" h-[250px] object-cover rounded-md hover:scale-105 transition duration-500" src="/assets/summerSandals.png" width={250} alt="" />
              </div>
              <div>
                <p data-aos ="fade-up" className="text-center text-[#333333] text-lg md:text-xl">Summer Sandals</p>
                <p data-aos ="fade-up" className="text-center font-bold text-[#ff6347] text-xl md:text-2xl"> <span className=" line-through text-black font-normal pr-2 ">35$</span>  25$ Only</p>
              </div>
              
              
              
              <div data-aos ="fade-up" className="w-full flex justify-end mt-6">
                <a
                  className="w-full py-3 text-center text-white bg-[#FF6347] rounded-lg font-medium text-lg hover:bg-[#e5533d] transition duration-500 focus:outline-none"
                  href="/"
                >
                  Grab the deal
                </a>
              </div>
            </div>
          </div>
          <div data-aos ="fade-up" className="rounded-2xl shadow-lg p-3 bg-white border-[#E0E0E0]">
            <div data-aos ="fade-up" className="relative flex flex-col items-center p-5 pt-10 bg-red-100 rounded-xl">
              <span className=" absolute top-0 right-0 flex items-center bg-[#FF6347] hover:bg-[#f75336] transition duration-500 rounded-l-full py-2 px-3 text-xl font-semibold text-amber-100">
                SALE
              </span>
              <div data-aos ="fade-up" className="py-4">
                <img className=" h-[250px] object-cover rounded-md hover:scale-105 transition duration-500" src="/assets/runningshoe.png" width={250} alt="" />
              </div>
              <div>
                <p data-aos ="fade-up" className="text-center text-[#333333] text-lg md:text-xl">Summer Sandals</p>
                <p data-aos ="fade-up" className="text-center font-bold text-[#ff6347] text-xl md:text-2xl"> <span className=" line-through text-black font-normal pr-2 ">60$</span>  45$ Only</p>
              </div>
              
              
              
              <div data-aos ="fade-up" className="w-full flex justify-end mt-6">
                <a
                  className="w-full py-3 text-center text-white bg-[#FF6347] rounded-lg font-medium text-lg hover:bg-[#e5533d] transition duration-500 focus:outline-none"
                  href="/"
                >
                  Grab the deal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sales;
