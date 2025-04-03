import { Request, Response } from 'express';
import { students } from '../db/students';
import { getStudentsWithStatus } from '../controllers/studentController';

export const getStudentsStatus = (req: Request, res: Response) => {
    try {
        const studentsWithStatus = getStudentsWithStatus(students);
        res.json(studentsWithStatus);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el estado de los estudiantes' });
    }
}; 