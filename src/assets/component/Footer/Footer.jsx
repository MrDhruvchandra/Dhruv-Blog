import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" className="rounded-t-3xl bg-emerald-300">
      <section className="mx-auto  text-white">
        <div className=" grid py-5 md:grid-cols-3">
          <div className=" px-4 py-8 ">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <Link to="/ " className="">
                DHRUV
                <span className="inline-block font-bold text-teal-300">BLOG</span>
              </Link>
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <Link to="https://www.google.com/maps/place/Crystal+Park/@19.6962492,72.7556015,17z/data=!3m1!4b1!4m6!3m5!1s0x3be71d200ca369af:0x2e0fefb214119215!8m2!3d19.6962492!4d72.7581764!16s%2Fg%2F11h0qxh0s?entry=ttu" target="_blank">
              <FaLocationArrow />
              </Link>
              
              <p> Lucknow, Uttar Pradesh</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Link to="tel:+7985010058">
              <FaMobileAlt />
              </Link>
             
              <p>+91 7985010058</p>
            </div>
            {/* Social Handle */}
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Home
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    About
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Services
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Login
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Privacy Policy
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Services
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    About us
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div className="flex flex-col gap-3">
                  <h1>Subscribe to our newsletter</h1>
                  <input
                    className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 "
                    type="text"
                    placeholder="Email"
                  /> 
                  <button  className="rounded-full bg-teal-400 px-3 py-1 text-white max-w-max "
 >submit</button>
                  <div className="mt-6 flex items-center gap-3">
                    <Link  to="https://www.instagram.com/dhruv.0.1.1.0/" target="_blank" className="duration-200 hover:scale-105">
                      <FaInstagram className="text-3xl" />
                    </Link>
                    <Link to="https://github.com/MrDhruvchandra" target="_blank">
                  <FaGithub className="text-3xl hover:text-primary duration-300" />
                </Link>
                    <Link to="https://www.linkedin.com/in/dhruvchandra-m-b71155229/" target="_blank" className="duration-200 hover:scale-105">
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
    </div>
  );
};

export default Footer;
