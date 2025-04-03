export interface Student {
    matricula: string;
    nombre: string;
    calificacionFinal: number;
    adeudo: boolean;
}

// Datos ficticios de estudiantes 
export const students: Student[] = [
    {
        matricula: "2024001",
        nombre: "Juan Pérez",
        calificacionFinal: 65,
        adeudo: true
    },
    {
        matricula: "2024002",
        nombre: "María García",
        calificacionFinal: 92,
        adeudo: true
    },
    {
        matricula: "2024003",
        nombre: "Carlos López",
        calificacionFinal: 75,
        adeudo: false
    },
    {
        matricula: "2024004",
        nombre: "Ana Martínez",
        calificacionFinal: 65,
        adeudo: false
    },
    {
        matricula: "2024005",
        nombre: "Pedro Sánchez",
        calificacionFinal: 60,
        adeudo: true
    }
]; 