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
    }
})


export let {setCode, setLanguage, setTheme, setIsTyping, setLastSaved} = editorSlice.actions;

export default editorSlice.reducer;