import axios from 'axios';
import {withLogs, baseUrl, config} from '../utils/api.utils';

export const getRecipesPreview = async () => {
  // return withLogs(axios.get(`${baseUrl}/recipes`), 'getRecipesPreview');
  const recipes = [
    {
      Id: "1",
      Title: "Recipe 2",
      Description: "This is a description of the recipe",
      Instructions: "This is a description of the recipe",
      Servings: "4",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
      CookTime: "30",
    },
    {
      Id: "2",
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
    {
      Title: "Recipe 2",
      Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "5",
      PrepTime: "15",
    },
    {
      Title: "Recipe 1",
      Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      IngredinetsNumber: "7",
      PrepTime: "20",
    },
  ];

  return recipes;
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
    alert('Recipe saved');
}