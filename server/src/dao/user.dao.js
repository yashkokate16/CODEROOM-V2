import userModel from "../models/user.model.js";


export let createUser = async (name, email, password) =>{
  
    let user = await userModel.create({
        name,
        email,
        password
    })
    return user;
}


export let getUserByEmail = async (email) => {
    let user = await userModel.findOne({email});
    return user;
}



export let getUserById = async (userId) => {
    let user = await userModel.findById(userId);
    return user;
}
