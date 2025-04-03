import express from "express";
import studentRoutes from './src/routes/studentRoutes';

const app = express();
app.use(express.json());

// Rutas de estudiantes
app.use('/api', studentRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

