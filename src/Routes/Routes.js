import DashboardLayout from "../layout/DashboardLayout";
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
                path: '/category/:id',
                element: <CategoryWiseProducts />,
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
                element: <SellerRoute><AllSellers /></SellerRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <SellerRoute><AllBuyers /></SellerRoute>
            },
            {
                path: '/dashboard/mybookings',
                element: <MyOrders />
            },
        ]

    }

]);
