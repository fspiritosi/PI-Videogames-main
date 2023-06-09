require('dotenv').config()
const axios = require('axios')
const { Videogame, Genres } = require('../db.js')
const { URL_API, KEY_API } = process.env


async function getApiData(){
    try {

        let allVideoGamesApiData = [];

        for(let i = 1; i < 6; i++){
          const apiData = await axios.get(
            `${URL_API}?key=${KEY_API}&page=${i}`
          );
          allVideoGamesApiData.push(apiData)
        }
        
        allVideoGamesApiData = await Promise.all(allVideoGamesApiData);

        let arrAllVideoGamesMapped = allVideoGamesApiData.map(response => response.data.results.map(vgame => {
          return {
            id: vgame.id,
            name: vgame.name,
            // platforms: vgame.platforms,
            background_image: vgame.background_image,
            // released: vgame.released,
            // rating: vgame.rating
          }
        }))

        let allVideogames = arrAllVideoGamesMapped.flat()
        
        return allVideogames
          

        

    } catch (error) {
        console.log(error)
    }
}

const getDBdata = async() => {
  return await Videogame.findAll({
    include: {
      model: Genres,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
}

const getAllvideogames = async () => {
  const apiInfo = await getApiData();
  const dbInfo = await getDBdata();
  const allInfo = [...apiInfo, ...dbInfo]

  return allInfo;
}


async function getVideogameById(id){
  try {
    const videogameID = await axios.get(
      `${URL_API}/${id}?key=${KEY_API}`
      // `https://api.rawg.io/api/games/${id}?key=14792875481148a1bb7bc5a7aa1714cd`
    );
    
    let vgIdUnique = videogameID.data;
    

    return {
      id: vgIdUnique.id,
      name: vgIdUnique.name,
      background_image: vgIdUnique.background_image,
      platform: vgIdUnique.parent_platforms,
      description: vgIdUnique.description,
      released: vgIdUnique.released,
      rating: vgIdUnique.rating,
      genres: vgIdUnique.genres
    };
  } catch (error) {
    console.log(error)
  }

}


module.exports = { getAllvideogames ,getApiData, getVideogameById }