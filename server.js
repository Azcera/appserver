import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import postgres from 'postgres'

const sqlu = postgres(process.env.DATABASE_PUBLIC_URL);

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());


// Запуск сервера
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const users = await sqlu`SELECT * FROM users`;
const navigation = await sqlu`SELECT * FROM nav`;

app.get('/api/users/list', (req, res) => {
  res.json(users);
});

app.get('/api/navigation/list', (req, res) => {
  res.json(navigation);
});