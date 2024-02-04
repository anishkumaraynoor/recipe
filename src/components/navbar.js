import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => { 
  const navigate = useNavigate();
  const logout = () => {  
    navigate("/login");
  };
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create-recipe">Create Recipe</Link>
      <Link to="/saved-recipes">Saved Recipes</Link>
        <Link to="/login">Login/Register</Link>  
        <button onClick={logout}> Logout </button>
      
    </div>
  );
};
