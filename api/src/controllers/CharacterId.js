const URL = 'https://swapi.dev/api/people'
const axios = require('axios')


const getCharId = (req, res) => {
    const {id} = req.params
try {
    axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(({name, gender, height, homeworld, hair_color,skin_color, eye_color, birth_year, }) => {
        if(name){
            const character = {
                name: name,
                height: height,
                hair: hair_color,
                skin: skin_color,
                eyes: eye_color,
                birth: birth_year,
                gender: gender,
                homeworld: homeworld,
                
            }
            return res.status(200).json(character)
        }
        return res.status(404).send('Character by ID not found')
    })
} catch (error) {
    return res.status(500).send(error.message)
}
}

module.exports ={
    getCharId
}