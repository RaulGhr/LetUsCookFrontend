import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ReactComponent as LikeIcon } from '../../assets/icons/like_icon.svg';
import HeartButton from '../HeartButton';
import './BigRecipePreview.style.scss';
import fav from "../../assets/icons/fav_black.png";
import fav_selected from "../../assets/icons/fav_selected_black.png";
import like_black from "../../assets/icons/like_black.png";
import like_black_selected from "../../assets/icons/like_black_selected.png";
import { changeRecipeFavoriteStatus, likeRecipe, dislikeRecipe } from "../../services/recipe.api";
import { useAuth } from "../../contexts/authContext";

const BigRecipePreview = ({ recipe }) => {
  const [isFav, setIsFav] = React.useState(recipe.isFavorite);
  const [isLikedS, setIsLikedS] = React.useState(recipe.isLiked);
  const [rateing, setRateing] = React.useState(recipe.numberOfLikes);
  const { token } = useAuth();
  const navigate = useNavigate();
  
  const favoriteClickHandler = (e) => {
    e.stopPropagation();
    console.log("Favorite clicked", isFav);
    setIsFav(!isFav);
    changeRecipeFavoriteStatus(recipe.id, !isFav, token);
  };

  useEffect(() => {
    setIsFav(recipe.isFavorite);
  }, [recipe.isFavorite]);

  const likeClickHandler = (e) => {
      e.stopPropagation();
      console.log("Like clicked", isLikedS, "ID", recipe.id, "token", token);
      setIsLikedS(!isLikedS);
      if (isLikedS) {
        setRateing(rateing - 1);
        dislikeRecipe(recipe.id, token);
      } else {
        setRateing(rateing + 1);
        likeRecipe(recipe.id, token);
      }
      // changeRecipeFavoriteStatus(Id, !isFav, token);
    }
  
  return(
    <div className="big-recipe-preview">
      <div className="user-info">
        <img
          src={recipe.user.profileImage}
          alt={`${recipe.user.username}'s profile`}
          className="profile-pic"
        />
        <span className="username">{recipe.user.username}</span>
      </div>
      <div className="recipe-image">
        <img src={recipe.images} alt={recipe.title} onClick={() => navigate("/explore/" + recipe.id)}/>
      </div>
      <div className="interaction-bar">
        <div className="likes">
          {/* <LikeIcon /> */}
          {isLikedS ? (
              <img src={like_black_selected} alt="" onClick={likeClickHandler}/>
            ) : (
              <img src={like_black} alt="" onClick={likeClickHandler}/>
            )}
          <p>{rateing}</p>
        </div>
        {/* <HeartButton /> */}
        {isFav ? (
          <img src={fav_selected} alt="" onClick={favoriteClickHandler} />
        ) : (
          <img src={fav} alt="" onClick={favoriteClickHandler} />
        )}
      </div>
    </div>
  )
};

export default BigRecipePreview;
