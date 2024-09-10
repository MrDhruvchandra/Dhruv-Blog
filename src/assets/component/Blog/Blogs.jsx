import React, { useEffect,useState } from "react";
 import BlogCard from "./BlogCard";
 import BlogsData from "../../BlogData/BlogData.js"
 import ScrollToTop from "../../../ScrollToTop.jsx";

const Blogs = () => {
  
  return (
    <main id="blog" data-aos="fade-up" data-aos-offset="200">
      <section  className="container mb-10 py-8">
        <ScrollToTop/>
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
           
        </div>
      </section>
    </main>
  );
};

export default Blogs;
