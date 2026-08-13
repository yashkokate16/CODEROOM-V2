import { customAlphabet } from  "nanoid";


let nanoid = customAlphabet(
    "1234567890abcdefghijklmnopqrstuvwxyz", 6);

export default nanoid;