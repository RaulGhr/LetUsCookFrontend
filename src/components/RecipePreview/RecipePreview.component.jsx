import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecipePreview.style.scss";

import like_white from "../../assets/icons/like_white.png";
import fav from "../../assets/icons/fav.png";
import fav_selected from "../../assets/icons/fav_selected.png";
import Reviews from "../Review/Reviews";
import { changeRecipeFavoriteStatus } from "../../services/recipe.api";
import { useAuth } from "../../contexts/authContext";

/**
 * RecipePreview component displays a preview of a recipe with an image, title, number of ingredients, and preparation time.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {number} props.Id - The id of the recipe.
 * @param {string} props.Title - The title of the recipe.
 * @param {string} props.Img - The URL of the recipe image.
 * @param {number} props.IngredinetsNumber - The number of ingredients in the recipe.
 * @param {number} props.PrepTime - The preparation time in minutes.
 * @returns {JSX.Element} The RecipePreview component.
 */
const RecipePreview = ({
  Id,
  Title,
  Img,
  IngredinetsNumber,
  PrepTime,
  Rateing,
  User,
  isFavorite,
}) => {
  const [isFav, setIsFav] = React.useState(isFavorite);
  const { user } = useAuth();
  const navigate = useNavigate();

  const favoriteClickHandler = (e) => {
    e.stopPropagation();
    console.log("Favorite clicked", isFav);
    setIsFav(!isFav);
    changeRecipeFavoriteStatus(Id, user.id, !isFav);
  };

  return (
    <div className="RecipePreview" onClick={() => navigate("/explore/" + Id)}>
      <div
        className="imagePlaceHolder"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <div className="buttons">
          <div className="likes">
            <img src={like_white} alt="" />
            <p>{Rateing}%</p>
          </div>
          {isFav ? (
            <img src={fav_selected} alt="" onClick={favoriteClickHandler} />
          ) : (
            <img src={fav} alt="" onClick={favoriteClickHandler} />
          )}
        </div>
        <div className="creator">
          <img src={User.profileImage} alt="" />
          <p>{User.username}</p>
        </div>
      </div>
      <div className="overlay"></div>
      <h3>{Title}</h3>
      <p>
        {IngredinetsNumber} Ingredients | {PrepTime} Minutes
      </p>
      <Reviews recipeId={Id} />
    </div>
  );
};

export default RecipePreview;
