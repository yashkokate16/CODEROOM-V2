import React from 'react'
import { Outlet } from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const PublicRoute = () => {

    let {user, isLoading} = useSelector((state) => state.auth)

    if(isLoading){
        return <h1 className='text-3xl font-bold'>
        Loading...</h1>
    }
    if(user) {
      return <Navigate to="/home" />
    }
    return <Outlet />
}

export default PublicRoute
