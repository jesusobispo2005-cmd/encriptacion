import express from 'express';
import userRoutes from './src/routes/user.route.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API de pruebas funcionando' });
});

// Usar las rutas de usuario
app.use('/api/users', userRoutes);



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});