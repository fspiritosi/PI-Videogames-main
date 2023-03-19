const { getGenresApi }=require('../functions/genres.api.js')
const { Genres } = require("../db.js");

const getGenres = async (req, res) => {
    try {
      const allGenres = await getGenresApi();
      allGenres.forEach((e) => {
          Genres.findOrCreate({ where: { apiID: e.apiId, name: e.name } });
      });
      res.status(200).json(allGenres);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { getGenres }



