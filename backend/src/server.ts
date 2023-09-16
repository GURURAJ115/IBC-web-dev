import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { sample_users } from "./data";
import {dbConnect} from './configs/database.config';
dbConnect();

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/aboutus",(req,res)=>
{
    res.send(sample_users)
})

const port = 5000;
app.listen(port,()=>{
    console.log("Website served on http://localhost:"+port)
})