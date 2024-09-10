import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Admin = () => {
  const { user, logout } = useAuth0();

  return (
    <>
      <main className="bg-gray-100 pt-20 rounded-md min-h-screen">
        <section className="container mx-auto flex flex-col items-center justify-center py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-10 rounded-lg shadow-lg">
            {/* User Profile Section */}
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col items-center text-center md:text-left md:items-start space-y-4"
            >
              <div className="rounded-full overflow-hidden w-32 h-32 border-4 border-green-400 shadow-lg">
                <img
                  src={user.picture}
                  alt={`${user.name}'s profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">
                Welcome, {user.name}!
              </h3>
              <p className="text-lg text-gray-600">Email: {user.email}</p>
              <p className="text-sm text-gray-500 italic">
                (User ID: {user.sub})
              </p>

              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="mt-4 px-5 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 shadow-md transition-all duration-300"
              >
                Logout
              </button>
            </div>

            {/* Navigation Section */}
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col items-center md:items-start space-y-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                What would you like to do next?
              </h2>
              <div className="space-y-4">
                <button className="w-full px-5 py-3 bg-emerald-500 text-white text-sm font-semibold rounded-lg hover:bg-emerald-600 shadow-md transition-all duration-300">
                  <Link to="/blogs">Browse Blogs</Link>
                </button>
                <button className="w-full px-5 py-3 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 shadow-md transition-all duration-300">
                  <Link to="/writeBlog">Write a Blog</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Admin;
