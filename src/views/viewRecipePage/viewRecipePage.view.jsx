import { Outlet, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getIngredients, getRecipeById } from "../../services/recipe.api";
import viewRecipePage from "./viewRecipePage.style.scss";

const ViewRecipePage = () => {
  const [recipes, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split("/").pop();
    getRecipeById(id).then((recipes) => {
      console.log(recipes);
      setRecipe(recipes);
    });
    getIngredients().then((ingredients) => setIngredients(ingredients));
  }, []);

  //my recipe has id , userid, title ,images, description  , instructions,  servings , preptime ,cooktime

  // const navigate = useNavigate();
  return (
    <div className="ViewRecipePage">
      <div className="recipe-container">
        {/* Left Column - Image */}
        <div className="left-column">
          <h1>{recipes.Title}</h1>
          <img src={recipes.Img} alt="Recipe" />
        </div>

        {/* Right Column - Recipe Details */}
        <div className="right-column">
          <p className="description">{recipes.Description}</p>

          <div className="ingredients">
            <h2>Ingredients</h2>
            <ul>
              {Object.keys(ingredients).map((key) => (
                <li key={key}>
                  {ingredients[key].Name} - {ingredients[key].MesureUnit}
                </li>
              ))}
            </ul>
          </div>

          <div className="instructions">
            <h2>Instructions</h2>
            <p>{recipes.Instructions}</p>
          </div>

          <div className="time-and-servings">
            <p>Servings: {recipes.Servings}</p>
            <p>Prep Time: {recipes.PrepTime}</p>
            <p>Cook Time: {recipes.CookTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipePage;
