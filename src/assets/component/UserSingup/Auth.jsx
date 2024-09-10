import { useAuth0 } from '@auth0/auth0-react'
import SignUp from './SignUp';
import Admin from './Admin';

const Auth= ()=>{
const {user,isAuthenticated}= useAuth0();
console.log(user) 
return(
    <>
       {isAuthenticated ?  <div><Admin></Admin></div> : <SignUp/> }
    </>
)}
export default Auth;