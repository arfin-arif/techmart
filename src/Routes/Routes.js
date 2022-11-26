import DashboardLayout from "../layout/DashboardLayout";
import Blog from "../Pages/Blog/Blog";
import Blog01 from "../Pages/Blog/Blog01";
import Blog02 from "../Pages/Blog/Blog02";
import Blog03 from "../Pages/Blog/Blog03";
import Blog04 from "../Pages/Blog/Blog04";
import CategoryWiseProducts from "../Pages/CategoryWiseProducts/CategoryWiseProducts";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/blog/1',
                element: <Blog01 />
            },
            {
                path: '/blog/2',
                element: <Blog02 />
            },
            {
                path: '/blog/3',
                element: <Blog03 />
            },
            {
                path: '/blog/4',
                element: <Blog04 />
            },

            {
                path: '/category/:id',
                element: <PrivateRoute><CategoryWiseProducts /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category?category_id=${params.id}`)

            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }


        ]
    },

    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute> <AddProducts /></SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute><MyProducts /></SellerRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers /></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers /></AdminRoute>
            },
            {
                path: '/dashboard/mybookings',
                element: <MyOrders />
            },
        ]

    }

]);
