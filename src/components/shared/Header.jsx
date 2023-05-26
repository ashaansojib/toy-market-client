import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user)
    const handLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { })
    }
    return (
        <div className="navbar lg:grid grid-cols-3 my-container lg:border-b">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact lg:hidden dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/all-toys">All Toys</NavLink></li>
                    {
                        user && <>
                            <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/add-toy">Add A Toy</NavLink></li>
                            <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/my-toys">My Toys</NavLink></li>
                        </>
                    }
                </ul>
                <Link className='font-semibold normal-case text-2xl' to="/">Buy Toy Cars</Link>
            </div>
            <div className="hidden lg:flex lg:col-span-2 justify-end">
                <ul className="menu menu-horizontal px-1 ">
                    <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/blogs">Blogs</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/all-toys">All Toys</NavLink></li>
                    {
                        user ?
                            <>
                                <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/add-toy">Add A Toy</NavLink></li>
                                <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/my-toys">My Toys</NavLink></li>
                                <button onClick={handLogOut}>LogOut</button>
                            </> :
                            <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/login">Login</NavLink></li>
                    }
                    {
                        user && <div className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <div className="w-10 border rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;