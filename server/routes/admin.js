const express = require('express');
const router = express.Router();
const Post = require('../models/post');

const adminLayout = '../views/layouts/admin';

router.get('/admin', async(req, res) => {


    try{
        const locals = {
        title: 'My Graphs',
        description: 'This page is about the Applicability of graphs IRL project.'
        }
        res.render('admin/index', {locals, adminLayout});
    }catch(error){
      console.error('Error: ${error.message}');
    }
  });

module.exports = router;