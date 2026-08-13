import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../state/authThunk';
import { getUser } from '../state/authThunk';
const useAuth = () => {


    let navigate = useNavigate()
    let dispatch = useDispatch()    

     const {
       register, 
       handleSubmit,
       reset,
       formState: { errors, isSubmitting },
     } = useForm();
    
    const onLoginSubmit = async (data) => {
      //  console.log("Login Data:", data);
      await  dispatch(LoginUser(data));
       await dispatch(getUser())
       reset();
   
    };

    const onRegisterSubmit = async (data) => {
       console.log("Register Data:", data);
       reset();

     };

     return {
        register,
        handleSubmit,
        reset,
        errors,
        isSubmitting,
        onLoginSubmit,
        onRegisterSubmit,
        navigate
     }

}

export default useAuth
