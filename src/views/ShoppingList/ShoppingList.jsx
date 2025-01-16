import React, { useState, useEffect } from "react";

import "./ShoppingList.scss";

import { getShoppingList, deleteRecipeFromShoppingList } from "../../services/shoppingList.api";

import { useAuth } from "../../contexts/authContext";




const ShoppingList = () => {
  const { token } = useAuth();
  const [recipes, setRecipes] = useState();
  const [ingredients, setIngredients] = useState({});
  

  console.log("ingredients", ingredients);
  console.log("recipes", recipes);

  const fetchShoppingList = async () => {
    const shoppingList = await getShoppingList(token);
    console.log("shoppingList", shoppingList)
    
    Object.keys(shoppingList.ingredients).forEach((key) => {
      shoppingList.ingredients[key]["checked"] = false;
    })
    setRecipes(shoppingList.recipes);
    setIngredients(shoppingList.ingredients);
  }

  useEffect(() => {
    if(token){
      fetchShoppingList();
    }
  }, [token]);

  const toggleIngredient = (selected_key) => {
    const updatedIngredients = { ...ingredients };
    updatedIngredients[selected_key].checked = !updatedIngredients[selected_key].checked;
    setIngredients(updatedIngredients);
  };

  
  const removeRecipe = async (index) => {
    // console.log("removeRecipe", index);
    // setRecipes(recipes.filter((_, i) => i !== index));
    console.log("removeRecipe", token);
    const recipeId = recipes[index].id;
    await deleteRecipeFromShoppingList(recipeId, token);
    fetchShoppingList();
  };

  return (
    <div className="ShoppingList">
      <div className="content">
        <div className="recipes-list">
          <h2>List of Recipes</h2>
          <div className="recipes-scroll">
            {recipes && recipes.map((recipe, index) => (
              <div key={index} className="recipe-card" style={{ backgroundImage: `url(${recipe.images})` }}>
                <span className="recipe-name">{recipe.title}</span>
                <button
                  className="remove-button"
                  onClick={() => removeRecipe(index)}
                >
                  &#10006;
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="shopping-list">
          <h2>Shopping List</h2>
          <div className="ingredients-scroll">
            {ingredients &&  Object.keys(ingredients).map((key) => (
              
              <div key={key} className="ingredient-item">
                <input
                  type="checkbox"
                  checked={ingredients[key].checked}
                  onChange={() => toggleIngredient(key)}
                />
                <span>{ingredients[key]["quantity"] + "" + ingredients[key]["unit"] + " " + key}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingList;
