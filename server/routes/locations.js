var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var timestamps = require('mongoose-timestamp')

// define location model

var locationSchema = mongoose.Schema({
	id: String,
	name: String,
	address: String,
	city: String,
	state: String,
	zipcode: String
})

locationSchema.plugin(timestamps)

var Location = mongoose.model('Locations', locationSchema)

/* GET a list of locations */
router.get('/', function(req, res, next) {
	Location
	  .find({})
	  .select({
      content: 0,
      __v: 0,
      updatedAt: 0,
      createdAt: 0
    })
    .limit(100)
    .sort({
      createdAt: -1
    })
    .exec(function(err, locations) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: 'Could not retrieve locations'
        });
      }
      res.json(locations);
    });
})

/* POST location */
router.post('/createlocation', function(req, res, next) {
  var location = new Location({
    id: req.body.id,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode
  })

  location.save(function(err, location) {
    if(err){
      console.log(err);
      return res.status(500).json({
        message: 'Could not save location'
      })
    }
    res.json(location)
  })
})

router.delete('/deletelocation/:id', function(req, res, next) {
  var locationId = req.body.id;
  Location.findOneAndRemove({id: locationId}, function(err, location) {
    if(err)
      throw err;

    if(!location){
      return res.status(404).json({
        message: 'Could not delete location'
      }) 
    }

    res.json({
      message: 'Location deleted' + locationId
    })

  })
})

module.exports = router;