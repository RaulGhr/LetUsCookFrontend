import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { getFollowingUsersRecipes } from "../../services/recipe.api";
import { ReactComponent as LikeIcon } from "../../assets/icons/like_icon.svg";
import "./feedPage.style.scss";
import HeartButton from "../../components/HeartButton";
// TODO: Replace with actual data from the API
const hardcodedRecipes = [
  {
    id: 1,
    user: { name: "Test1", profilePicture: "https://placedog.net/300/300" },
    title: "Spaghetti Carbonara",
    images: ["https://placedog.net/800/800"],
    description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    numberOfLikes: 123,
    createdAt: "2023-12-31T10:00:00Z",
  },
  {
    id: 2,
    user: { name: "Test2", profilePicture: "https://placedog.net/400/400" },
    title: "Chicken Tikka Masala",
    images: ["https://placedog.net/700/700"],
    description: "A flavorful Indian curry dish with marinated chicken in a creamy tomato sauce.",
    numberOfLikes: 456,
    createdAt: "2023-12-30T15:00:00Z",
  },
  {
    id: 3,
    user: { name: "Test3", profilePicture: "https://placedog.net/500/500" },
    title: "Vegan Buddha Bowl",
    images: ["https://placedog.net/1200/1200"],
    description: "A healthy mix of quinoa, chickpeas, roasted veggies, and tahini dressing.",
    numberOfLikes: 78,
    createdAt: "2023-12-29T08:30:00Z",
  },
];


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
    // TODO: Replace with actual data from the API
    // fetchRecipes doesn't work, so just hardcoding a few recipes for now
    setRecipes(hardcodedRecipes);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // If like button is clicked, fill it with red and increase the number of likes

  return (
    <div className="feed-container">
      {recipes.length === 0 ? (
        <div>Loading...</div>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="feed-card">
            <div className="user-info">
              <img
                src={recipe.user.profilePicture}
                alt={`${recipe.user.name}'s profile`}
                className="profile-pic"
              />
              <span className="username">{recipe.user.name}</span>
            </div>
            <div className="recipe-image">
              <img src={recipe.images[0]} alt={recipe.title} />
            </div>
            <div className="interaction-bar">
              <span className="likes"><LikeIcon />{recipe.numberOfLikes}</span>
              <HeartButton />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FeedPage;
