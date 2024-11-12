import { Outlet, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState, Fragment } from 'react';

// import RecipePreview from '../../components/RecipePreview/RecipePreview.component';

import "./addRecipePage.style.scss";
// import addIcon from "../../assets/icons/plus.png";
import {getIngredients, saveRecipe} from '../../services/recipe.api';

const defaultIngredientAdded = {
    name: 'default',
    quantity: ''
};

const defaultRecipeFields = {
    title: '',
    image: '',
    description: '',
    ingredients: [],
    instructions: [],
    servings: 1,
    prepTime: {hours: 0, minutes: 0},
    cookTime: {hours: 0, minutes: 0}
}

const AddRecipePage = () => {
    const [ingredientsList, setIngredientsList] = useState([]);
    const [ingredientsAdded, setIngredientsAdded] = useState([defaultIngredientAdded]);
    const [instructionsAdded, setInstructionsAdded] = useState(['']);
    const [recipeFields, setRecipeFields] = useState(defaultRecipeFields);
    const navigate = useNavigate();

    console.log('ingredientsAdded',ingredientsAdded);
    useEffect(() => {
        getIngredients().then(ingredients => setIngredientsList(ingredients));
    }, []);

    const addIngredientHandler = (e,ingredientAddedIndex) => {
        console.log('e',e.target.value, ingredientAddedIndex);
        const newIngredientsAdded = [...ingredientsAdded];
        if(ingredientAddedIndex < ingredientsAdded.length - 1 && e.target.value === 'default'){
            newIngredientsAdded.splice(ingredientAddedIndex,1);
            console.log('deleteing ',ingredientAddedIndex);
            setIngredientsAdded(newIngredientsAdded);
            return;
        }
        newIngredientsAdded[ingredientAddedIndex] = {...newIngredientsAdded[ingredientAddedIndex],name: e.target.value,};
        const remainingKeys = Object.keys(ingredientsList).filter(ingredient => !ingredientsAdded.some(added => added.name === ingredient));
        console.log("lenght ",remainingKeys.length, remainingKeys);
        if(!(ingredientAddedIndex < ingredientsAdded.length - 1 && Object.keys(ingredientsList).filter(ingredient => !ingredientsAdded.some(added => added.name === ingredient)).lenght == 0)){
            newIngredientsAdded.push(defaultIngredientAdded);
        };
        setIngredientsAdded(newIngredientsAdded);

    };

    const addInstructionHandler = (e,instructionAddedIndex) => {
        console.log('e',e.target.value, instructionAddedIndex);
        const newInstructionsAdded = [...instructionsAdded];
        newInstructionsAdded[instructionAddedIndex] = e.target.value;
        if(instructionAddedIndex == instructionsAdded.length - 1){
            newInstructionsAdded.push('');
        }
        else if(instructionAddedIndex < instructionsAdded.length - 1 && e.target.value === ''){
            newInstructionsAdded.splice(instructionAddedIndex,1);
        }

        setInstructionsAdded(newInstructionsAdded);
    };

    const addRecipeFieldsHandler = (e,field,sField=Node) => {
        if (sField){
            const newRecipeFields = {...recipeFields};
            newRecipeFields[field] = {...newRecipeFields[field], [sField]: e.target.value};
            setRecipeFields(newRecipeFields);
            return;
        }
        const newRecipeFields = {...recipeFields};
        newRecipeFields[field] = e.target.value;
        setRecipeFields(newRecipeFields);
    }

    const saveRecipeHandler = () => {
        const newIngredientsAdded = ingredientsAdded.filter(ingredient => ingredient.name !== 'default');
        const newInstructionsAdded = instructionsAdded.filter(instruction => instruction !== '');

        var recipe = {
            title: recipeFields.title,
            image: recipeFields.image,
            description: recipeFields.description,
            ingredients: newIngredientsAdded,
            instructions: newInstructionsAdded,
            servings: recipeFields.servings,
            prepTime: recipeFields.prepTime.hours * 60 + recipeFields.prepTime.minutes,
            cookTime: recipeFields.cookTime.hours * 60 + recipeFields.cookTime.minutes
        };

        const saveRecipeRequest = async (recipe) => {
            console.log('recipe',recipe);
            await saveRecipe(recipe); 
            navigate('/explore');
        }
        saveRecipeRequest(recipe);
    };

    // const navigate = useNavigate();
    return (
        <div className="AddRecipePage">
            <section className="recepiInformation">
                <h1>Add Recipe</h1>
                <div className="field text-field">
                    <label htmlFor="title">Title</label>
                    <input onChange={(e) => addRecipeFieldsHandler(e,'title')} type="text" id="title" name="title" placeholder='Give your recipe a name' />
                </div>
                <div className="field text-field">
                    <label htmlFor="description">Description</label>
                    <textarea onChange={(e) => addRecipeFieldsHandler(e,'description')} type="textarea" id="description" name="description" placeholder='Give a brief description of your recipe' />
                </div>
                <div className="field ingredients">
                    <h2 htmlFor="">Ingredients</h2>
                    {
                        ingredientsAdded.map((ingredientAdded,ingredientAddedIndex) => (
                            
                            <div key={ingredientAddedIndex} className="selection-row">
                                {console.log('ingredientsAddedKey',ingredientAddedIndex)}
                                <select name="ingredient" onChange={(e) => addIngredientHandler(e,ingredientAddedIndex)} value={ingredientAdded['name']} defaultValue={ingredientAdded['name']}>
                                    <option value='default'>Ingredient</option>
                                    {Object.keys(ingredientsList).filter(ingredient => (!ingredientsAdded.some(added => added.name === ingredient) || ingredient === ingredientAdded['name'])).map((ingredient, index) => (
                                        <option key={index} value={ingredient} >{ingredient}</option>
                                    ))}
                                </select>
                                <input type="text" id="quantity" name="quantity" 
                                placeholder={'Quantity' + (ingredientAdded['name']!='default'?' in ' + ingredientsList[ingredientAdded['name']]['MesureUnit']:'') } 
                                value={ingredientAdded['quantity']?(ingredientAdded['quantity']):''}
                                onChange={(e) => {
                                    const newIngredientsAdded = [...ingredientsAdded];
                                    newIngredientsAdded[ingredientAddedIndex] = {...newIngredientsAdded[ingredientAddedIndex], quantity: e.target.value};
                                    setIngredientsAdded(newIngredientsAdded);
                                }}
                                />
                            </div>
                        ))
                    }
                </div>

                <div className="field instructions">
                    <h2 htmlFor="">Instructions</h2>
                    {
                        instructionsAdded.map((instructionAdded,instructionAddedIndex) => (
                            
                            <Fragment>
                                <label htmlFor={'instruction' + instructionAddedIndex}>Task {instructionAddedIndex + 1}</label>
                                <input type="text" name={'instruction' + instructionAddedIndex}
                                placeholder="Instruction e.g. Preheat oven to 180C" 
                                value={instructionAdded}
                                onChange={(e) => addInstructionHandler(e,instructionAddedIndex)}
                                
                                />
                            </Fragment>
                        ))
                    }
                </div>

                <div className="field text-field">
                    <label htmlFor="servings">Servings</label>
                    <input onChange={(e) => addRecipeFieldsHandler(e,'servings')} type="text" id="servings" name="servings" placeholder='How many portions does this recipe make?'/>
                </div>

                <div className="field double-text-field">
                    <label htmlFor="prepTime">Prep time</label>
                    <div className="field">
                        <input onChange={(e) => addRecipeFieldsHandler(e,'prepTime','hours')} type="text" id="prepTime" name="prepTime" placeholder='Hours' />
                        <input onChange={(e) => addRecipeFieldsHandler(e,'prepTime','minutes')} type="text" id="prepTime" name="prepTime" placeholder='Minutes' />

                    </div>
                </div>

                <div className="field double-text-field">
                    <label htmlFor="cookTime">Cook time</label>
                    <div className="field">
                        <input onChange={(e) => addRecipeFieldsHandler(e,'cookTime','hours')} type="text" id="cookTime" name="cookTime" placeholder='Hours' />
                        <input onChange={(e) => addRecipeFieldsHandler(e,'cookTime','minutes')} type="text" id="cookTime" name="cookTime" placeholder='Minutes' />
                    </div>
                </div>
                
                <div className="buttonContainer">
                    <button onClick={saveRecipeHandler}>SAVE</button>
                </div>

            </section>
        </div>
    );
};

export default AddRecipePage;