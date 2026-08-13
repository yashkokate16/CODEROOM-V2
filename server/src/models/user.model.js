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

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


userSchema.pre("save", async function (next) {

    let hashPassword = await bcrypt.hash(this.password, 10);
    this.password = hashPassword;
})

userSchema.methods.comparePassword = async function (passoword) {
    return await bcrypt.compare(passoword, this.password);
}

let userModel = mongoose.model("User", userSchema);

export default userModel;