const express = require("express");
const EventCreate = require("../models/EventCreate");

const router = express.Router();

router.post("/addevent/:id", (req, res, next) => {
  let { name, address, city, state, zipcode, description, category } = req.body;
  let userID  = req.params.id;
  console.log(req.body)
  
  EventCreate.create({
    name,
    address,
    city,
    state,
    zipcode,
    description,
    category,
    userID
  })
    .then(event => {
      res.json({
        success: true,
        event
      });
    })
    .catch(err => next(err));
});

router.get("/searchevent/:id", (req, res, next) => {
  console.log(9999);
  let id = req.params.id;
  EventCreate.findById(id)
    .then(response => {
      res.json(response);
    })
    .catch(err => console.error(err));
});

// router.get('/geteventlist', (req, res,next)=>{
//   EventCreate.findById(req.user._id)
//   data = {
//     name: "I have checked this route"
//   }

//   res.json({
//     success: true,
//     data
//   })

// })

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
  console.log('iiiiiidddddddd---------',req.params.id)
  EventCreate.findByIdAndDelete(req.params.id)
  .then(deleteTheEventItem =>{
    res.json({ res: deleteTheEventItem });
  })
})

// router.post(`/eventadded/:id`, (req,res,next) =>{
//   EventCreate.findByIdAndUpdate(req.params.id)
//   .then(addTheEventItem =>{
//     res.json({res: addTheEventItem})
//   })
// })

module.exports = router;
