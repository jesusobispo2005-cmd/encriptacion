import express from 'express';
import userRoutes from './src/routes/user.route.js';
import cors from 'cors'
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.json({ message: 'API de pruebas funcionando' });
});

// Usar las rutas de usuario
app.use('/api/users', userRoutes);

if (!process.env.JEST_WORKER_ID) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

export default app;