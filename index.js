import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();

//Middlewares
dotenv.config();
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3005;

app.listen(PORT,()=>{
    console.log('listening on port ' + PORT)
});

//Routes
app.use('/auth',authRoutes)


//Connect to MongoDb

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });