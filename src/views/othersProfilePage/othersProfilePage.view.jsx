import { Outlet, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import RecipePreview from '../../components/RecipePreview/RecipePreview.component';

import "./othersProfilePage.style.scss";
import addIcon from "../../assets/icons/plus.png";
import { getRecipeByUserId } from '../../services/recipe.api';
import { getUserData, followUser, unfollowUser, isUserFollowing} from '../../services/creators.api';
import { useAuth } from '../../contexts/authContext';

const OthersProfilePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [user, setUser] = useState(null);
    const [isFollowing, setIsFollowing] = useState(false);
    const [ pathUsername, setPathUsername] = useState("");
    const {token} = useAuth();
    const navigate = useNavigate();

    const fetchRecipes = async () => {
        const recipes = await getRecipeByUserId(user.Id, token);
        // console.log("recipes",recipes);
        setRecipes(recipes);
    };

    const fetchUser = async () => {
        const user = await getUserData(null,pathUsername);
        setUser(user);
    };


    useEffect(() => {
        const fetchData = async () => {
            await fetchUser();
        };
        if(pathUsername){
          fetchData();
        }
    }, [pathUsername]);

    useEffect(() => {
      const fetchData = async () => {
          // console.log("user",user);
          await fetchRecipes();

          const isFollowingUser = await isUserFollowing(user.Id, token);
          setIsFollowing(isFollowingUser);

      };
      if(user && token){
        fetchData();
      }
    }, [user]);

    useEffect(() => {
        const path = window.location.pathname;
        const username_from_path = path.split("/").pop();
        // console.log("username_from_path",username_from_path);
        setPathUsername(username_from_path);
         
    }, []);


 

    

    const handleFollow = async () => {
        setIsFollowing(true);
        await followUser(user.Id, token);
        await fetchUser();

    };

    const handleUnfollow = async () => {
        setIsFollowing(false);
        await unfollowUser(user.Id, token);
        await fetchUser();
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
        
        {/* <div className="tabMenu">
          <button>Created</button>
          <button onClick={() => navigate("/savedRecipes")}>Saved</button>
        </div> */}

        <div className="recipeList">
          {recipes.map((recipe, index) => (
            <RecipePreview
            key={index}
            Id={recipe.id}
            Title={recipe.title}
            Img={recipe.images}
            IngredinetsNumber={Object.keys(recipe.ingredients).length}
            PrepTime={recipe.prepTime}
            Rateing={recipe.numberOfLikes}
            isFavorite={recipe.isFavorite}
            User={recipe.user}
          />
          ))}
        </div>
      </div>
    );
};

export default OthersProfilePage;