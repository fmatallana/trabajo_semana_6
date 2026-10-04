const cors = require("cors");
const mysql = require("mysql2");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());
app.post("/api/registrar_prestamo", (req, res) =>
{const { nombre, titulo, fecha_prestamo, fecha_devolucion } = req.body;
res.json({ mensaje: "Datos recibidos en el servidor" });
console.log(nombre, titulo, fecha_prestamo, fecha_devolucion);
const sql = "INSERT INTO prestamos (nombre, titulo, fecha_prestamo, fecha_devolucion) VALUES (?, ?, ?, ?)";
const valores = [nombre, titulo, fecha_prestamo, fecha_devolucion];
db.query(sql, valores, (err, result) => { if (err) { console.error("Error al insertar:", err);
return res.status(500).json({ error: "Error en la base de datos" }); } res.json({ mensaje: "Préstamo guardado exitosamente en MySQL" }); });
});

app.listen(3000, () =>
     { console.log("Servidor corriendo en http://localhost:3000"); });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca' });

db.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err); }
        else {
            console.log("¡Conexión exitosa a la base de datos MySQL!");
        }});


