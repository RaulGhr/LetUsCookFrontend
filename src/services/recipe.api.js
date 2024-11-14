import axios from 'axios';
import {withLogs, baseUrl, config} from '../utils/api.utils';

var recipesDemo = [{
  Id: "1",
  Title: "Recipe 1",
  Description: "This is a description of the recipe",
  Instructions: {
    "1": "This is a description of the recipe",
    "2": "This is a description of the recipe",
    "3": "This is a description of the recipe",
  },
  Servings: "4",
  Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  Ingredinets: {
    "Ingredient 1": {
      Name: "Ingredient 1",
      Quantity: "200",
      MesureUnit: "g",
    },
    "Ingredient 2": {
      Name: "Ingredient 2",
      Quantity: "5",
      MesureUnit: "pieces",
    },
    "Ingredient 3": {
      Name: "Ingredient 3",
      Quantity: "100",
      MesureUnit: "ml",
    },
  },
  PrepTime: "15",
  CookTime: "30",
},

];

export const getRecipesPreview = async () => {
  // return withLogs(axios.get(`${baseUrl}/recipes`), 'getRecipesPreview');


  return recipesDemo;
};

export const getIngredients = async () => {
  // return withLogs(axios.get(`${baseUrl}/ingredients`), 'getIngredients');
  const ingredients = {
    "Ingredient 1": {
      Name: "Ingredient 1",
      MesureUnit: "g",
    },
    "Ingredient 2": {
      Name: "Ingredient 2",
      MesureUnit: "pieces",
    },
    "Ingredient 3": {
      Name: "Ingredient 3",
      MesureUnit: "ml",
    },
  };

  return ingredients;
};
export const getRecipeById = async (id) => {
  return getRecipesPreview().then((recipes) => {
    return recipes.find((recipe) => recipe.Id == id);
  });
};
  
export const saveRecipe = async (recipe) => {
    // return withLogs(axios.post(`${baseUrl}/recipes`, recipe), 'saveRecipe');
    const demoRecipe = {
      Id: "2",
      Title: "Recipe 2",
      Description: "This is a description of the recipe",
      Instructions: {
        "1": "This is a description of the recipe",
        "2": "This is a description of the recipe",
        "3": "This is a description of the recipe",
        "4": "This is a description of the recipe",
      },
      Servings: "5",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Ingredinets: {
        "Ingredient 1": {
          Name: "Ingredient 1",
          Quantity: "300",
          MesureUnit: "g",
        },
        "Ingredient 2": {
          Name: "Ingredient 2",
          Quantity: "10",
          MesureUnit: "pieces",
        },
        "Ingredient 3": {
          Name: "Ingredient 3",
          Quantity: "200",
          MesureUnit: "ml",
        },
      },
      PrepTime: "20",
      CookTime: "30",
    };
    recipesDemo.push(demoRecipe);
    alert('Recipe saved');
}