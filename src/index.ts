import express from 'express';
import cors from 'cors'; // 🔹 Importar cors
import { initializeDB } from './config/database';
import userRoutes from './routes/user.routes';
import AuthRoutes from './routes/auth.routes';
import ServiceRoutes from './routes/service.routes';


const PORT = process.env.PORT || 3000;

const app = express();

// 🔹 Permitir solicitudes desde tu frontend
app.use(cors({ origin: 'http://localhost:8100' }));

app.use(express.json());

// Rutas
app.use("/api/user", userRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/service", ServiceRoutes);

const main = async () => {
    try {
        await initializeDB();

        app.listen(PORT, () => {
            console.log(`📡 Servidor Express corriendo en http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error('❌ FATAL ERROR: No se pudo iniciar la aplicación.', error);
        process.exit(1);
    }
};

main();
