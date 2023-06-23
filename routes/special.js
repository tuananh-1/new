var express = require('express');
var router = express.Router();
const ToySpecialModel = require('../models/ToySpecialModel')

router.get('/', async(req, res)=> {
  const toySpecials = await ToySpecialModel.find({})
  res.render('special', {toySpecials: toySpecials});
});

router.get('/add', async (req, res)=>{
  res.render('barbie/add');
})

router.post('special/add', async( req, res)=>{
  var toy = req.body;
  await ToySpecialModel.create(toy);
  res.redirect('/');
})

router.get('/edit/:id', async (req, res) => {
  var toy = await ToySpecialModel.findById(req.params.id);
  res.render('barbie/edit', { toy : toy});
})

router.post('/edit/:id', async (req, res) => {
  await ToySpecialModel.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
})
module.exports = router;
