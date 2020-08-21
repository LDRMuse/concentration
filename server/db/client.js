import dotenv from 'dotenv';

import { MongoClient } from 'mongodb';

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
});

(async () => {
  await client.connect();

  process.on('SIGINT', () => {
    client.close().then(() => {
      console.info('SIGINT recieved. CLosing MongoClient.');
    });

    process.exit(0);
  });
});
