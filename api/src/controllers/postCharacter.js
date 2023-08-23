const {Character} = require('../models/Character')


const postCharacter = async (req, res) => {
const {name, genre, homeworld} = req.body
    try { 
        const newCharacter= await Character.create({name, genre, homeworld})
        return res.status(201).json(newCharacter)

        
    } catch (error) {
        return res.status(500).send("No se creo nada... ")
    }
  
}


module.exports= {
    postCharacter
}