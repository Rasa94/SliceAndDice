import { Recipe } from "./recipeConstructor.js"


const searchQuery = document.getElementById('searchQuery');
const searchResults = document.querySelector('.searchResults');


    
const url = 'http://localhost:5000/channel';
const apiKey = 'e96aa03b6f714b5cb694f837ed31501d';
// const ingredientsApi = `https://api.spoonacular.com/recipes/${element}/analyzedInstructions?apiKey=${apiKey}`;

const query = searchQuery.value; 

// Api call 

const searchApiCall = async () => {

    const getReq = new Request(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&apiKey=${apiKey}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })

    let all = await fetch(getReq).then(data => data.json())
                        .then(data => {
                        let allRecipes = [];
                        data.results.forEach(recipeResult => { 
                                let ingredients = [];
                                let steps = [];
                                let description = recipeResult.summary.split(".");
                                let bundle = recipeResult.analyzedInstructions[0];
                                if(bundle) {
                                    bundle.steps.forEach(element => {
                                        element.ingredients.forEach(el => {
                                            ingredients.push(`<li>${el.name}</li>`);
                                        })
                                        steps.push(`<li>${element.step}</li>`);
                                    }); 
                                    let recipe = new Recipe(recipeResult.title, description[0], ingredients, steps);
                                    allRecipes.push(recipe);
                                }
                            });
                        return allRecipes;
                        }) 

    all.forEach(element => {
        searchResults.innerHTML += `<tr>
                                       <td>${element.name}</td>
                                       <td>${element.description}</td>
                                       <td><ul>${element.ingredients}</ul></td>
                                       <td><ol>${element.steps}</ol></td> 
                                   </tr>`
    })
}

let search = (event) => {
    if(event.keyCode == 13) {
        event.preventDefault(); 
        document.querySelector(".bannerMain").style.animation = "bannerFade linear 1000ms forwards";
        document.querySelector(".box").style.animation = "boxFade linear 1200ms forwards";
        searchApiCall(); 
    }
}

searchQuery.addEventListener('keypress', search);  