const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// Home page route
router.get('', async(req, res) => {
    const locals = {
      title: 'Applicability of graphs IRL',
      description: 'This is the home page of the Applicability of graphs IRL project.'
    }

    try{
      res.render('index', {locals: locals});
    }catch(error){
      console.log(error);
    }
  });

// About page route
router.get('/about', async(req, res) => {
    const locals = {
      title: 'About',
      description: 'This is the about page of the Applicability of graphs IRL project.'
    }

    try{
      res.render('/aboutMe', {locals: locals});
    }catch(error){
      console.log(error);
    }
  });

module.exports = router;