import { Outlet, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import RecipePreview from '../../components/RecipePreview/RecipePreview.component';

import "./othersProfilePage.style.scss";
import addIcon from "../../assets/icons/plus.png";
import { getRecipesPreview, getUserData, followUser, unfollowUser } from '../../services/recipe.api';

const OthersProfilePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [user, setUser] = useState(null);
    const [isFollowing, setIsFollowing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getRecipesPreview().then(recipes => setRecipes(recipes));
        
        getUserData().then(userData => {
            setUser(userData);
        });
    }, []);

    const handleFollow = () => {
        setIsFollowing(true);
    };

    const handleUnfollow = () => {
        setIsFollowing(false);
    };

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
            {isFollowing ? (
              <button onClick={handleUnfollow}>Unfollow</button>
            ) : (
              <button onClick={handleFollow}>Follow</button>
            )}
          </div>
        </div>
        
        <div className="tabMenu">
          <button>Created</button>
          <button onClick={() => navigate("/savedRecipes")}>Saved</button>
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
            />
          ))}
        </div>
      </div>
    );
};

export default OthersProfilePage;