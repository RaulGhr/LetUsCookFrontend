import React from 'react';
import { ReactComponent as LikeIcon } from '../../assets/icons/like_icon.svg';
import HeartButton from '../HeartButton';
import './BigRecipePreview.style.scss';

const BigRecipePreview = ({ recipe }) => (
  <div className="big-recipe-preview">
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
      <span className="likes">
        <LikeIcon />
        {recipe.numberOfLikes}
      </span>
      <HeartButton />
    </div>
  </div>
);

export default BigRecipePreview;
