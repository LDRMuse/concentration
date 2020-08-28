import cors from 'cors';
import express from 'express';

import scores from './routes/scores';

const app = express();

app.get('/', (_, res) => {
  res.send('<h1>Hello from express</h1>');
});

app.use(express.json());

app.use(cors());

app.use('/scores', scores);

app.listen(process.env.PORT || 5000);
