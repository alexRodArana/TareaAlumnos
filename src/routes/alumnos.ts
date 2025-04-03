import express from 'express';
import AlumnosHttpHandler from '../handlers/alumnos';

const router = express.Router();
const alumnosHttpHandler = new AlumnosHttpHandler();

router.get('/', alumnosHttpHandler.getAlumnos);

export default router;