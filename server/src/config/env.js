import z from "zod"
import dotenv from "dotenv"
dotenv.config()


let envSchema = z.object({
    PORT:z.coerce.number().default(3000),
    MONGO_URL:z.string(),
    ACCESS_TOKEN_SECRET:z.string(),
    REFRESH_TOKEN_SECRET:z.string(),
    CLIENT_URL:z.string().url(),
    MISTRALAI_API_KEY:z.string()
})


let parsed = envSchema.safeParse(process.env)

if(!parsed.success) {
    console.log("Invalid environment variables:", parsed.error.format())
    process.exit(1)
}


export default parsed.data


