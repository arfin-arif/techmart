import Dashboard from "../Pages/Dashboard/Dashboard";
import Statics from "../Pages/Statics/Statics";

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
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path: '/dashboard',
            //     element: <Dashboard></Dashboard>
            // },
            // {
            //     path: '/statics',
            //     element: <Statics></Statics>
            // },
        ]
    }
]);
