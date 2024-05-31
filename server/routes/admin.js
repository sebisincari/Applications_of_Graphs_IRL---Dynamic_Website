const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcrypt');//used for encrypt and decript password
const jwt = require('jsonwebtoken');

const adminLayout = '../views/layouts/admin';
const jwtSecret = process.env.JWT_SECRET;

//Admin login page

router.get('/admin', async(req, res) => {


    try{
        const locals = {
            title: 'Admin',
            description: 'This is the home page of the Applicability of graphs IRL project.'
          }

        res.render('admin/index', {locals: locals, layout: adminLayout});
    }catch(error){
      console.log(error);
    }
  });


//Admin - Check Login

router.post('/admin', async (req, res) => {
    try {
      const { username, password } = req.body;
      
      const user = await User.findOne( { username } );
  
      if(!user) {
        return res.status(401).json( { message: 'Invalid credentials' } );
        //the request has not been applied because it lacks valid authentication credentials for the target resource
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if(!isPasswordValid) {
        return res.status(401).json( { message: 'Invalid credentials' } );
      }
  
      const token = jwt.sign({ userId: user._id}, jwtSecret );
      res.cookie('token', token, { httpOnly: true }); 
      res.redirect('/dashboard');
  
    } catch (error) {
      console.log(error);
    }
  });


//Admin - Register
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await User.create({ username, password:hashedPassword });
      res.status(201).redirect('/admin');
    } catch (error) {
      if(error.code === 11000) {
        res.status(409).json({ message: 'User already in use'});
      }
      res.status(500).json({ message: 'Internal server error'})
    }

  } catch (error) {
    console.log(error);
  }
});

//Funcția authMiddleware este un middleware de autentificare într-o aplicație Express.js. 
//Aceasta verifică dacă există un token JWT (JSON Web Token) în cookies-urile cererii (request).
//se asigură că toate cererile care trec prin el sunt de la utilizatori autentificați.

const authMiddleware = (req, res, next ) => {
  const token = req.cookies.token;

  if(!token) {
    return res.status(401).json( { message: 'Unauthorized 1'} );
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    console.log(decoded);
    req.userId = decoded.userId;
    next();
  } catch(error) {
    res.status(401).json( { message: 'Unauthorized 2'} );
  }
}



//Admin - Dashboard
router.get('/dashboard', authMiddleware, async (req, res) => {
  try {
    const locals = {
      title: 'Dashboard',
      description: 'Simple Blog created with NodeJs, Express & MongoDb.'
    };

    const data = await Post.find();

    //console.log(req.decoded);
    res.render('admin/dashboard', {
      locals,
      data,
      userId: req.userId, // Trimite obiectul user către șablon
      layout: adminLayout
    });

  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error 4');
  }
});

//Admin dashboard - Register
  router.get('/register', async (req, res) => {
    try {
      const locals = {
        title: 'Dashboard',
        description: 'Simple Blog created with NodeJs, Express & MongoDb.'
      }
  
      const data = await Post.find();
      res.render('admin/register', {
        locals,
        data,
        //userId: req.decoded.userId, // Trimite obiectul user către șablon
        layout: adminLayout
      });
  
    } catch (error) {
      console.log(error);
    }
  
  });

//Create new post
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

//post this new post
router.post('/add-post', authMiddleware, async (req, res) => {
  try {
    const { title, numOfNodes, edgesList } = req.body;
    
    // Transformăm edgesList în array de perechi de numere
    const edgesArray = edgesList.map(edge => [parseInt(edge[0]), parseInt(edge[1])]);

    const newPost = new Post({
      title: title,
      numOfNodes: parseInt(numOfNodes),
      edgesList: Array.isArray(edgesList) ? edgesList.map(edge => [parseInt(edge[0]), parseInt(edge[1])]) : [],
      userId: req.userId
    });

    await newPost.save(); // Salvează instanța nou creată a modelului Post în baza de date
    res.redirect('/dashboard');
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});


//delete post
router.delete('/delete-post/:id', authMiddleware, async (req, res) => {

  try {
    await Post.deleteOne( { _id: req.params.id } );
    res.redirect('/dashboard');
  } catch (error) {
    console.log(error);
  }

});

//logout
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  //res.json({ message: 'Logout successful.'});
  res.redirect('/');
});


router.get('/*', async (req, res) => {
  const locals = {
    title: 'Applicability of graphs IRL',
    description: 'This is the home page of the Applicability of graphs IRL project.'
  };

  try {
    // Set status to 404 and render the custom 404 page
    res.status(404).render('404', { locals: locals });
  } catch (error) {
    console.log(error);
    // Optional: Render a generic error page in case something goes wrong
    res.status(500).render('error', { error: error });
  }
});

module.exports = router;