import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser"
import connectDB from "./config/db.js"
const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000

connectDB()

app.use(express.json())
app.use(cookieParser())
app.use("/api/users", userRoutes)
app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT)
})
