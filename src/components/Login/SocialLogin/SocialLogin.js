import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {FcGoogle} from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';
    if(user){
        navigate(from,{replace:true});
    }
    return (
        <div className=' fixed bottom-28 w-80 max-w-sm  bg-white p-4 border-2 border-purple-700 rounded-md'>
            <div className='w-full'>
                <button onClick={()=>signInWithGoogle()} className='flex gap-2 items-center mx-auto'><FcGoogle size={34} /><span className='text-sm uppercase'>LogIn with Google</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;