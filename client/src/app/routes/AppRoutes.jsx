import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomeLayout from '../layouts/HomeLayout'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../../features/auth/ui/pages/Login'
import Register from '../../features/auth/ui/pages/Register'
import Home from '../../features/auth/ui/pages/Home'
import Editor from '../../features/editor/ui/pages/Editor'
import { useEffect } from 'react'
import {getUser} from "../../features/auth/state/authThunk"
import { useDispatch } from 'react-redux'
import ProtectedRoute from '../protectedRoutes/ProtectedRoute'
import PublicRoute from '../protectedRoutes/PublicRoute'
import EditorRoute from '../protectedRoutes/EditorRoute'
import Profile from '../../features/auth/ui/pages/Profile'




const AppRoutes = () => {

    let dispatch = useDispatch()


   useEffect(() =>{
         
    (() =>{
        dispatch(getUser())
    })()

    },[dispatch])

 
    let router = createBrowserRouter([
        {
            path:"",
            element:<PublicRoute />,
            children:[
                {
                    path:"",
                    element:<AuthLayout />,
                    children:[
                {
                    path:"/",
                    element:<Login />
                },
                {
                    path:"register",
                    element:<Register />
                }
            ]
                }
            ]
        },
        {
            path:"/home",
            element:<ProtectedRoute />,
            children:[
                {
                    path:"",
                    element:<HomeLayout />,
                    children:[
                {
                    path:"",
                    element:<Home />
                },
                {
                    path:"/home/profile",
                    element:<Profile />,
                }
            ]
                }
            ]
        }, {
            path:"/editor",
            element:<EditorRoute />,
            children:[
                {
                    path:"/editor/:roomCode",
                    element:<Editor />
                }
            ]
        }
    ])

  return <RouterProvider router={router} />
}

export default AppRoutes
