require('dotenv').config();
const axios = require('axios');
const key = process.env.API_KEY

const search = async (e) => {
    const path = `https://api.spoonacular.com/recipes/complexSearch?query=${e}&addRecipeInformation=true&apiKey=${key}`;
    let result = await axios.get(path).then(data => data);

    return result;
}

module.exports = search;  

