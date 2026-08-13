import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCode } from "../../state/editor.Slice"
import Editor from "@monaco-editor/react";
import socket from "../../../../app/socket/socket"
import { useParams } from 'react-router-dom';
import {saveRoom} from "../../api/saveRoom.api"


const MonacoEditor = () => {

    let dispatch = useDispatch();
        let{code, language, theme} = useSelector((state) => state.editor);
    let {roomCode} = useParams();

    useEffect(() => {

        let handleCodeUpdate = ({code}) => {

        console.log("code recived from Server:");

        dispatch(setCode(code))
    }

    socket.on("codeUpdated", handleCodeUpdate);

    return () =>{
        socket.off("codeUpdated", handleCodeUpdate);
    }
    },[dispatch])


    useEffect(() => {
       if(!code) return ;

       let timer = setTimeout(async () => {
         try{
            await saveRoom(roomCode, code);
            console.log("Code saved successfully"); 
        } 
        catch(error){
            console.error("Error saving code:", error);
        }
        
       }, 2000);

       return () => {
        clearTimeout(timer)
       }
    },[code, roomCode])
    
  return (
    <div className="h-full w-full">
      <Editor
        height="100%"
        width="100%"
        language={language}
        value={code}
        onChange={(value) => {
            
            let newCode = value || "";

            // update local redux state with new code //
        dispatch(setCode(newCode));


        //  send code to server // 
        
        socket.emit("codeChange",{
            roomCode,
            code: newCode
        })
        }}


        theme="vs-dark"
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: 15,
          wordWrap: "on",
          automaticLayout: true,
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
}

export default MonacoEditor
