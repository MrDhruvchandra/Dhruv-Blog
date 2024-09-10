
import { Link } from 'react-router-dom';
import Logo from '../../places/logo.jpg' 
import { CiSearch } from "react-icons/ci";
import { useAuth0 } from '@auth0/auth0-react'

const Navbar= ()=>{
  const {user,isAuthenticated}= useAuth0();
  return(
        <>
               <div className="shadow-md bg-white dark:bg-emerald-300 dark:text-pretty duration-200 rounded-md relative z-40">
        <div className="container py-3 md:py-2">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10 uppercase ml-4 rounded-full" />
                <span className="font-bold ml-5">Dhruv</span>Blog
              </a>
            </div>
            <div className="flex justify-between items-center rounded-md  bg-green-200 outline-0">
            <input type="text" placeholder='search ' className='hidden sm:block rounded-md p-1 bg-green-200 outline-0  ' />
            <CiSearch   />
            </div>
           


            <div className="flex justify-between items-center gap-2 lg:gap-8">
              
               
              < Link to="/authentication"
                 className="hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:scale-105 duration-200 py-1 px-4 rounded-full"
              >
                {
            isAuthenticated ?  <div className='user hidden px-2 sm:block bg-blue-200  rounded-md'>{user.name}</div>
            :  
   <button>Sign in</button>
 
          }</ Link>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Navbar;