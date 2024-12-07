import { Outlet, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import RecipePreview from '../../components/RecipePreview/RecipePreview.component';

import "./explorePage.style.scss";
import addIcon from "../../assets/icons/plus.png";
import {getRecipesPreview} from '../../services/recipe.api';


const ExplorePage = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getRecipesPreview().then(recipes => setRecipes(recipes));
    }, []);



    // const navigate = useNavigate();
    return (
      <div className="ExplorePage">
        <div className="recipeList">
          {recipes.map((recipe, index) => (
            <RecipePreview
              key={index}
              Id={recipe.Id}
              Title={recipe.Title}
              Img={recipe.Img}
              IngredinetsNumber={recipe.IngredinetsNumber}
              PrepTime={recipe.PrepTime}
            />
          ))}
        </div>
        <button className="addButton" onClick={() => navigate("/addRecipe")}>
          <img src={addIcon} alt="" />
        </button>
      </div>
    );
};

export default ExplorePage;