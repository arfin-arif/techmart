import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../assets/logo1.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
    }

    const menuItems =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/about'>About</Link></li>
            {user?.uid ?
                <>
                    <>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li onClick={handleLogOut}><Link to='/login'>Sign Out</Link></li>

                    </>

                </>
                :

                <li><Link to='/login'>Login</Link></li>
            }

        </>

    return (
        <div className="navbar sticky top-0 z-50 bg-slate-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                {/* <Link to='/' className=" font-serif font-bold text-xl">Tech Mart</Link> */}
                <img src={logo} className='h-12' alt="" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu font-medium menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <label htmlFor="dashboard-drawer" tabIndex={2} className=" navbar-end mr-4 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>

        </div>
    );
};

export default Navbar;