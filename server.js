import express from 'express'
import 'dotenv/config'
import cors from 'cors'

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());


// Запуск сервера
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  res.json(users);
});

// COMMENT