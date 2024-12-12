import { Outlet, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getIngredients, getRecipeById } from "../../services/recipe.api";
import viewRecipePage from "./viewRecipePage.style.scss";
import Reviews from "../../components/Review/Reviews";
import { useAuth } from "../../contexts/authContext";


const ViewRecipePage = () => {
  const [recipe, setRecipe] = useState();
  // const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();
  // console.log("recipes", recipe);
  const { token } = useAuth();

  useEffect(() => {
    const getData = async () => {
      const path = window.location.pathname;
      const id = path.split("/").pop();
      getRecipeById(id, token).then((recipeReq) => {
        console.log(recipeReq);
        setRecipe(recipeReq);
      });
      // getIngredients().then((ingredients) => setIngredients(ingredients));
    };
    if(token){
      getData();
    }
  }, [token]);

  if(!recipe){
    return (<div>Loading...</div>);
  }

  return (
    <div className="ViewRecipePage">
      {recipe && (
        <div className="recipe">
          <div className="recipe-container">
            <div className="recipe-description">
              {/* Left Column - Image */}
              <div className="left-column">
                {/*  */}
                <img src={recipe.images} alt="Recipe" />
              </div>
              <dev className="right-column">
                <div className="presentation">
                  <h1>{recipe.Title}</h1>
                  <p className="description">{recipe.Description}</p>
                </div>
                <div className="time-and-servings">
                  <p>Servings: {recipe.servings}</p>
                  <p>Prep: {recipe.prepTime} min</p>
                  <p>Cook: {recipe.cookTime} min</p>
                </div>
              </dev>
            </div>

            <div className="recipe-details">
              <div className="ingredients">
                <h2>Ingredients</h2>
                <ul>
                  {Object.keys(recipe.ingredients).map((key) => (
                    <div key={key}>
                      {recipe.ingredients[key].ingredient.name}:{" "}
                      {recipe.ingredients[key].quantity}{" "}
                      {recipe.ingredients[key].ingredient.measureUnit}
                    </div>
                  ))}
                </ul>
              </div>
              <div className="instructions">
                <h2>Instructions</h2>
                {Object.keys(recipe.instructions).map((key) => (
                  <div key={key}>
                    <h3>Task {key}</h3>
                    <p>{recipe.instructions[key]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reviews">
              <Reviews recipeId={recipe.Id} />
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default ViewRecipePage;
