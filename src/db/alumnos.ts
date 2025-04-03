interface Alumno {
    matricula: string;
    nombre: string;
    calificacion: number;
    adeudos: boolean;
  }
  
  const alumnos: Alumno[] = [
    { matricula: 'A001', nombre: 'Carlos Pérez', calificacion: 95, adeudos: false },
    { matricula: 'A002', nombre: 'Ana Torres', calificacion: 92, adeudos: true },
    { matricula: 'A003', nombre: 'Luis García', calificacion: 85, adeudos: false },
    { matricula: 'A004', nombre: 'Sofía Ramírez', calificacion: 88, adeudos: true },
    { matricula: 'A005', nombre: 'Daniel Hernández', calificacion: 65, adeudos: false },
    { matricula: 'A006', nombre: 'Laura Gómez', calificacion: 60, adeudos: true },
    { matricula: 'A007', nombre: 'Andrés López', calificacion: 73, adeudos: false },
    { matricula: 'A008', nombre: 'Fernanda Díaz', calificacion: 98, adeudos: false },
    { matricula: 'A009', nombre: 'Miguel Ruiz', calificacion: 90, adeudos: true },
    { matricula: 'A010', nombre: 'Gabriela Flores', calificacion: 82, adeudos: false },
    { matricula: 'A011', nombre: 'Raúl Mendoza', calificacion: 55, adeudos: true },
    { matricula: 'A012', nombre: 'Alejandra Silva', calificacion: 91, adeudos: false },
    { matricula: 'A013', nombre: 'Marco Romero', calificacion: 89, adeudos: true },
    { matricula: 'A014', nombre: 'Patricia Castro', calificacion: 45, adeudos: false },
    { matricula: 'A015', nombre: 'Jorge Navarro', calificacion: 92, adeudos: false },
  ];
  
  export default async function getAlumnosFromDB(): Promise<Alumno[]> {
    return alumnos;
  }  