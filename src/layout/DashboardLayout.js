import React, { useContext } from 'react';
import { FaCartPlus, FaProductHunt, FaUserAlt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isUser] = useBuyer(user?.email)

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content" >
                        <div className="flex flex-col w-64 h-screen py-8 ">
                            <h2 className="text-3xl font-semibold text-center ">Tech Mart</h2>
                            <div className="flex flex-col items-center mt-6 -mx-2">
                                <img className="object-cover w-24 h-24 mx-2 rounded-full" src={user?.photoURL} alt="avatar" />
                                <h4 className="mx-2 mt-2 font-medium  hover:underline">{user?.displayName}</h4>
                                <p className="mx-2 mt-1 text-sm font-medium hover:underline">{user?.email}</p>
                            </div>
                            <div className="flex flex-col justify-between flex-1 mt-6">
                                <nav>
                                    {isUser &&
                                        <div className="flex items-center px-4 py-2 mt-5 " href="#">
                                            <FaCartPlus></FaCartPlus>
                                            <span className="mx-4 font-medium"><Link to='/dashboard/mybookings'> My Bookings</Link></span>
                                        </div>

                                    }
                                    {
                                        isAdmin &&
                                        <>
                                            {/* <div className="flex items-center px-4 py-2 t" href="#">
                                                <span className="mx-4 font-medium">Dashboard</span>
                                            </div> */}
                                            <Link to='/dashboard/allsellers'>
                                                <div className="flex items-center px-4 py-2 mt-5 " >
                                                    <FaUserAlt></FaUserAlt>
                                                    <span className="mx-4 font-medium"> All Seller </span>
                                                </div>
                                            </Link>
                                            <Link to='/dashboard/allbuyers'>
                                                <div className="flex items-center px-4 py-2 mt-5 " >
                                                    <FaUserAlt></FaUserAlt>
                                                    <span className="mx-4 font-medium">  All Buyers</span>

                                                </div>
                                            </Link>
                                            <Link to='/dashboard/reports'>
                                                <div className="flex items-center px-4 py-2 mt-5 " >
                                                    <FaUserAlt></FaUserAlt>
                                                    <span className="mx-4 font-medium"> Reported Items</span>

                                                </div>
                                            </Link>
                                        </>
                                    }
                                    {
                                        isSeller &&
                                        <><Link to='/dashboard/addproduct'>
                                            <div className="flex items-center px-4 py-2 mt-5 " >
                                                <FaProductHunt></FaProductHunt>
                                                <span className="mx-4 font-medium">  Add Product </span>
                                            </div>
                                        </Link>
                                            <Link to='/dashboard/myproduct'>
                                                <div className="flex items-center px-4 py-2 mt-5 " >
                                                    <FaUserAlt></FaUserAlt>
                                                    <span className="mx-4 font-medium">  My Product </span>
                                                </div>
                                            </Link>
                                        </>
                                    }

                                </nav>
                            </div>
                        </div>
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default DashboardLayout;