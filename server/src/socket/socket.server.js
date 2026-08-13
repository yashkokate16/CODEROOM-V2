import { Server } from 'socket.io';
import env from "../config/env.js";
import { socketAuthMiddleware } from "./socket.auth.js";
import * as roomService from "../services/room.service.js"




let io ;

export function initializeSocketServer(httpServer) {
    let io = new Server(httpServer,{
        cors:{
            origin: env.CLIENT_URL,
            credentials: true
        }
    });

    io.use(socketAuthMiddleware)




   // join room //

   io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);


    // req from clinet //

    // socket.on("joinRoom", ({roomCode}) => {
    //     console.log("join room request received for room:", roomCode);

    //     socket.join(roomCode);

    //     console.log(
    //     `👤 ${socket.user.email} joined room ${roomCode}`
    //     );

    //     socket.roomCode = roomCode;
         
    //     // update participants in monogoDB //
    //     await roomService.updateParticipantSocketIdService(roomCode, socket.user._id, socket.id);

    //     // get latest room 

    //     let updatedRoom = await roomService.getRoomService(roomCode);

    //     console.log(
    //         "👥 Participants:",
    //         updatedRoom.participants
    //     );

    //     io.to(roomCode).emit(
    //         "roomUpdated",
    //         updatedRoom
    //     )

    // })

    socket.on("joinRoom", async ({ roomCode }) => {

    try {

        console.log("📥 Join room:", roomCode);
        console.log("👤 User:", socket.user.email);

        // 1. Join Socket.IO room
        socket.join(roomCode);

        // 2. Remember room on socket
        socket.roomCode = roomCode;

        // 3. Update participant in MongoDB
        await roomService.updateParticipantSocketIdService(
            roomCode,
            socket.user._id,
            socket.id
        );

        // 4. Get latest room
        const updatedRoom =
            await roomService.getRoomService(roomCode);

        console.log(
            "👥 Participants:",
            updatedRoom.participants
        );

        // 5. Send latest room to EVERYONE
        // including the user who just joined
        io.to(roomCode).emit(
            "roomUpdated",
            updatedRoom
        ); 

    } catch (error) {

        console.error(
            "❌ Join room error:",
            error.message
        );

    }

    });


    socket.on("leaveRoom", async ({roomCode}) =>{
        try{
            console.log(
            `🚪 ${socket.user.email} leaving ${roomCode}`
            );
            
            //  update Database // 

            let updateRoom = await roomService.leaveRoomService(roomCode, socket.user._id);

            socket.leave(roomCode);

            socket.roomCode = null;

            io.to(roomCode).emit("roomUpdated", updateRoom);

            console.log(
            `🚪 ${socket.user.email} left ${roomCode}`
            );

        } catch (error) {
            console.error("❌ Leave room error:", error.message);
        }
    })
    


    //  codeChnage req  //

    socket.on("codeChange", ({roomCode, code}) => {
         
        console.log("💻 Code change received");
        console.log("ROOM", roomCode);
        
        socket.to(roomCode).emit("codeUpdated", {
            code,
        })
    })








    socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);

    })




    return io;

   })
   
}


export function getIO() {
    return io;
}