import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js'
import dotenv from "dotenv";
import userRouter from './routes/userRoutes.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 4000
connectDB()

const allowedOrigins = ['http://localhost:5173']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, Credential: true}))


//api endpoint
app.get('/', (req,res) => res.send("Api Working fine"));
app.use('/api/auth', authRouter)
app.use('/api/auth', userRouter)
app.listen(port, () => console.log(`Server started on PORT:${port}`));
