const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Habilita CORS para todas las solicitudes
app.use(express.json());

app.get('/api/endpoint', (req, res) => {
    const datos = {
        mensaje: "Hola desde la API de React",
        data: [1, 2, 3, 4]
    };
    res.json(datos);
});

app.listen(PORT, () => {
    console.log(`Servidor de React API ejecutándose en http://localhost:${PORT}`);
});
