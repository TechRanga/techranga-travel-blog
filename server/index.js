import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/post-route/post-route.js';
dotenv.config({ path: './config/.env'});

const app = express();
const PORT = 5000;
app.use(express.urlencoded({limit:"30mb", extended:true}));//alternative to body-parser
app.use(express.json({limit:"30mb", extended:true})); // To parse the incoming requests with JSON payloads
app.use(cors());

mongoose.connect("mongodb+srv://tradmin:tradmin@techranga.vcveb.mongodb.net/travel-blog?retryWrites=true&w=majority" ,{useNewUrlParser:true,useUnifiedTopology: true,useFindAndModify:false}).
then(()=>app.listen(PORT,()=>{console.log(`Server is running on ${PORT}`)})).
catch((error)=>console.log(error.message))


app.use('/posts',postRoutes);
