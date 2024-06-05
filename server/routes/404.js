const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// Home page route
router.get('/*', async (req, res) => {
  const locals = {
    title: 'Applicability of graphs IRL',
    description: 'This is the home page of the Applicability of graphs IRL project.'
  };

  try {
    // Set status to 404 and render the custom 404 page
    res.status(404).render('layouts/404', { locals: locals, layout: 'layouts/404'});
  } catch (error) {
    console.log(error);
    // Optional: Render a generic error page in case something goes wrong
    res.status(500).render('error', { error: error });
  }
});

module.exports = router;