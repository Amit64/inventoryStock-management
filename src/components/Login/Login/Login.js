import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const navigateSignup =()=>{
        navigate('/signup');
    }
  const handleSubmit = (e) => {
      e.preventDefault();
  };

  return (
    <div className="bg-cyan-500  content-container">
      <div className="w-80 mx-auto pt-80  drop-shadow-lg">
        <div className="bg-white max-w-sm p-12 rounded">
            <h2 className="text-center mb-2 text-sm uppercase">Please Login</h2>
          <form onSubmit={handleSubmit}>
            
            <input className="w-full border mb-2 p-2" type="password" placeholder="password" />
            <input className="w-full border mb-2 p-2" type="text" placeholder="email address" />
            <button className=" bg-purple-500 w-full text-white mb-2 p-2"><input type="submit" value="Login" /></button>
            <p className="text-sm">
              Not registered? <Link className=' text-purple-800' to="/signup" onClick={()=>navigateSignup}>Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
