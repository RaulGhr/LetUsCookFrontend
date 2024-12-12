import axios from 'axios';
import {withLogs, baseUrl, config, authConfig} from '../utils/api.utils';

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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},

];

var favRecipesDemo = [{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
},
{
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
  Rateing: "90",
  isFavorite: true,
  User: {
    username: "Gordon Ramsay",
    profileImage: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
  },
}];

export const getRecipesPreview = async (search,token) => {
  console.log("getRecipesPreview",search,token);

  if(!token){
    return [];
  }
  const result = await axios.get(`${baseUrl}/recipes`,authConfig(token)).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });
  console.log("getRecipesPreview-Result",result);
  if (result.status === 200) {
    return result.data;
  } else {
    return [];
  }

  
};

export const getUserFavoritesRecipesPreview = async () => {
  // return withLogs(axios.get(`${baseUrl}/recipes/favorites`), 'getUserFavoritesRecipesPreview');
  return favRecipesDemo;
};

export const getIngredients = async () => {
  const result = await axios.get(`${baseUrl}/ingredients/getAll`);
  console.log(result.data);
  return result.data;
};
export const getRecipeById = async (id, token) => {
  console.log("getRecipeById",id, token);
  const result = await axios.get(`${baseUrl}/recipes?recipe_id=${id}`, authConfig(token)).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });

  if (result.status === 200) {
    return result.data[0];
  } else {
    return result;
  }
};
  
export const saveRecipe = async (recipe, token) => {
    const result = await axios.post(`${baseUrl}/recipes/create`, recipe,authConfig(token)).then((response) => {
      return response;
    }).catch((error) => {
      return error;
    });

    if (result.status === 200) {
      return result.data;
    } else {
      return result;
    }

    
}

export const changeRecipeFavoriteStatus = async (recipeId, status, token) => {

  console.log("changeRecipeFavoriteStatus",recipeId, status, token);

  if(status == true){
  
    const result = await axios.post(`${baseUrl}/favorite_recipes/create`, { 'recipe_id':recipeId },authConfig(token)).then((response) => {
        return response;
      }).catch((error) => {
        return error;
      });
    if (result.status === 200) {
      return result.data;
    } else {
      return result;
    }
  }else{
    const result = await axios.post(`${baseUrl}/favorite_recipes/delete`,{ 'recipe_id':recipeId },authConfig(token)).then((response) => {
      return response;
    }).catch((error) => {
      return error;
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result;
    }
  }

};