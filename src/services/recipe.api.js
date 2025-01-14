import axios from 'axios';
import { withLogs, baseUrl, config, authConfig } from '../utils/api.utils';



export const getRecipesPreview = async (title, token) => {
  // console.log("getRecipesPreview",search,token);

  if (!token) {
    return [];
  }
  const result = await axios.get(`${baseUrl}/recipes?title=${title}`, authConfig(token)).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });
  console.log("getRecipesPreview-Result", result);
  if (result.status === 200) {
    return result.data;
  } else {
    return [];
  }


};

export const getUserFavoritesRecipesPreview = async (token) => {

  console.log(authConfig(token))
  const result = await axios.get(`${baseUrl}/recipes/favorite`, authConfig(token)).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });

  // console.log("getUserFavoritesRecipesPreview",result);

  if (result.status === 200) {
    return result.data;
  }
  return [];

};

export const getRecipeForCurrentUser = async (token) => {
  // console.log("getRecipeForUser",token);
  const result = await axios.get(`${baseUrl}/recipes/getAllForCurrentUser`, authConfig(token)).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });

  if (result.status === 200) {
    return result.data;
  } else {
    return [];
  }
}

export const getRecipeByUserId = async (userId, token) => {
  // console.log("getRecipeByUserId",userId, token);
  const result = await axios.get(`${baseUrl}/recipes/getAllById?user_id=${userId}`, authConfig(token)).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });

  if (result.status === 200) {
    return result.data;
  } else {
    return [];
  }
};

export const getFollowingUsersRecipes = async (token) => {
  const result = await axios.get(`${baseUrl}/recipes/getFollowingUsersRecipes`, authConfig(token)).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });

  if (result.status === 200) {
    return result.data;
  } else {
    return [];
  }
};


export const getIngredients = async () => {
  const result = await axios.get(`${baseUrl}/ingredients/getAll`);
  // console.log(result.data);
  return result.data;
};

export const getRecipeById = async (id, token) => {
  // console.log("getRecipeById",id, token);
  const result = await axios.get(`${baseUrl}/recipes?recipe_id=${id}`, authConfig(token)).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });

  if (result.status === 200) {
    return result.data[0];
  } else {
    return result;
  }
};

export const saveRecipe = async (recipe, token) => {
  const result = await axios.post(`${baseUrl}/recipes/create`, recipe, authConfig(token)).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });

  if (result.status === 200) {
    return result.data;
  } else {
    return result;
  }


}

export const changeRecipeFavoriteStatus = async (recipeId, status, token) => {

  // console.log("changeRecipeFavoriteStatus",recipeId, status, token);

  if (status == true) {

    const result = await axios.post(`${baseUrl}/favorite_recipes/create`, { 'recipe_id': recipeId }, authConfig(token)).then((response) => {
      return response;
    }).catch((error) => {
      return error;
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result;
    }
  } else {
    const result = await axios.post(`${baseUrl}/favorite_recipes/delete`, { 'recipe_id': recipeId }, authConfig(token)).then((response) => {
      return response;
    }).catch((error) => {
      return error;
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result;
    }
  }

};