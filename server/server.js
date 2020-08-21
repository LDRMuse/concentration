import cors from 'cors';
import express from 'express';

import scores from './routes/scores';

const app = express();

app.use(cors({
  origin: 'http://localhost',
}));

app.use(express.json());
app.use('/scores', scores);

app.listen(5000);
