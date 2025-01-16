import axios from 'axios';
import { withLogs, baseUrl, config, authConfig } from '../utils/api.utils';

export const getShoppingList = async (token) => {
    // console.log("getShoppingList", token);
    const result = await axios.get(`${baseUrl}/shopping_list/get`, authConfig(token)).then((response) => {
        return response;
    }).catch((error) => {
        console.log("error getFollowingUsersRecipes",error);
        return error;
    });
    
    if (result.status === 200) {
        return result.data;
    } else {
        return {};
    }
}

export const deleteRecipeFromShoppingList = async (recipe_id, token) => {
    const result = await axios.delete(`${baseUrl}/shopping_list/delete/${recipe_id}`, authConfig(token)).then((response) => {
        return response;
    }).catch((error) => {
        console.log("error deleteRecipeFromShoppingList",error);
        return error;
    });
    
    if (result.status === 200) {
        return result.data;
    } else {
        return {};
    }
}

export const addRecipeToShoppingList = async (recipe_id, token) => {
    const body_data = {
        "recipe_id": recipe_id
    }
    const result = await axios.post(`${baseUrl}/shopping_list/add`, body_data, authConfig(token)).then((response) => {
        return response;
    }).catch((error) => {
        console.log("error addRecipeToShoppingList",error);
        return error;
    });
    
    if (result.status === 200) {
        return result.data;
    } else {
        return {};
    }
}