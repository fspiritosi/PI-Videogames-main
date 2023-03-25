const { Videogame } = require("../db.js");
const {
  getApiData,
  getVideogameById,
  getAllvideogames
} = require("../functions/videogame.api.js");

//GET

const getVideogames = async (req, res) => {
  try {
    const allVgames = await getAllvideogames();
    res.status(200).json(allVgames);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//GET ID

const getVGbyId = async (req, res) => {
  let { id } = req.params;

  try {
    const vgID = await getVideogameById(id);
    res.status(200).json(vgID);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//POST

const createVG = async (req, res) => {
  const {
    id,
    name,
    description,
    // platform,
    background_image,
    released,
    rating,
  } = req.body;

  try {
    const dataVG = {
      id,
      name,
      description,
      // platform,
      background_image,
      released,
      rating,
    };

    const newVG = await Videogame.create(dataVG);
    return res.status(200).json(newVG);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

module.exports = { getVideogames, getVGbyId, createVG };

