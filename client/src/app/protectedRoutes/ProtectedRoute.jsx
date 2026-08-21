import React from 'react'
import { Outlet } from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const ProtectedRoute = () => {

    let {user, isLoading, isInitialized} = useSelector((state) => state.auth)

    if (!isInitialized || isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
                <h1 className="text-2xl font-bold">
                    Loading...
                </h1>
            </div>
        );
    }

    if(!user) {
        return <Navigate to="/" />
    }
  return <Outlet />
}

export default ProtectedRoute
