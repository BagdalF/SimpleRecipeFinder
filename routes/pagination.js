const { MongoClient } = require('mongodb');
const uri = 'mongodb://NormalUser:'+process.env.MONGO_PW+'@localhost:27017/RecipeFinder';

const quantifyPages = async (searchTerm, pageCounter) => {
    const agg = [
        {
          '$match': {
            '$text': {
              '$search': searchTerm
            }
          }
        }, {
          '$count': 'recipesAmount'
        }
    ];
    
    const client = new MongoClient(uri);
    const coll = client.db('RecipeFinder').collection('Recipes');

    const pageCursor = coll.aggregate(agg);
    const result = await pageCursor.toArray();
    console.log(result[0].recipesAmount);
    //int nearestInt = (int) (number + 0.5);
    let pagesAmount = Math.ceil((result[0].recipesAmount / 15))


    await client.close();

    console.log(pagesAmount);
    return pagesAmount;
}

module.exports = { quantifyPages }
