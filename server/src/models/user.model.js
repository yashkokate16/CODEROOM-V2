import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    googleId:{
      type:String,
      sparse:true,
    },
    authProvider:{
      type:String,
      enum:["local", "google"],
      default:"local",
    },
    password: {
      type: String,
       unique: true,
       sparse: true,
    },
  },
  {
    timestamps: true,
  }
);


userSchema.pre("save", async function () {

  if(!this.isModified("password")){
    return ;
  }

  if(!this.password) {
    return ;
  }

    let hashPassword = await bcrypt.hash(this.password, 10);
    this.password = hashPassword;
})

userSchema.methods.comparePassword = async function (passoword) {
  if(!this.password) {
    return false;
  }
    return await bcrypt.compare(passoword, this.password);
}

let userModel = mongoose.model("User", userSchema);

export default userModel;