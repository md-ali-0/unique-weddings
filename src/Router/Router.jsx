import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Services from "../Pages/Services/Services";
import Service from "../Pages/Services/Service";
import Vendors from "../Pages/Vendors/Vendors";
import Vendor from "../Pages/Vendors/Vendor";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: ()=>fetch('/service.json'),
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
                path: '/services',
                loader: ()=>fetch('/service.json'),
                element: <Services></Services>
            },
            {   
                path: '/service/:id',
                loader: ()=>fetch('/service.json'),
                element: <Service></Service>
            },
            {   
                path: '/vendors',
                loader: ()=>fetch('/vendors.json'),
                element: <Vendors></Vendors>
            },
            {   
                path: '/vendor/:id',
                loader: ()=>fetch('/vendors.json'),
                element: <Vendor></Vendor>
            },

        ]
    }
])

export default Router;