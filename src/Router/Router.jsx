import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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