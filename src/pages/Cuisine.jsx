import React from 'react'
import {motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function Cuisine() {

  const [cusine, setCusine] = useState([])
  let params = useParams()

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=dbf7e648ad0b4c20a3290719f9270474&cuisine=${name}`)
    const recipes = await data.json();
    setCusine(recipes.results)
  }

  useEffect(()=>{
    getCuisine(params.type)
  },[params.type])
  return (
    <div className='grid' >
      {cusine.map((item) => {
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

export default Cuisine