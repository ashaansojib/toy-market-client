import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/Title';

const ErrorPage = () => {
    useTitle("404 Found")
    return (
        <div className='my-container'>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <img src="/error.png" alt="" />
                        <p className='py-6'>Your Route Not Found!!</p>
                        <Link to="/" className="btn btn-primary">go to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;