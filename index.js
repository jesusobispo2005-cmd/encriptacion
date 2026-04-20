import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

import userRoutes from './src/routes/user.route.js';
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API de pruebas funcionando' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});