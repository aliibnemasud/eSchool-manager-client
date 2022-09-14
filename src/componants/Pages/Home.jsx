import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='my-52 py-10'>
            <h1 className='my-10 text-5xl'>Login</h1>           
            <Link to="login" className="btn btn-primary mr-2">Student</Link>
            <Link to="login" className="btn btn-secondary">Admin</Link>
        </div>
    );
};

export default Home;