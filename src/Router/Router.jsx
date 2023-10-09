import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Services from "../Pages/Services/Services";
import Service from "../Pages/Services/Service";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: ()=>fetch('/data.json'),
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
                loader: ()=>fetch('/data.json'),
                element: <Services></Services>
            },
            {   
                path: '/service/:id',
                loader: ()=>fetch('/data.json'),
                element: <Service></Service>
            },
            {   
                path: '/vendors',
                element: <h1>vendors</h1>
            },
        ]
    }
])

export default Router;