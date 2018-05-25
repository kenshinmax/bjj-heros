var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

// define hero model

var postSchema = mongoose.Schema({
	id: String,
	firstname: String,
	lastname: String,
	nickname: String,
	image: String,
	cover: String,
	rank: String,
	association: String,
	division: String
});

postSchema.plugin(timestamps);

var Hero = mongoose.model('Hero', postSchema);


//utility func
function isHeroUnique(fullname, cb) {
  var fullname = fullname ? fullname.trim() : '';
  
  Hero.findOne({ 'id': fullname }, function(err, hero) {
    if (err)
      throw err;

    if (!hero) {
      cb();
      return;
    }

    var err;
    if (hero.firstname + "-" + hero.lastname === fullname ) {
      err = {};
      err.fullname = '"' + fullname + '" is not unique';
    }
   
    cb(err);
  });
}

/* GET items listing. */
router.get('/:id', function(req, res, next) {
  
  Hero.find({
    'id': req.params.id
  }, function(err, hero) {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: 'Could not retrieve hero w/ that id'
      });
    }
    if (!hero) {
      return res.status(404).json({
        message: 'Hero not found'
      })
    }
    res.json(hero);
  });

});

/* GET items listing. */
router.get('/', function(req, res, next) {
	Hero
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
    .exec(function(err, heros) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: 'Could not retrieve heros'
        });
      }
      res.json(heros);
    });
});

router.post('/addHero', function(req, res, next) {
  var fullname = req.body.firstname.toLowerCase() + "-" + req.body.lastname.toLowerCase()
  var hero = new Hero({
  	id: fullname,
  	firstname: req.body.firstname,
  	lastname: req.body.lastname,
  	nickname: req.body.nickname,
  	image: fullname  + ".png",
  	cover: fullname + "-cover.png",
  	rank: req.body.rank,
  	association: req.body.association,
  	division: req.body.division
  })
  
  hero.save(function(err, hero) {
    if(err){
      consol.log(err);
      return res.status(500).json({
      	message: 'Could not save hero'
      })
    }
    res.json(hero)
  })

  
});

router.post('/updateHero', function(req, res, next) {
   var fullname = req.body.firstname.toLowerCase() + "-" + req.body.lastname.toLowerCase()
   //console.log("updating.." + fullname)
   isHeroUnique(fullname, function(err) {
      Hero.findOneAndUpdate({
        'id': fullname
      },{
        'firstname': req.body.firstname,
        'lastname': req.body.lastname,
        'nickname': req.body.nickname,
        'rank': req.body.rank,
        'association': req.body.association,
        'division': req.body.division 
      }, function(err) {
        if(err)
          throw err;

        res.json({
          message: 'Hero was updated!!!'
        })
      }
     )
   });

});


router.post('/validate/fields', function (req, res, next) { 
  console.log("in validate", req.body)
  
  var body = req.body;
  var firstname = body.firstname ? body.firstname.trim() : '';

  Hero.findOne({
    'firstname': new RegExp(firstname, "i")
  }, function(err, post) {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: 'Could not find hero for firstname uniqueness'
      });
    }
    if (post) {
      res.json({
        firstname: 'firstname "' + firstname + '" is not unique!'
      });
    } else {
      return res.json({});
    }

  });
})
module.exports = router;