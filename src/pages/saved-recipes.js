import React, { useEffect, useState } from "react";
import axios from "axios";

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  
  // const userID = window.localStorage.getItem("userID")
  

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes`);
        setSavedRecipes(response.data.recipes);
        
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, []);
  return (
    <div>
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <p>{recipe.description}</p>
            <img src={recipe.image} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookTimeMinutes} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
