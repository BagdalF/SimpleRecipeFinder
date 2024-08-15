const mongoose = require('mongoose');
let recipeSchema = mongoose.Schema({
    title: String,
    ingredients: [String],
    directions: [String],
    link: String
})

module.exports = mongoose.model('RecipeDisplay', recipeSchema)