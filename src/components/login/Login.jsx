import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider';
import useTitle from '../../hooks/Title';

const Login = () => {
    const { loginWithGoogle, userLogin } = useContext(AuthContext);
    const [error, setError] = useState("")
    useTitle("Login")
    // when login redirect to the actual path
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate  = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
        .then( result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
        .catch( error =>{
            setError(error.message)
        })
        form.reset()
    }
    const handGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true})
            })
            .catch(error => {
                setError(error.message);
                console.log(error)
            })
    }
    return (
        <>
            <h1 className="text-5xl font-bold text-center py-2">Login now!</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center">
                        <div>
                            <img className='lg:w-[350px] md:h-[300px]' src="https://img.freepik.com/premium-vector/sign-account-user-authorization-login-authentication-page-concept-laptop-with-login-password-form-page-screen-stock-illustration_100456-1590.jpg?w=2000" alt="" />
                        </div>
                        <div>
                            <button className='btn btn-outline' onClick={handGoogleLogin} >Login With Google</button>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
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
                                <span className="lable-text">You Don't Have An Account? <Link to='/register' className='link link-accent'>Register</Link></span>
                            </label>
                            <label className="label">
                                {
                                    error ? <span className="label-text text-red-600">{error}</span> : <span className="label-text text-green-700">User Login Succefully</span>
                                }
                            </label>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;