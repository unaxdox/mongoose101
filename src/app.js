// .env konfigurazioa lehenengo
require('dotenv').config();

const path = require('path');
const express = require('express');
const connectDB = require('./config/database');
const ikasleRoutes = require('./routes/ikasle.routes');
const errorHandler = require('./middleware/error.middleware');

const app = express();

// MongoDB konexioa
connectDB();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware-ak
app.use(express.json()); // Manejo de JSON
app.use(express.urlencoded({ extended: true })); // Manejo de formularios

// Static files
app.use(express.static(path.join(__dirname, 'public'))); // Archivos estáticos en la carpeta "public"

// API routes
app.use('/api', ikasleRoutes); // Las rutas de la API empiezan con /api

// Frontend routes
app.get('/', (req, res) => {
    res.render('index'); // Página principal (si existe en /views/index.ejs)
});

app.get('/test', (req, res) => {
    res.render('test'); // Página de prueba (si existe en /views/test.ejs)
});

// Error handling
app.use(errorHandler); // Middleware para manejar errores

// Configuración del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Zerbitzaria martxan dago ${PORT} portuan`);
});
