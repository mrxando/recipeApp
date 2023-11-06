import React from 'react'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';



function Recipe() {

  const [details, setDetails] = useState({})
  const [activetab, setactivetab] = useState('instructions')

  let params = useParams();



  const getDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=dbf7e648ad0b4c20a3290719f9270474`)
    const detailData = await data.json();
    setDetails(detailData)
    }


    useEffect(()=>{
      getDetails()
      },[params.name])

  return (
    <div className='detail-wrapper'>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="details image" />
      </div>
      <div className="info">
        <button onClick={() => setactivetab('instructions')} className={activetab === 'instructions' ? 'detail-buttonActive' : 'detail-button'}>Instructions</button>
        <button onClick={() => setactivetab('ingredients')} className={activetab === 'ingredients' ? 'detail-buttonActive' : 'detail-button'}>Ingredients</button>
        {activetab === 'instructions' && (
          <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
          </div>
        )}
        {activetab === 'ingredients' && (
          <ul>
          {details.extendedIngredients?.map((ingredient) =>
            <li key={ingredient.id}>{ingredient.original}</li>
        )}
        </ul>
        )}   
      </div>
    </div>
  )
}

export default Recipe