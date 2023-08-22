import Express  from "express";
import PostRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import cors from 'cors'
import cookieParser from "cookie-parser";
import multer from "multer";

const app = Express()
app.use(Express.json())
app.use(cors());
app.use(cookieParser())
app.use("/api/posts",PostRoutes)
app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const upload = multer({ storage });
  
  app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    res.status(200).json(file);
  });

app.listen(8000,() => {
    console.log("connected");
})
