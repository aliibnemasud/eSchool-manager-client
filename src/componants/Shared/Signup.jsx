import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const  emailRef = useRef();
    const  passwordRef = useRef();
    const  passwordConfrimRef = useRef();

    const handleSignUp = (e) =>  {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const cPassword = passwordConfrimRef.current.value;
        console.log(email, password, cPassword)
    }

    return (
        <form className=' my-10 py-10 bg-slate-100 w-1/2 mx-auto' onClick={handleSignUp}>
            <h1 className=' mb-5 text-3xl'>Please Login...</h1>
            <input type="email" ref={emailRef} placeholder="email" class="input input-bordered w-full max-w-xs" /> <br />
            <input type="password" ref={passwordRef} placeholder="Password" class="input input-bordered w-full max-w-xs my-5" /> <br />
            <input type="password" ref={passwordConfrimRef} placeholder="Confrim Password" class="input input-bordered w-full max-w-xs mb-5" />
            <input type='submit' className="btn btn-primary" value="Sign Up"></input>
            <Link to="/">Login</Link>            
        </form>
    );
};

export default Signup;