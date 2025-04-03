import { Request, Response, NextFunction } from 'express';
import AlumnosController from '../controllers/alumnos';

const alumnosController = new AlumnosController();

class AlumnosHttpHandler {
  async getAlumnos(request: Request, response: Response, next: NextFunction) {
    try {
      const alumnos = await alumnosController.getAllAlumnos();
      response.json(alumnos);
    } catch (error) {
      next(error);
    }
  }
}

export default AlumnosHttpHandler;