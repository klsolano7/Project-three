const express = require("express");
const EventCreate = require("../models/EventCreate");
const { isLoggedIn } = require ('../middlewares')
const router = express.Router();
const uploader = require('../configs/cloudinary-setup');



router.post("/addevent/:id",uploader.single("imageUrl"), isLoggedIn, (req, res, next) => {
  console.log("INSIDE POST ROUTE FOR CREATING EVENT")
  let { name, address, city, state, zipcode, description, category } = req.body;
  let userID  = req.user._id;
  console.log(req.body)

  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }

  console.log("-=-=-=-=-=-=-=-=-==-",req.body, req.file)
 

  
  EventCreate.create({
    name,
    address,
    city,
    state,
    zipcode,
    description,
    category,
    userID,
    imageUrl: req.file.secure_url
  })
    .then(event => {
      console.log("YEAAAAHHHHHH IT WORKS!!!", event)
      res.json({
        success: true,
        event
      });
    })
    .catch(err => {
      
      console.log("NOTTTTT WORKING")
      next(err)});
});

router.get("/searchevent/:id", (req, res, next) => {
  console.log(9999);
  let id = req.params.id;
  EventCreate.findById(id)
    .then(response => {
      console.log('response',response)
      res.json(response);
    })
    .catch(err => console.error(err));
});


router.get("/events/geteventlist", (req, res, next) => {
  EventCreate.find().then(eventItems => {
    console.log("this is the user info --------- ", req.user);
    res.json({
      eventItems
    });
  });
});

router.post(`/editevent/:id`, (req, res, next) => {
  //to edit item when posted//
  let newEdit = req.body.newEdit;
  console.log('iiiiiidddddddd',req.params.id, newEdit)
  EventCreate.findByIdAndUpdate(req.params.id,  newEdit ).then(editedItem => {
    console.log("eddiited one : ", editedItem);
    res.json({ res: editedItem });
  });
});


router.delete('/deleteevent/:id', (req,res,next) =>{ //DELETE ITEM POST ROUTE//
  //let deleteItem = req.body.deleteItem;

  EventCreate.findByIdAndDelete(req.params.id)
  .then(deleteTheEventItem =>{
    res.json({ res: deleteTheEventItem });
  })
})

///////edit profile information////////
router.post(`/editprofile`, (req,res,next) =>{
  let newProfileEdit = req.body.newProfileEdit;
  console.log('iiiiiidddddddd',req.params.id, newProfileEdit)
  EventCreate.findByIdAndUpdate(req.params.id, newProfileEdit).then(editedTheProfileDetails =>{
    res.json({res: editedTheProfileDetails})
  })
})

// router.post(`/eventadded/:id`, (req,res,next) =>{
//   EventCreate.findByIdAndUpdate(req.params.id)
//   .then(addTheEventItem =>{
//     res.json({res: addTheEventItem})
//   })
// })

module.exports = router;
