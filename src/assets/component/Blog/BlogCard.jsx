
import { Link } from "react-router-dom";
const BlogCard= ({ image, date, title, description, author })=>{
    return(
        <Link to={`/fullBlog/${title}`}
        
        state={{ image, date, title, description, author }}
        >
        <div
            id="card"
            className="p-4 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-emerald-300"
          >
            <div className="overflow-hidden">
              <img
                src={image}
                alt="No image"
                className="mx-auto rounded-lg h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>{date}</p>
              <p className="line-clamp-1"> By {author}</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">{title}      </h1>
              <p className="line-clamp-2">
              {description}          </p>
            </div>
          </div>
        </Link>
    )
}

export default BlogCard;