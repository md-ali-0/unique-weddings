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
import Venues from "../Pages/Venues/Venues";
import Venue from "../Pages/Venues/Venue";
import PrivaterRoute from "./PrivaterRoute";

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
                path: '/services',
                loader: ()=>fetch('/service.json'),
                element: <PrivaterRoute><Services></Services></PrivaterRoute>
            },
            {   
                path: '/services/:id',
                loader: ()=>fetch('/service.json'),
                element: <PrivaterRoute><Service></Service></PrivaterRoute>
            },
            {   
                path: '/vendors',
                loader: ()=>fetch('/vendors.json'),
                element: <PrivaterRoute><Vendors></Vendors></PrivaterRoute>
            },
            {   
                path: '/vendors/:id',
                loader: ()=>fetch('/vendors.json'),
                element: <PrivaterRoute><Vendor></Vendor></PrivaterRoute>
            },
            {   
                path: '/venues',
                loader: ()=>fetch('/venues.json'),
                element: <PrivaterRoute><Venues></Venues></PrivaterRoute>
            },
            {   
                path: '/venues/:id',
                loader: ()=>fetch('/venues.json'),
                element: <PrivaterRoute><Venue></Venue></PrivaterRoute>
            },
        ]
    }
])

export default Router;