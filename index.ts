import express from 'express';
import alumnosRoutes from './src/routes/alumnos';

const app = express();
const port = 3000;

app.use('/alumnos', alumnosRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});