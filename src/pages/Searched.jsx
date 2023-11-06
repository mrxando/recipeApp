import React from 'react'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Searched() {

    const [searchedRecipes, setsearchedRecipes] = useState([])
    let params = useParams()

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=dbf7e648ad0b4c20a3290719f9270474&query=${name}`)
        const recipes = await data.json();
        setsearchedRecipes(recipes.results)
        }

    useEffect(()=>{
        getSearched(params.search)
        },[params.search])
    
  return (
    <div className='grid' >
      {searchedRecipes.map((item) => {
        return(
          <div className='cardCuisine' key={item.id}>
            <Link to={'/recipe/' + item.id}>
            <img src={item.image} alt="food image" />
            <h4>{item.title}</h4>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Searched