import React from "react";

const AddtoCart = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="flex flex-col items-center justify-around w-96 p-5 m-2 text-center cursor-pointer rounded-lg shadow-lg bg-white border-[#e0e0e0]">
          <div className="content p-5">
            <div onClick={onClose} className="text-5xl text-[#ff6347]">&times;</div>
            <div className="title font-extrabold text-[#333333] uppercase text-[16px] md:text-[18px] tracking-wide mt-2">
              Item details
            </div>
            <div className="price text-[#FF6347] font-extrabold text-xl text-shadow mt-2">
              $39.99
            </div>
            <div className="description text-[#666666] text-[14px] md:text-[16px] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at posuere eros. Interdum et malesuada fames ac ante ipsum primis
              in faucibus.
            </div>
          </div>
          
          <button
            className="select-none border-none outline-none text-white uppercase font-bold text-xs py-3 px-6 bg-[#ff6347] rounded-md w-11/12 shadow-lg hover:bg-[#E5533D] transition duration-300"
          >
            <a href="/">Buy now</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddtoCart;
