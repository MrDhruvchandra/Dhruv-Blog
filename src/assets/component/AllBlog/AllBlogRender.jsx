import AllBlog from "./AllBlog";
import BlogsData from "../../BlogData/BlogData.js"


const AllBlogRenderer =()=>{

    return(
        <>
        {BlogsData.map((blog, index) => (
        <AllBlog
          key={index}
          reverse={index % 2 === 0} // Alternating reverse layout
          image={blog.image}
          date={blog.date}
          title={blog.title}
          description={blog.description}
          author={blog.author}
        />
      ))}
      
        </>
    )
}
 export default AllBlogRenderer;