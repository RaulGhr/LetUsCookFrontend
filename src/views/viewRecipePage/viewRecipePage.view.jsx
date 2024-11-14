import { Outlet, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getIngredients, getRecipeById } from "../../services/recipe.api";
import viewRecipePage from "./viewRecipePage.style.scss";

const ViewRecipePage = () => {
  const [recipe, setRecipe] = useState();
  // const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();
  console.log("recipes",recipe);

  useEffect(() => {

    const getData = async () => {
      const path = window.location.pathname;
      const id = path.split("/").pop();
      getRecipeById(id).then((recipes) => {
        console.log(recipes);
        setRecipe(recipes);
      });
      // getIngredients().then((ingredients) => setIngredients(ingredients));
    };

    getData();


  }, []);

  //my recipe has id , userid, title ,images, description  , instructions,  servings , preptime ,cooktime

  // const navigate = useNavigate();
  return (
    <div className="ViewRecipePage">
      {recipe &&
        <div className="recipe-container">
          <div className="recipe-description">
          {/* Left Column - Image */}
            <div className="left-column">
              {/*  */}
              <img src={recipe.Img} alt="Recipe" />
            </div>
            <dev className="right-column">
              <div className="presentation">

                <h1>{recipe.Title}</h1>
                <p className="description">{recipe.Description}</p>
              </div>
              <div className="time-and-servings">
                <p>Servings: {recipe.Servings}</p>
                <p>Prep: {recipe.PrepTime} min</p>
                <p>Cook: {recipe.CookTime} min</p>
              </div>
            </dev>


          </div>

          <div className="recipe-details">
            <div className="ingredients">
            <h2>Ingredients</h2>
              <ul>
                {Object.keys(recipe.Ingredinets).map((key) => (
                  <div key={key}>
                    {recipe.Ingredinets[key].Name}: {recipe.Ingredinets[key].Quantity} {recipe.Ingredinets[key].MesureUnit}
                  </div>
                ))}
              </ul>
            </div>
            <div className="instructions">
              <h2>Instructions</h2>
                {Object.keys(recipe.Instructions).map((key) => (
                  <div key={key}>
                    <h3>Task {key}</h3>
                    <p>{recipe.Instructions[key]}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ViewRecipePage;
