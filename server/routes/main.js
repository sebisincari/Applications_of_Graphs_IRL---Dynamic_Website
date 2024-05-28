const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
    const locals = {
      title: 'Applicability of graphs IRL',
      description: 'This is the home page of the Applicability of graphs IRL project.'
    }
    res.render('index', locals);
  });


// function insertPostData(){
//   Post.insertMany([
//     {
//       title:"Graphs in Social Networks",
//       numOfNodes: 3,
//       content: [[1,1,1],[1,1,1],[1,1,1]]
//     }
//   ])

// }
// insertPostData();

router.get('/myGraphs', async(req, res) => {
    const locals = {
      title: 'My Graphs',
      description: 'This page is about the Applicability of graphs IRL project.'
    }

    try{
      const data = await Post.find();
      res.render('myGraphs', {locals, data});
    }catch(error){
      console.error('Error: ${error.message}');
    }


    
  });

  router.get('/add-post', authMiddleware, async (req, res) => {
    try {
      const locals = {
        title: 'Add Post',
        description: 'Simple Blog created with NodeJs, Express & MongoDb.'
      }
  
      const data = await Post.find();
      res.render('admin/add-post', {
        locals,
        layout: adminLayout
      });
  
    } catch (error) {
      console.log(error);
    }
  
  });

module.exports = router;