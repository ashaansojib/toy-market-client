import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../login/Login";
import Register from "../register/Register";
import AllToys from "../pages/AllToys";
import AddToy from "../pages/AddToy";
import PrivetRoute from "./PrivetRoute";
import MyToys from "../pages/MyToys";
import UpdateCard from "../cards/UpdateCard";
import ToyDetails from "../pages/ToyDetails";
import Blogs from "../pages/Blogs";

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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add-toy',
                element: <PrivetRoute><AddToy></AddToy></PrivetRoute>
            },
            {
                path: '/my-toys',
                element: <PrivetRoute><MyToys></MyToys></PrivetRoute>
            },
            {
                path: '/toydetails/:id',
                element: <PrivetRoute><ToyDetails></ToyDetails></PrivetRoute>,
                loader: ({params})=> fetch(`https://b7a11-toy-marketplace-server-side-ashaansojib.vercel.app/alltoys/details/${params.id}`)
            },
            {
                path: '/all-toys',
                element: <AllToys></AllToys>
            },
            {
                path: '/all-toys/:id',
                element: <PrivetRoute><ToyDetails></ToyDetails></PrivetRoute>,
                loader: ({params})=> fetch(`https://b7a11-toy-marketplace-server-side-ashaansojib.vercel.app/alltoys/details/${params.id}`)
            },
            {
                path: '/updating/:id',
                element: <UpdateCard></UpdateCard>,
                loader: ({params})=> fetch(`https://b7a11-toy-marketplace-server-side-ashaansojib.vercel.app/alltoys/details/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])