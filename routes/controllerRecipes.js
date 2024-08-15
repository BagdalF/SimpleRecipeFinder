const { MongoClient } = require('mongodb');
const uri = 'mongodb://NormalUser:'+process.env.MONGO_PW+'@localhost:27017/RecipeFinder';

const searchRecipes = async (searchTerm, pageCounter) => {
  const agg = [
    {
      '$match': {
        '$text': {
          '$search': searchTerm
        }
      }
    }, {
      '$project': {
        '_id': 0, 
        'title': 1, 
        'ingredients': 1, 
        'directions': 1, 
        'link': 1,
        'score': {
          '$meta': 'textScore'
        }
      }
    }, {
      '$sort': {
        'score': -1,
        'title': 1
      }
    }, {
      '$skip': (pageCounter-1) * 15
    }, {
      '$limit': 15
    }
  ];
  const client = new MongoClient(uri);
  const coll = client.db('RecipeFinder').collection('Recipes');

  const finderCursor = coll.aggregate(agg);
  const result = await finderCursor.toArray();

  await client.close();
  return result;
}

module.exports = { searchRecipes }

  //let recipeDisplay = [];
  //for (i=0;i<result.length;i++) {
  //  let recipe = new RecipeItem({
  //    title: result[i].title,
  //    ingredients: result[i].ingredients,
  //    directions: result[i].directions,
  //    link: result[i].link
  //  })
  //  recipeDisplay += recipe;
  //}
  //console.log(recipeDisplay); funciona