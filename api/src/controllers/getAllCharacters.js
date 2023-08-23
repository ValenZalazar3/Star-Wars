const URL = "https://swapi.dev/api/people";
const axios = require("axios");


const getAllCharacters = async (req, res) =>{
    try {
     const {data} = await axios(`${URL}`)
     const character = data.results.map((charac) =>{
         return{
             id: charac.id,
             name: charac.name,
             gender: charac.gender,
             homeworld: charac.homeworld,
    
         }
     })
     return res.status(200).json(character);
        
    } catch (error) {
        return res.status(500).send("Problems in All Character");
    }
       
}

module.exports = {
  getAllCharacters,
};
