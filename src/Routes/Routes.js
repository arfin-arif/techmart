import CategoryWiseProducts from "../Pages/CategoryWiseProducts/CategoryWiseProducts";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


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
                path: '/addproduct',
                element: <AddProducts />
            },
            {
                path: '/myproduct',
                element: <MyProducts />
            },
            {
                path: '/category/:id',
                element: <CategoryWiseProducts />,
                loader: ({ params }) => fetch(`http://localhost:5000/category?category_id=${params.id}`)

            },


        ]
    }
]);
