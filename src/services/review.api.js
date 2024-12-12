import axios from "axios";
import { withLogs, baseUrl, config } from "../utils/api.utils";

var reviewsDemo = [
  {
    RecipeId: "1",
    UserId: "1",
    Comment: "This is a great recipe",
    NoOfLikes: 10,
    NoOfDislikes: 2,
  },
  {
    RecipeId: "1",
    UserId: "2",
    Comment: "I don't like this recipe",
    NoOfLikes: 2,
    NoOfDislikes: 10,
  },
  {
    RecipeId: "1",
    UserId: "3",
    Comment: "I would make this recipe again",
    NoOfLikes: 5,
    NoOfDislikes: 0,
  },
  {
    RecipeId: "1",
    UserId: "1",
    Comment: "This is a great recipe",
    NoOfLikes: 10,
    NoOfDislikes: 2,
  },
  {
    RecipeId: "1",
    UserId: "2",
    Comment: "I don't like this recipe",
    NoOfLikes: 2,
    NoOfDislikes: 10,
  },
  {
    RecipeId: "1",
    UserId: "3",
    Comment: "I would make this recipe again",
    NoOfLikes: 5,
    NoOfDislikes: 0,
  },
  {
    RecipeId: "1",
    UserId: "1",
    Comment: "This is a great recipe",
    NoOfLikes: 10,
    NoOfDislikes: 2,
  },
  {
    RecipeId: "1",
    UserId: "2",
    Comment: "I don't like this recipe",
    NoOfLikes: 2,
    NoOfDislikes: 10,
  },
  {
    RecipeId: "1",
    UserId: "3",
    Comment: "I would make this recipe again",
    NoOfLikes: 5,
    NoOfDislikes: 0,
  },
];

export const getReviews = async () => {
  // return withLogs(axios.get(`${baseUrl}/reviews`), 'getReviews');

  return reviewsDemo;
};

export const addReview = async (review) => {
  // return withLogs(axios.post(`${baseUrl}/reviews`, review, config), 'addReview');

  reviewsDemo.push(review);
  return reviewsDemo;
};