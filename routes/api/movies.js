const express = require('express');
const router = express.Router();
const { getAllMovies, getMovie, getAllMoviesWithRatings } = require('../../models/movie');
const sendJSONresponse = (req, res) => res.json(res.rows);

// handle all the routes


router.route('/')
  .get(getAllMovies, sendJSONresponse);
  // .put()
  // .delete()

// movies.route('/api/movies')







// Get movies withrating BONUS

// Get single movie

module.exports = router;




