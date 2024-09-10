import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <main className="bg-transparent pt-20 rounded-md">
        <section className="container flex flex-col items-center justify-center md:h-[500px] h-[650px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center items-center text-center md:items-start md:text-left px-4"
            >
              <h1 className="text-4xl mb-4">
                Welcome to Your Blogging Journey
              </h1>
              <p className="mb-6">
                Dive into a world of thoughts, stories, and inspirations. Whether you're here to share your ideas or discover new perspectives, our platform connects you with a community of passionate bloggers. Start your journey today!
              </p>
              <div className="space-y-4 md:space-x-4 md:space-y-0 md:flex">
                <button className="rounded-md border-2 bg-emerald-300 px-4 py-2 text-sm text-black transition-colors duration-300 hover:bg-green-400">
                  <Link to="/blogs">Browse Blogs</Link>
                </button>
                <button className="border-1 rounded-md border-2 bg-emerald-300 px-4 py-2 text-sm text-black transition-colors duration-300">
                  <Link to="/writeBlog">Write Blog</Link>
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className="mx-auto max-w-xs p-4"
            >
              <img
                src="https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Blogging"
                className="hover:drop-shadow-2xl rounded-md"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
