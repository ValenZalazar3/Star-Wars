const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getCharId} = require('../controllers/CharacterId');
const {getAllCharacters} =require('../controllers/getAllCharacters')
const {postCharacter} = require('../controllers/postCharacter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/character/:id', getCharId)
router.get('/character', getAllCharacters)
router.get('/createCharacter', postCharacter)

module.exports = router;
