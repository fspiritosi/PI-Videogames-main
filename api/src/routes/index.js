const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getVideogames, getVGbyId, createVG } = require("../controllers/videogames.controller.js");
const { getGenres } = require("../controllers/genres.controller.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', getVideogames);
router.get('/videogames/:id', getVGbyId)
router.get('/genres', getGenres)
router.post("/videogames", createVG);

module.exports = router;
