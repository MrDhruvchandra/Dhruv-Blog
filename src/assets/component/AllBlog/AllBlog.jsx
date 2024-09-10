import React from "react";
import { Link } from "react-router-dom";

const AllBlog = ({ reverse, image, date, title, description, author }) => {
  
  return (
    <section>
      <main className="bg-emerald-100 border-b-4  rounded-xl">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl ">
                Exploring the Mountains: A Hiker's Paradise
              </h1>
              <p className="text-sm text-black">
                From towering peaks to tranquil trails, discover the beauty of hiking through majestic mountains. This blog shares tips on preparing for high-altitude hikes and the most scenic routes to explore. Whether you're a seasoned hiker or a beginner, there's something for everyone.
              </p>

              <div className="space-x-4">
                <button className="rounded-md border-2 border-primary bg-emerald-300 px-4 py-2 text-sm text-black transition-colors duration-300 hover:bg-primary/80">
                  <Link to={`/fullBlog/${title}`}
                     state={{ image, date, title, description, author }}
                  >
                    Read More
                  </Link>
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <img
                src={image}
                alt="Blog Image"
                className="max-auto w-full p-3 hover:drop-shadow-md rounded-3xl"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default AllBlog;
