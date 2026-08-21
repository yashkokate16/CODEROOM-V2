import React from 'react'
import { Outlet } from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const PublicRoute = () => {

    let {user, isLoading} = useSelector((state) => state.auth)

    if(isLoading){
        return <h1 className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
        Loading...</h1>
    }
    if(user) {
      return <Navigate to="/home" />
    }
    return <Outlet />
}

export default PublicRoute
