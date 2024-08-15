const express = require('express');
var router = express.Router();

const { searchRecipes } = require('./controllerRecipes.js');
const { quantifyPages } = require('./pagination.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "The Recipe Finder",
    recipes: null,
    searchterm: null
  });
});

router.get('/search', async function(req, res) {
  let searchTerm = req.query.search;
  let pageCounter = req.query.page;
  res.render('index', {
    title: "The Recipes for: "+searchTerm,
    searchterm:searchTerm,
    currentpage:pageCounter ?? 1,
    pages: await quantifyPages(searchTerm),
    recipes: await searchRecipes(searchTerm, pageCounter ?? 1)
  });
});

module.exports = router;


