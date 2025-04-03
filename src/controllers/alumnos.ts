import getAlumnosFromDB from '../db/alumnos';

class AlumnosController {
  async getAllAlumnos() {
    const allAlumnos = await getAlumnosFromDB();

    return allAlumnos.map(alumno => {
      let mensaje = '';

      if (alumno.calificacion > 90 && !alumno.adeudos) {
        mensaje = '¡Te graduaste con honores!';
      } else if (alumno.calificacion > 90 && alumno.adeudos) {
        mensaje = 'Tenías honores, pero tienes un adeudo.';
      } else if (alumno.calificacion >= 70 && alumno.calificacion <= 90) {
        mensaje = 'Pasaste muy apenas.';
      } else if (alumno.calificacion < 70 && !alumno.adeudos) {
        mensaje = 'Como no tienes adeudos, tienes derecho a un examen de recuperación.';
      } else if (alumno.calificacion < 70 && alumno.adeudos) {
        mensaje = 'Expulsado.';
      }

      return {
        matricula: alumno.matricula,
        mensaje,
      };
    });
  }
}

export default AlumnosController;