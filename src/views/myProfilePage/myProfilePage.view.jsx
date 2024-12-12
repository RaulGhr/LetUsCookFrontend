import { Outlet, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import RecipePreview from '../../components/RecipePreview/RecipePreview.component';

import "./myProfilePage.style.scss";
import addIcon from "../../assets/icons/plus.png";
import { getRecipesPreview, getUserFavoritesRecipesPreview } from '../../services/recipe.api';
import { getUserData } from '../../services/creators.api';

const ProfilePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [user, setUser] = useState(null);
    const [displaySection, setDisplaySection] = useState("created");
    const navigate = useNavigate();

    useEffect(() => {
        getRecipesPreview().then(recipes => setRecipes(recipes));
        getUserData().then(userData => setUser(userData));
    }, []);

    useEffect(() => {
        if (displaySection === "created") {
            getRecipesPreview().then(recipes => setRecipes(recipes));
        } else {
          getUserFavoritesRecipesPreview().then(recipes => setRecipes(recipes));
        }
    },[displaySection]);

    if (!user) {
        return <div>Loading...</div>;
    }

    

    return (
      <div className="ProfilePage">
        <div className="profileHeader">
          <img
            src={user.ProfilePicture}
            alt="Profile"
            className="profilePicture"
          /> 
          <div className="profileInfo">
            <h2>{user.Username}</h2>
            <p>{user.Description || "No description available"}</p>
            <div className="followStats">
              <span>{user.FollowingCount} Following</span>
              <span>{user.FollowersCount} Followers</span>
            </div>
          </div>
        </div>
        
        <div className="tabMenu">
          <button onClick={() => setDisplaySection("created")} className={displaySection==='created'?'selected':''}>Created</button>
          <button onClick={() => setDisplaySection("saved")} className={displaySection==='saved'?'selected':''}>Saved</button>
        </div>

        <div className="recipeList">
          {recipes.map((recipe, index) => (
            <RecipePreview
              key={index}
              Id={recipe.Id}
              Title={recipe.Title}
              Img={recipe.Img}
              IngredinetsNumber={recipe.IngredinetsNumber}
              PrepTime={recipe.PrepTime}
              Rateing={recipe.Rateing}
              User={recipe.User}
              isFavorite={recipe.isFavorite}
            />
          ))}
        </div>

        <button className="addButton" onClick={() => navigate("/addRecipe")}>
          <img src={addIcon} alt="" />
        </button>
      </div>
    );
};

export default ProfilePage;
