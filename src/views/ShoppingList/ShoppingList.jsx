import React, { useState } from "react";
import "./ShoppingList.css";

const ShoppingList = () => {
  const [recipes, setRecipes] = useState([
    "Reteta 1",
    "Reteta 2",
    "Reteta 3",
    "Reteta 4",
    "Reteta 5",
  ]);
  const [ingredients, setIngredients] = useState([
    { name: "Ingredient 1", checked: true },
    { name: "Ingredient 2", checked: true },
    { name: "Ingredient 3", checked: false },
    { name: "Ingredient 4", checked: false },
    { name: "Ingredient 5", checked: false },
    { name: "Ingredient 6", checked: true },
    { name: "Ingredient 7", checked: true },
    { name: "Ingredient 8", checked: false },
    { name: "Ingredient 9", checked: false },
    { name: "Ingredient 10", checked: false },
  ]);

  const toggleIngredient = (index) => {
    const updatedIngredients = ingredients.map((ingredient, i) =>
      i === index ? { ...ingredient, checked: !ingredient.checked } : ingredient
    );
    setIngredients(updatedIngredients);
  };

  const removeRecipe = (index) => {
    setRecipes(recipes.filter((_, i) => i !== index));
  };

  return (
    <div className="shopping-list-page">
      <div className="content">
        <div className="recipes-list">
          <h2>List of Recipes</h2>
          <div className="recipes-scroll">
            {recipes.map((recipe, index) => (
              <div key={index} className="recipe-card">
                <span className="recipe-name">{recipe}</span>
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
            {ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-item">
                <input
                  type="checkbox"
                  checked={ingredient.checked}
                  onChange={() => toggleIngredient(index)}
                />
                <span>{ingredient.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingList;
