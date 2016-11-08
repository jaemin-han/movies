const db = require('../lib/dbConnect');

// Your middleware MUST allow limit and offset to be sent
// via query parameters to the db for filtering

// default limit
const limit = 10;
// default offset
const offset = 0;

function getAllMovies(req, res, next) {
  // console.log('get all movies');
db.query(`SELECT * FROM movies LIMIT ${limit} OFFSET ${offset};`)
  .then((data) => {
    res.rows = data;
    // console.log(data);
    next();
  })
  .catch((error) => {
    next(error);
  })
// implement get all movies
}

function getMovie(req, res, next) {

// var movieID = parseInt(req.params.id);
// db.one('SELECT * FROM movies where id = $1', movieID)
//   .then((data) => {
//     res.rows = data;
//     next();
//   })
//   .catch(error => next(error));
// // implement get single movie
}

function updateMovie(req, res, next) {


// implement update
}

function deletemovie(req, res, next) {
// implement delete
}

// BONUS
function getAllMoviesWithRatings(req, res, next) {

}

module.exports = {
  getAllMovies,
  getMovie,
  updateMovie,
  deletemovie,
  getAllMoviesWithRatings
};
