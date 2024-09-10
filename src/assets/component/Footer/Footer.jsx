import React, { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    // Show the popup
    setShowPopup(true);

    // Clear the input field
    setEmail('');
  };

  const closePopup = () => {
    setShowPopup(false); // Hide the popup
  };

  return (
    <div id="footer" className="rounded-t-3xl bg-emerald-300">
      <section className="mx-auto text-white">
        <div className="grid py-5 md:grid-cols-3">
          <div className="px-4 py-8">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <Link to="/" className="">
                DHRUV
                <span className="inline-block font-bold text-slate-500">BLOG</span>
              </Link>
            </h1>
            <p>
            Dhruv Blog is a creative platform where writers and thinkers share ideas, insights, and stories. Explore diverse topics, engage with thought-provoking content, and inspire meaningful conversations with a global community.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <Link
                to="https://www.google.com/maps/place/Crystal+Park/@19.6962492,72.7556015,17z/data=!3m1!4b1!4m6!3m5!1s0x3be71d200ca369af:0x2e0fefb214119215!8m2!3d19.6962492!4d72.7581764!16s%2Fg%2F11h0qxh0s?entry=ttu"
                target="_blank"
              >
                <FaLocationArrow />
              </Link>

              <p>Lucknow, Uttar Pradesh</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Link to="tel:+7985010058">
                <FaMobileAlt />
              </Link>

              <p>+91 7985010058</p>
            </div>
            {/* Social Handle */}
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <Link to="/" className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Home
                  </Link>
                  <Link to="https://dhruv0110.netlify.app/" target="_blank" className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    About Developer
                  </Link>
                  <Link to="/blogs" className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Services
                  </Link>
                  <Link to="/authentication" className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Login
                  </Link>
                </ul>
              </div>
            </div>
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <Link to="/writeBlog" className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Write Blog
                  </Link>
                  <Link to="/blogs" className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Our Latest Blogs
                  </Link>
                  <Link to="/" className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    About us
                  </Link>
                </ul>
              </div>
            </div>
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div className="flex flex-col gap-3">
                  <h1>Subscribe to our newsletter</h1>
                  <input
                    className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    onClick={handleSubmit}
                    className="rounded-full bg-teal-400 px-3 py-1 text-white max-w-max"
                  >
                    Submit
                  </button>
                  <div className="mt-6 flex items-center gap-3">
                    <Link
                      to="https://www.instagram.com/dhruv.0.1.1.0/"
                      target="_blank"
                      className="duration-200 hover:scale-105"
                    >
                      <FaInstagram className="text-3xl" />
                    </Link>
                    <Link
                      to="https://github.com/MrDhruvchandra"
                      target="_blank"
                    >
                      <FaGithub className="text-3xl hover:text-primary duration-300" />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/in/dhruvchandra-m-b71155229/"
                      target="_blank"
                      className="duration-200 hover:scale-105"
                    >
                      <FaLinkedin className="text-3xl" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            © 2024 Dhruv. All rights reserved.
          </div>
        </div>
      </section>

      {/* Popup for confirmation */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Subscription Successful!</h2>
            <p>Thank you for subscribing to our newsletter.</p>
            <button
              onClick={closePopup}
              className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
