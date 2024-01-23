import express from 'express';
import dot from 'dotenv';
dot.config();
const app = express();
import api from './route/index.js';

const port = process.env.PORT;

app.use(api);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})