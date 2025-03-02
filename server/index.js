import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';




const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


dotenv.config();
app.get('/', (req, res) => {
    res.send('Hello World');
});
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});