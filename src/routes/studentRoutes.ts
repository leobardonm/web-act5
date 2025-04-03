import { Router } from 'express';
import { getStudentsStatus } from '../handlers/studentHandler';

const router = Router();

router.get('/estudiantes', getStudentsStatus);

export default router; 