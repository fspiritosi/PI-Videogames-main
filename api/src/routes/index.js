const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getVideogames, getVGbyId } = require("../controllers/videogames.controllers.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', getVideogames);
router.get('/videogames/:id', getVGbyId)

module.exports = router;
