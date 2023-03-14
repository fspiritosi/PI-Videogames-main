const videogame = require('./Videogame.js');
const genres = require('./Genres.js')

genres.belongToMany(videogame, {through: 'videogame_genres'})

videogame.belongToMany(genres, { through: "videogame_genres" });