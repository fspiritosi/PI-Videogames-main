const Videogame = require('../models/Videogame');
const { getApiData, getVideogameById } = require('../functions/videogame.api.js')

//GET

const getVideogames = async (req, res) => {
    try {
        const allVgames = await getApiData();
        res.status(200).json(allVgames)
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}


//GET ID 

const getVGbyId = async (req, res) => {
    let {id} = req.params

    try {
        const vgID = await getVideogameById(id);
        res.status(200).json(vgID)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {getVideogames, getVGbyId}