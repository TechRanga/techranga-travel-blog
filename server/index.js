import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/post-route/post-route.js';
dotenv.config({ path: './config/.env'});

const app = express();
app.use(express.urlencoded({limit:"30mb", extended:true}));//alternative to body-parser
app.use(express.json({limit:"30mb", extended:true})); // To parse the incoming requests with JSON payloads
app.use(cors());

mongoose.connect(process.env.DB_URL ,{useNewUrlParser:true,useUnifiedTopology: true,useFindAndModify:false}).
then(()=>app.listen(process.env.PORT,()=>{console.log(`Server is running on ${process.env.PORT}`)})).
catch((error)=>console.log(error.message))

app.use('/',(req,res)=>res.send("Welcome to Tech Ranga's Travel Blog Application"));
app.use('/posts',postRoutes);
