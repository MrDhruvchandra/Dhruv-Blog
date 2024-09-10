import { Link } from 'react-router-dom';
import BlogImage from '../../places/pic1.jpg'
const HomePage = () => {
    return (
      <>
        <main className="bg-transparent pt-20 rounded-md">
          <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px]">
            <div className="grid grid-cols-1 items-center gap-8 dark:text-black md:grid-cols-2">
              <div
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-once="true"
                className="flex flex-col pl-8 justify-center items-center gap-4 text-center text-black md:items-start md:text-left"
              >
                <h1 className="text-4xl">
                  Welcome to Your Blogging Journey
                </h1>
                <p>
                  Dive into Link world of thoughts, stories, and inspirations. Whether you're here to share your ideas or discover new perspectives, our platform connects you with Link community of passionate bloggers. Start your journey today!
                </p>
                <div className="space-x-4">
                  <button className="rounded-md border-2   bg-emerald-300 px-4 py-2 text-sm text-black transition-colors duration-300 hover:bg-green-400 bg">
                    <Link  to="/blogs">Browse Blogs</Link>
                  </button>
                  <button className="border-1 rounded-md border-2 bg-emerald-300  px-4 py-2 text-sm text-black transition-colors duration-300">
                    <Link  to="/writeBlog">Write Blog</Link>
                  </button>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="400"
                data-aos-once="true"
                className="mx-auto max-w-xs p-4"
              >
                {/*  relevant image for the blog homepage  */}
                <img src="https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blogging" className="hover:drop-shadow-2xl  rounded-md" />
              </div>
            </div>
          </section>
        </main>
      </>
    );
  };
  
  export default HomePage;
  