import { Outlet, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import RecipePreview from '../../components/RecipePreview/RecipePreview.component';
import LineUserFollowDetails from '../../components/LineUserFollowDetails/LineUserFollowDetails.component';

import "./myProfilePage.style.scss";
import addIcon from "../../assets/icons/plus.png";
import logoutIcon from "../../assets/icons/logout.png";
import { getRecipesPreview, getUserFavoritesRecipesPreview, getRecipeForCurrentUser } from '../../services/recipe.api';
import {updateUser} from '../../services/authApi';
import { getUserData, getFollowers, getFollowing } from '../../services/creators.api';
import { useAuth } from '../../contexts/authContext';

const ProfilePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [folloingList, setFolloingList] = useState([]);
    const [folloersList, setFolloersList] = useState([]);
    const [user, setUser] = useState(null);
    const [displaySection, setDisplaySection] = useState("created");
    const userContext = useAuth().user;
    const {token, logout} = useAuth();
    
    
    // console.log("userID:",useAuth().user.id);
    const navigate = useNavigate();

    const handleLogout = () => {
      logout();
      navigate("/");
    };

    const fetchRecipes = async () => {
        const recipes = await getRecipeForCurrentUser(token);
        console.log("recipes",recipes);
        setRecipes(recipes);
    };

    const fetchUser = async () => {
        const user = await getUserData(userContext.id);
        console.log("user",user);
        setUser(user);
    };

    const fetchFavorites = async () => {
        const recipes = await getUserFavoritesRecipesPreview(token);
        setRecipes(recipes);
    };

    const fetchFollowing = async () => {
        const following = await getFollowing(userContext.id);
        setFolloingList(following);
    };

    const fetchFollowers = async () => {
        const followers = await getFollowers(userContext.id);
        setFolloersList(followers);
    };


    const changeProfilePicture = async (e) => {
      

      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const newUserData = {}; 
        newUserData["profileImage"] = reader.result;
        newUserData["id"] = userContext.id;
        updateUserHandler(newUserData);
      };
      reader.readAsDataURL(file);
    };

    const updateUserHandler = async (newUserData) => {
      await updateUser(newUserData);
      await fetchUser()
      
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchUser();
            await fetchRecipes();
            await fetchFollowing();
            await fetchFollowers();
        };
        if(userContext){
          fetchData();
        }
    }, [userContext]);

    useEffect(() => {
        const fetchData = async () => {
          if (displaySection === "created") {
            await fetchRecipes();
          } else {
            await fetchFavorites();
          }
        };
    
        fetchData();

    },[displaySection]);

    if (!user) {
        return <div>Loading...</div>;
    }

    

    return (
      <div className="ProfilePage">
        <div className="profileHeader">
          <input onChange={(e) => changeProfilePicture(e)} type="file" id="image" name="image" />
          <label htmlFor="image">
            <img
              src={user.ProfilePicture}
              alt="Profile"
              className="profilePicture"
            />
          </label> 
          <div className="profileInfo">
            <h2>{user.Username}</h2>
            <p>{user.Description || "No description available"}</p>
            <div className="followStats">
              <div className='dropdown'>
                <span>{user.FollowingCount} Following</span>
                <div className="dropdownContent">
                  {folloingList.map((user, index) => <LineUserFollowDetails key={index} user={user} onButtonClick={() => fetchFollowing()}/>)}
                </div>
              </div>
              <div className='dropdown'>
                <span>{user.FollowersCount} Followers</span>
                <div className="dropdownContent followers">
                  {folloersList.map((user, index) => <LineUserFollowDetails key={index} user={user}/>)}
                </div>
              </div>
              
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

        <button className="addButton" onClick={() => navigate("/addRecipe")}>
          <img src={addIcon} alt="" />
        </button>
        <button className="logOutButton" onClick={handleLogout}>
          <img src={logoutIcon} alt="" />
        </button>
      </div>
    );
};

export default ProfilePage;
