const express = require('express');
const Country = require('../models/EventCreate')

const router = express.Router();

// Route to get all countries
router.get('/', (req, res, next) => {
  Country.find()
    .then(countries => {
      res.json(countries);
    })
    .catch(err => next(err))
});

// Route to add a country
router.post('/', (req, res, next) => {
  let { name, capitals, area, description } = req.body
  Country.create({ name, capitals, area, description })
    .then(country => {
      res.json({
        success: true,
        country
      });
    })
    .catch(err => next(err))
});

router.get('/haha', (req, res, next) => {
  // res.status(200).json("I have checked this route !!!")

    data = {
      theLog: "I have checked this route !!!"
    }
    
    res.json({
      success: true,
      data
    });
})

module.exports = router;
