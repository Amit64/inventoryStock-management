import React from "react";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
    const[user1] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let errorElement;
    if(error){
        errorElement = <div>
            <p className="text-danger text-red-600"> {error?.message}</p>
        </div>
    }
    

    let from = location.state?.from?.pathname || '/';

    const navigateSignup =()=>{
        navigate('/signup');
    }
   
  const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      await signInWithEmailAndPassword(email,password);
      if(user1){
        navigate(from,{replace:true});
      }
      
  };

  return (
    <div className=" bg-cyan-500  content-container">
      <div className=" relative h-screen flex justify-center items-center drop-shadow-lg">
        <div className=" w-80 bg-white max-w-sm p-12 rounded">
            <h2 className="text-center mb-2 text-sm uppercase">Please Login</h2>
          <form onSubmit={handleSubmit}>        
            <input className="w-full border mb-2 p-2" type="email" name="email" placeholder="email address" required />
            <input className="w-full border mb-2 p-2" type="password" name="password" placeholder="password" required />
            <input className="bg-purple-500 w-full text-white mb-2 p-2" type="submit" value="Login" />
            <p className="text-sm">
              Not registered? <Link className=' text-purple-800' to="/signup" onClick={()=>navigateSignup}>Create an account</Link>
            </p>
            {errorElement}
          </form>
        </div>
        <SocialLogin/>
      </div>
    </div>
    
  );
};

export default Login;
