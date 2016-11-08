const express = require('express');
const movies = express.Router();
const { getAllMovies, getMovie, updateMovie, deleteMovie, getAllMoviesWithRatings } = require('../../models/movie');
const sendJSONresponse = (req, res) => res.json(res.rows);
const sendOkResponse = (req, res) => res.status(204).send();

// handle all the routes


movies.route('/')
  .get(getAllMovies, sendJSONresponse);
  // .post();

movies.route('/:id')
  .get(getMovie, sendJSONresponse)
  .put(updateMovie, sendOkResponse)
  .delete(deleteMovie, sendOkResponse);

// movies.route('/:id/:title')
//   .put(updateMovie, sendJSONresponse);







// Get movies withrating BONUS

// Get single movie

module.exports = movies;




