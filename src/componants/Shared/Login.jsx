import React from 'react';
import { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const Login = () => {
    
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);    

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)        
    }

    if(loading){
        return <Loading/>
    }

    if(user){        
       navigate('/dashboard')
    }

    return (
        <div className=' py-10 '>
            <div className=' my-10 py-10 bg-slate-100 w-1/2 mx-auto text-center'>
                <h1 className=' mb-5 text-3xl'>Please Login...</h1>

                <form onSubmit={handleLogin}>
                    <input type="email" ref={emailRef} placeholder="email" className="input input-bordered w-full max-w-xs" /> <br />
                    <input type="password" ref={passwordRef} placeholder="Password" className="input input-bordered w-full max-w-xs my-5" /> <br />
                    <input type="submit" className="btn btn-primary" value="Login" ></input> <br />
                </form>

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