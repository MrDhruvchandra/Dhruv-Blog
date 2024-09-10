import React from "react";
import { useLocation } from "react-router-dom";
import Blogs from "../component/Blog/Blogs";
 
const FullBlog = (props) => {
  const location = useLocation();
  // console.log(props, " props");
  // console.log(location, " useLocation Hook");
  const { image, date, title, description, author } = location.state;

  return (
    <div className=" pt-20">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container ">
        <p className="text- black text-sm py-3">
          {" "}
          written by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>

      {/* All Blogs Section */}
      <Blogs />
    </div>
  );
};
export default  FullBlog;
