import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const port = process.env.PORT || 8080;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('API is running....');
});

app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${parseInt(
      process.env.PORT
    )}`
  )
);