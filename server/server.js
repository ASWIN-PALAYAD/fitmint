import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from 'cors';

mongoose
  .connect(
    "mongodb+srv://aswintestcase:fZiI50GbqEmJBQt8@cluster0.ttfan2k.mongodb.net/"
  )
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin:"http://http://localhost:5173/",
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pregma"
        ],
        credentials : true
    })
)

app.use(cookieParser());
app.use(express.json());

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`)
)
