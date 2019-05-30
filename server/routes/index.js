const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const uploader = require('../configs/cloudinary-setup');
const User = require('../models/User')

router.post('/savepic', uploader.single("imageUrl"), isLoggedIn, (req, res, next) => {
  console.log('file is&&&&&&&&&: ', req.file)

  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  User.findByIdAndUpdate(req.user._id, { imageUrl: req.file.secure_url}).then(otherStuff=>{
    res.json({ secure_url: req.file.secure_url });
  })

  // get secure_url from the file object and save it in the 
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
})

router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});



router.get('/me', isLoggedIn, (req,res,next)=>{
  User.findById(req.user._id).then(me=>{
    res.json({me})
  })
})
module.exports = router;
