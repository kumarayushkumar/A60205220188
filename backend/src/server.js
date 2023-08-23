import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import trainRoute from './routes/trainRoute.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept']
}))

app.get('/', (req, res) => {
  res.send('Train Api');
});

app.use('/trains', trainRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
