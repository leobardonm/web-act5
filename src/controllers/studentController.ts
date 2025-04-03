import { Student } from '../db/students';

// Funcion para obtener el estado de un estudiante 
export const getStudentStatus = (student: Student): string => {
    if (student.calificacionFinal > 90) { // Si la calificacion final es mayor a 90
        if (!student.adeudo) { // y no tiene adeudo
            return "Te graduaste con honores";
        } else {
            return "Tenias honores pero tienes adeudo";
        }
    } else if (student.calificacionFinal >= 70 && student.calificacionFinal < 90) { // Si la calificacion final es mayor o igual a 70 y menor a 90
        return "Pasaste muy apenas";
    } else {
        if (!student.adeudo) {
            return "Tienes derecho a un examen de recuperación";
        } else {
            return "Expulsado";
        }
    }
};

export const getStudentsWithStatus = (students: Student[]) => {
    return students.map(student => ({
        matricula: student.matricula,
        mensaje: getStudentStatus(student)
    }));
}; 