import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import FullLogin from "../Pages/Contact/FullLogin";
import FullSignUp from "../Pages/Contact/FullSignUp";
import Home from "../Pages/Home/Home";
import DetailService from "../Pages/Services/DetailService";
import TotalServices from "../Pages/Services/TotalServices";
import Root from "../Root/Root";



const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<TotalServices></TotalServices>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<FullLogin></FullLogin>
            },{
                path:'/signUp',
                element:<FullSignUp></FullSignUp>
            },{
                path:'/service/:id',
                loader:async({params})=>{
                    return fetch(`http://localhost:8000/service/${params.id}`)
                },
                element:<DetailService></DetailService>
            }
        ]
    }
])
export default router