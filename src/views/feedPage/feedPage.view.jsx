import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/authContext";
import { getFollowingUsersRecipes } from "../../services/recipe.api";

const FeedPage = () => {
  const { token } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await getFollowingUsersRecipes(token);
      setRecipes(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="feed-container">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="feed-card">
          <div className="user-info">
            <img
              src={recipe.user.profilePicture || "/default-avatar.png"}
              alt={`${recipe.user.name}'s profile`}
              className="profile-pic"
            />
            <span>{recipe.user.name}</span>
          </div>
          <div className="recipe-image">
            <img src={recipe.images[0] || "https://placedog.net/400/400"} alt={recipe.title} />
          </div>
          <div className="recipe-title">{recipe.title}</div>
          <div className="recipe-description">{recipe.description}</div>
          <div className="recipe-likes">
            <span>{recipe.numberOfLikes} Likes</span>
            <button className="like-button">a</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedPage;
