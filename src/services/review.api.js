import axios from "axios";
import { withLogs, baseUrl, config, authConfig } from "../utils/api.utils";


export const getReviews = async (recipeId) => {
  const response = await axios.get(`${baseUrl}/reviews/getByRecipe?recipe_id=${recipeId}`, config);
  return response.data;
};

export const addReview = async (recipeId, comment, token) => {
  const response = await axios.post(`${baseUrl}/reviews/create`, { "recipe_id": recipeId, "comment": comment }, authConfig(token));
  return response.data;
  
};

export const likeReview = async (reviewId) => {
  const response = await axios.put(`${baseUrl}/reviews/like`, { "review_id": reviewId }, config);
  return response.data;
}

export const dislikeReview = async (reviewId) => {
  const response = await axios.put(`${baseUrl}/reviews/dislike`, { "review_id": reviewId }, config);
  return response.data;
}