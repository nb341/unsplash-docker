var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/images', (req, res, next)=>{
  res.json({msg: "kkello"})
})

router.post('/images', (req, res, next)=>{
  res.json({msg: "hello"})
})

router.delete('/image/:id', (req, res, next)=>{
  res.end()
})

module.exports = router;
