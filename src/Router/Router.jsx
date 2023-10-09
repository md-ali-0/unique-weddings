import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {   
                path: '/service',
                element: <h1>Service</h1>
            },
            {   
                path: '/about',
                element: <h1>About</h1>
            },
            {   
                path: '/contact',
                element: <h1>Contact</h1>
            },
        ]
    }
])

export default Router;