import mongoose from "mongoose";

const participantSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    socketId: {
      type: String,
      default: "",
    },

     isOnline: {
      type: Boolean,
      default: true,
     },

    joinedAt: {
      type: Date,
      default: Date.now,
    },
    
  },
  { _id: false }
);

const roomSchema = new mongoose.Schema(
  {
    roomCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },

    roomName: {
      type: String,
      required: true,
    },

    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    participants: [participantSchema],

   code: {
      type: String,
      default: `// Welcome to CodeRoom 🚀

      function greet(name) {
      console.log("Hello " + name);
    }

      greet("Yash");
      `,
      },
    
    language:{
      type: String,
      default: "Javascript",
    },

    theme:{
      type: String,
      default: "vs-dark"
    },
    
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

let roomModel = mongoose.model("Room", roomSchema);

export default roomModel;