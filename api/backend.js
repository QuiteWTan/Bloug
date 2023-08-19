import Express  from "express";
import PostRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import cors from 'cors'

const app = Express()
app.use(Express.json())
app.use(cors());

app.use("/api/posts",PostRoutes)
app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)

app.listen(8800,() => {
    console.log("connected");
})
