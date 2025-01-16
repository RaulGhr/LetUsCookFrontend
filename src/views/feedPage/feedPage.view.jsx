import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { getFollowingUsersRecipes } from "../../services/recipe.api";
import "./feedPage.style.scss";
import BigRecipePreview from "../../components/RecipePreview/BigRecipePreview.component";




const FeedPage = () => {
  const { token } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await getFollowingUsersRecipes(token);
      console.log("response", response);
      setRecipes(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchRecipes();
    // fetchRecipes();
  }, [token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="FeedPage">
      {recipes.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="scroll_container">
          {recipes.map((recipe) => (
            <BigRecipePreview key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedPage;
