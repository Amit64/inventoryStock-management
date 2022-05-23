import axios from 'axios';
import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {FcGoogle} from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useJwt from '../../hooks/useJwt';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading1, error] = useSignInWithGoogle(auth);
    // const [user1]= useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const [token] = useJwt(user);

    let from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from,{replace:true});      
    }
    
    return (
        <div className=' fixed bottom-20 md:bottom-56 lg:bottom-20 w-80 max-w-sm  bg-white p-4 border-2 border-purple-700 rounded-md'>
            <div className='w-full'>
                <button loading1={loading1} onClick={()=>signInWithGoogle()} className='flex gap-2 items-center mx-auto'><FcGoogle size={34} /><span className='text-sm uppercase'>LogIn with Google</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;