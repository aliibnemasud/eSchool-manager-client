import React, { useState } from 'react';
import { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Signup = () => {

    const [createUserWithEmailAndPassword , user, loading] = useCreateUserWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const passwordConfrimRef = useRef('');
    const [error, setError] = useState('');

    const handleSignUp = e => { 

        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const cPassword = passwordConfrimRef.current.value;
        
        if(password === cPassword) {
            createUserWithEmailAndPassword(email, password)
            toast.success("Account Created Success")
        }
        else {
            setError("Password Doesn't match.")
        }

       
    }

    return (
        <form className='my-10 py-10 bg-slate-100 w-1/2 mx-auto text-center' onSubmit={handleSignUp}>
            <h1 className=' mb-5 text-3xl'>Please Sign Up</h1>
            <input type="email" ref={emailRef} required placeholder="email" className="input input-bordered w-full max-w-xs" /> <br />
            <input type="password" ref={passwordRef} required placeholder="Password" className="input input-bordered w-full max-w-xs my-5" /> <br />
            <input type="password" ref={passwordConfrimRef} required placeholder="Confrim Password" className="input input-bordered w-full max-w-xs mb-5" />
            <br /> 
            <input type='submit' className="btn btn-primary" value="Sign Up"></input>

            <p className='text-red-600'>{error}</p>            
            <div className='flex items-center justify-center'>
                <p>Already Have an account? </p>
                <Link to="/login" className='btn btn-link'>Login</Link>
            </div>
            
        </form>
    );
};

export default Signup;