import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile] = useUpdateProfile(auth);
      const[user1] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const navigateLogin = () => {
        navigate("/login");
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email,password);
        await updateProfile({displayName:name});
        if(user1){
          navigate(from,{replace:true});
        }
    };
    return (
        <div className=" bg-cyan-500  content-container">
      <div className=" h-screen flex justify-center items-center  drop-shadow-lg">
        <div className=" w-80 bg-white p-12 rounded">
            <h2 className="text-center mb-2 text-sm uppercase">Please Signup</h2>
          <form onSubmit={handleSubmit}>
            <input className='w-full border mb-2 p-2' type="text" name='name' placeholder='name' required />
            <input className="w-full border mb-2 p-2" name='password' type="password" placeholder="password" required />
            <input className="w-full border mb-2 p-2" type="email" name='email' placeholder="email address" required />
            <input className='bg-purple-500 w-full text-white mb-2 p-2' type="submit" value="Sign Up" />
            <p className="text-sm">
              Already registered? <Link className=' text-purple-800' to="/login" onClick={()=>navigateLogin}>Sign In</Link>
            </p>
          </form>
        </div>
        <SocialLogin/>
      </div>
    </div>
    );
};

export default SignUp;