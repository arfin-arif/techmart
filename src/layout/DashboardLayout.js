import React, { useContext } from 'react';
import { FaCartPlus, FaProductHunt, FaUserAlt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

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
                        <div class="flex flex-col w-64 h-screen py-8 ">
                            <h2 class="text-3xl font-semibold text-center ">Tech Mart</h2>
                            <div class="flex flex-col items-center mt-6 -mx-2">
                                <img class="object-cover w-24 h-24 mx-2 rounded-full" src={user?.photoURL} alt="avatar" />
                                <h4 class="mx-2 mt-2 font-medium  hover:underline">{user?.displayName}</h4>
                                <p class="mx-2 mt-1 text-sm font-medium hover:underline">{user?.email}</p>
                            </div>
                            <div class="flex flex-col justify-between flex-1 mt-6">
                                <nav>
                                    <div class="flex items-center px-4 py-2 mt-5 " href="#">
                                        <FaCartPlus></FaCartPlus>
                                        <span class="mx-4 font-medium"><Link to='/dashboard/mybookings'> My Bookings</Link></span>
                                    </div>
                                    {
                                        isAdmin &&
                                        <>
                                            {/* <div class="flex items-center px-4 py-2 t" href="#">
                                                <span class="mx-4 font-medium">Dashboard</span>
                                            </div> */}

                                            <div class="flex items-center px-4 py-2 mt-5 " >
                                                <FaUserAlt></FaUserAlt>

                                                <span class="mx-4 font-medium"><Link to='/dashboard/allsellers'> All Seller</Link> </span>
                                            </div>

                                            <div class="flex items-center px-4 py-2 mt-5 " >
                                                <FaUserAlt></FaUserAlt>
                                                <span class="mx-4 font-medium">  <Link to='/dashboard/allbuyers'> All Buyers</Link></span>

                                            </div>
                                        </>
                                    }
                                    {
                                        isSeller &&
                                        <>
                                            <div class="flex items-center px-4 py-2 mt-5 " >
                                                <FaProductHunt></FaProductHunt>
                                                <span class="mx-4 font-medium">  <Link to='/dashboard/addproduct'>Add Product </Link></span>
                                            </div>
                                            <div class="flex items-center px-4 py-2 mt-5 " >
                                                <FaUserAlt></FaUserAlt>
                                                <span class="mx-4 font-medium">  <Link to='/dashboard/myproduct'>My Product </Link></span>
                                            </div>

                                        </>
                                    }

                                </nav>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;