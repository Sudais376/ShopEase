import React from "react";

const ContactD = () => {
  return (
    <>
    <div className="py-12">
      <div className="max-w-[1800px] mx-auto py-12">
        <h2
          data-aos="fade-up"
          className="font-bold text-2xl md:text-4xl text-center pb-4 px-6 max-w-[800px] mx-auto"
        >
          We’d Love to Hear from You
        </h2>
        <p data-aos="fade-up" className="text-lg md:text-center px-6 max-w-[800px] mx-auto">
          Whether you have a question about our inventory, want to schedule a
          test drive, or need assistance with financing, our team is here to
          help. Fill out the form below, and we’ll respond promptly.
        </p>
      </div>

      <form
        data-aos="fade-up"
        className="mt-4 bg-[#F2F2F2] p-6 rounded-md max-w-[800px] mx-auto"
      >
        <h2 data-aos ="fade-up" className="text-2xl md:text-3xl text-center py-4 font-bold text-[#333333]">
          Send a message or query
        </h2>
        <div data-aos ="fade-up" className="mb-3">
          <label data-aos ="fade-up" className="form-label text-lg text-[#333333]">Your Name</label>
          <input
            type="text"
           data-aos ="fade-up"  className="form-control focus:ring-4 focus:ring-[#FF4C4C] focus:ring-opacity-50 border border-yellow-500"
            placeholder="Your name"
          />
        </div>
        <div data-aos ="fade-up" className="mb-3">
          <label data-aos ="fade-up" className="form-label text-lg text-[#333333]">
            Email address
          </label>
          <input
            type="email"
           data-aos ="fade-up"  className="form-control focus:ring-4 focus:ring-[#FF4C4C] focus:ring-opacity-50 border border-yellow-500"
            placeholder="name@example.com"
          />
        </div>
        <div data-aos ="fade-up" className="mb-3">
          <label data-aos ="fade-up" className="form-label text-lg text-[#333333]">
            Your message
          </label>
          <textarea
           data-aos ="fade-up"  className="form-control focus:ring-4 focus:ring-[#FF4C4C] focus:ring-opacity-50 border border-yellow-500"
            rows="3"
          ></textarea>
        </div>

<div data-aos ="fade-up">
        <button
          type="submit"
           className="btn btn-primary w-full font-bold bg-[#ff6347] text-[#FFFFFF] hover:bg-[#E5533D] active:!bg-[#E5533D] transition duration-500 px-6 py-2 rounded-md border border-white mb-4"
        >
          Submit
        </button>
        </div>
      </form>
      </div>
    </>
  );
};

export default ContactD;
