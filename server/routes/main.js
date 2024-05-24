const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const locals = {
      title: 'Applicability of graphs IRL',
      description: 'This is the home page of the Applicability of graphs IRL project.'
    }
    res.render('index', locals);
  });

  module.exports = router;