require("dotenv").config();
const axios = require("axios");
const { KEY_API } = process.env;

async function getGenresApi(){
    
    try {
        let allGenresApi = [];
        const genresData = await axios.get(`https://api.rawg.io/api/genres?key=${KEY_API}`);
        const apiReq = genresData.data;
        
        let genresMapped = apiReq.results.map((genre) => {
          return { apiId: genre.id, name: genre.name };
        });
        allGenresApi.push(genresMapped);
        const allGender = allGenresApi.flat()     
        return allGender
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getGenresApi}