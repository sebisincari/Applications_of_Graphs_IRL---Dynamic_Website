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
      const data = await Post.find();//find all posts
      res.render('index', {data: data, locals: locals});
    }catch(error){
      console.log(error);
    }
  });




// GET; Post: id



module.exports = router;





//  function insertPostData(){
//   Post.insertMany([
//     {
//       title: 'First Graph',
//       numOfNodes: 5,
//       edgesList: [
//         [0, 1],
//         [1, 2],
//         [2, 3],
//         [3, 4],
//         [4, 0]
//       ]
//     }
//   ])
// }

//insertPostData();

