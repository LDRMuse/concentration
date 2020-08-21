import cors from 'cors';
import express from 'express';

import scores from './routes/scores';

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use('/scores', scores);

app.listen(5000);
