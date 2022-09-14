import React from 'react';
import { useRef } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    return (
        <div className=' py-10 '>
            <div className=' my-10 py-10 bg-slate-100 w-1/2 mx-auto text-center'>
                <h1 className=' mb-5 text-3xl'>Please Login...</h1>
                <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs" /> <br />
                <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs my-5" /> <br />
                <button className="btn btn-primary">Login</button> <br />
                
                <div className='flex items-center justify-center'>
                    <p>Don't Have an account? </p>
                    <Link to="/signup" className='btn btn-link'>Sign Up</Link>
                </div>
                {/* <button className='btn btn-ghost' onClick={() => signInWithGoogle()}>Google</button> */}
            </div>
        </div>
    );
};

export default Login;