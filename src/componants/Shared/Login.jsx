import React from 'react';
import { useRef } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {    

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    return (
        <div className=' my-52 py-10 '>
            <h1 className=' my-10 text-5xl'>Login</h1>
            <button className="btn btn-primary mr-2">Student</button>
            <button className="btn btn-secondary">Admin</button>

            <div className=' my-10 py-10 bg-slate-100 w-1/2 mx-auto'>
                <h1 className=' mb-5 text-3xl'>Please Login...</h1>                
                <input type="email" placeholder="email" class="input input-bordered w-full max-w-xs" /> <br />
                <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs my-5" /> <br />
                <button className="btn btn-primary">Login</button> <br />
                <button className='btn btn-ghost' onClick={() => signInWithGoogle () }>Google</button>
            </div>
        </div>
    );
};

export default Login;