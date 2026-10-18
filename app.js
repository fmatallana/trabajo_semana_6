
const cors = require("cors");
const mysql = require("mysql2");
const express = require("express");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "biblioteca"
});

// Comprobar la conexión
db.connect((err) => {
    if (err) {
        console.error("Error al conectar a MySQL:", err.message);
        return;
    }

    console.log("Conexión exitosa a MySQL");
});

app.post("/api/registrar_prestamo", (req, res) => {
    const {
        nombre,
        titulo,
        fecha_prestamo,
        fecha_devolucion
    } = req.body;

    if (!nombre || !titulo || !fecha_prestamo || !fecha_devolucion) {
        return res.status(400).json({
            error: "Todos los campos son obligatorios"
        });
    }

    const sql = `
        INSERT INTO prestamos
        (nombre, titulo, fecha_prestamo, fecha_devolucion)
        VALUES (?, ?, ?, ?)
    `;

    const valores = [
        nombre,
        titulo,
        fecha_prestamo,
        fecha_devolucion
    ];

    db.query(sql, valores, (err, result) => {
        if (err) {
            console.error("Error al insertar el préstamo:", err.message);

            return res.status(500).json({
                error: "No se pudo guardar el préstamo"
            });
        }

        console.log("Préstamo registrado. ID:", result.insertId);

        return res.status(201).json({
            mensaje: "Préstamo guardado exitosamente en MySQL",
            id: result.insertId
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
