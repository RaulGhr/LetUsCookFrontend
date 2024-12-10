import { Outlet, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import RecipePreview from '../../components/RecipePreview/RecipePreview.component';

import "./explorePage.style.scss";
import addIcon from "../../assets/icons/plus.png";
import searchIcon from "../../assets/icons/search.png";
import {getRecipesPreview} from '../../services/recipe.api';
import {getCreatorsPreview} from '../../services/creators.api';
import UserPreview from '../../components/UserPreview/UserPreview';


const ExplorePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [creators, setCreators] = useState([]);
    const [search, setSearch] = useState("");
    const [searched, setSearched] = useState("");
    const [filter, setFilter] = useState("Recipes");
    const navigate = useNavigate();

    useEffect(() => {
        handleSearch();
    }, []);

    const handleSearch = () => {
        setSearched(search);
        if(search === ""){
          getRecipesPreview(search).then(recipes => setRecipes(recipes));
          getCreatorsPreview(search).then(creators => setCreators(creators));
          return;
        }
        if(filter === "Recipes"){
            getRecipesPreview(search).then(recipes => setRecipes(recipes));
        } else {
            getCreatorsPreview(search).then(creators => setCreators(creators));
        }
    };

    const handleFilter = (e) => {
        setFilter(e.target.value);
    };


    // const navigate = useNavigate();
    return (
      <div className="ExplorePage">
        <section className="searchSection">
          <div className="searchBar">
            <input type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
            <img src={searchIcon} alt="" onClick={handleSearch}/>
          </div>
          <select className='filterBtn' name="" id="" onChange={handleFilter}>
            <option value="Recipes">Recipes</option>
            <option value="Creators">Creators</option>
          </select>
        </section>

        {searched === "" && <div className="scrollableList">
          <section className="creatorsSection">
            <h2 className='sectionName'>Popular Creators</h2>
            <p className='sectionDescription'>Get inspired with recipe ideas and tips from your favorite food creators</p>
            <div className='creators'>
              {creators.map((creator, index) => (
                <UserPreview key={creator.Id} Id={creator.Id} Username={creator.Username} Image={creator.Img} />
              ))}
              
              
            </div>
          </section>
          <section className="recipesHeaderSection">
            <h2 className='sectionName'>Discover recipes</h2>
            {/* <p className='sectionDescription'>Discover recipes from food creators around the world</p> */}
          </section>
          {recipes.map((recipe, index) => (
            <RecipePreview
              key={index}
              Id={recipe.Id}
              Title={recipe.Title}
              Img={recipe.Img}
              IngredinetsNumber={Object.keys(recipe.Ingredinets).length}
              PrepTime={recipe.PrepTime}
              Rateing={recipe.Rateing}
              isFavorite={recipe.isFavorite}
              User={recipe.User}
            />
          ))}
        </div>}
        {searched !== "" && <div className="scrollableList">
          <section className="searchResults">
            <h2 className='sectionName'>Search results for "{searched}"</h2>
            {/* <p className='sectionDescription'>Discover recipes from food creators around the world</p> */}
          </section>
          {filter === "Recipes" && recipes.map((recipe, index) => (
            <RecipePreview
              key={index}
              Id={recipe.Id}
              Title={recipe.Title}
              Img={recipe.Img}
              IngredinetsNumber={Object.keys(recipe.Ingredinets).length}
              PrepTime={recipe.PrepTime}
              Rateing={recipe.Rateing}
              isFavorite={recipe.isFavorite}
              User={recipe.User}
            />
          ))}
          {filter === "Creators" && creators.map((creator, index) => (
            <div className='smallCreatorPreviewDemo' key={index}>
              <img src={creator.Img} alt="" />
              <p>{creator.Username}</p>
            </div>
          ))}
        </div>}
        {/* <button className="addButton" onClick={() => navigate("/addRecipe")}>
          <img src={addIcon} alt="" />
        </button> */}
      </div>
    );
};

export default ExplorePage;