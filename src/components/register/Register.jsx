import React, { useContext, useState } from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/Title';

const Register = () => {
    const { createUser, updateUserInfo } = useContext(AuthContext);
    const [error, setError] = useState("");
    useTitle("Register")
    // if the user register successfully it automatically goes to the previous path
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateUserInfo(name, photo)
                navigate(from)
            })
            .catch(error => {
                setError(error.message)
            });
        updateUserInfo()
            .then(result => { })
            .catch(error => {
                setError(error.message)
                // console.log(error)
            })
        form.reset()
    }
    return (
        <>
            <h1 className="text-5xl font-bold text-center py-2">Register A New Account!</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center">
                        <div>
                            <img className='lg:w-[400px] lg:h-[350px]' src="https://img.freepik.com/premium-vector/sign-account-user-authorization-login-authentication-page-concept-laptop-with-login-password-form-page-screen-stock-illustration_100456-1590.jpg?w=2000" alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="your full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="Put User image Link" name='photo' required placeholder="Photo Url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <label className="label">
                                <span className="lable-text">If Already Have An Account? <Link to='/login' className='link link-accent'>SignIn</Link></span>
                            </label>
                            <label className="label">
                                {
                                    error ? <span className="label-text text-red-600">{error}</span> : <span className="label-text text-green-700">User Create Succefully</span>
                                }
                            </label>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;