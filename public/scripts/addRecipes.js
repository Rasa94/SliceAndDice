import { Recipe } from "./recipeConstructor.js"

const name = document.getElementById('recipeName');
const description = document.getElementById('recipeDescription');
const ingredients = document.getElementById('recipeIngredients');
const steps = document.getElementById('recipeSteps');

const url = 'http://localhost:5000/sliceanddice/';

// // Adds the recipe to the DB 

addRecipeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let ing = ingredients.value.split(",");
    let stp = steps.value.split(",");
    
    let recipe = new Recipe(name.value, description.value, ing, stp);
    let jsonRecipe = JSON.stringify(recipe); 

    console.log(jsonRecipe); 

    let req = new Request(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: jsonRecipe
    })
        
    fetch(req)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err)) 
}) 