import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    code: `// Welcome to CodeRoom 🚀

function greet(name) {
    console.log("Hello " + name);
}

greet("Yash");
`,
    language: "javascript",
    theme: "vs-dark",
    isTyping: false,
    lastSaved: null,


    // execution: {
    //     isRunning: false,
    //     output: "",
    //     error: null,
    //     executionTime: null,
    // },


};


let editorSlice = createSlice({

    name: "editor",
    initialState,
    reducers: {
        setCode: (state, action) => {
            state.code = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setIsTyping: (state, action) => {
            state.isTyping = action.payload;
        },
        setLastSaved: (state, action) => {
            state.lastSaved = action.payload;
        },
        // setExecutionRunning: (state, action) => {
        //    state.execution.isRunning = action.payload;
        // },
        // setExecutionResult: (state, action) => {
        //   state.execution.isRunning = false;
        //   state.execution.output = action.payload.output || "";
        //   state.execution.error = action.payload.error || null;
        //   state.execution.executionTime = action.payload.executionTime || null;
        // },



    }
})


export let {setCode, setLanguage, setTheme, setIsTyping, setLastSaved,
    // setExecutionRunning, setExecutionResult,
} = editorSlice.actions;

export default editorSlice.reducer;