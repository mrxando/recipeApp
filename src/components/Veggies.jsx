import { useEffect, useState } from "react"
import { Splide , SplideSlide} from '@splidejs/react-splide'
import { Link } from "react-router-dom";
import '@splidejs/react-splide/css';

function Veggies() {

  
  const [veggie, setVeggie] = useState([])

  useEffect( () =>{
    getVeggie()
  },[])
  const getVeggie = async () =>{
      const check = localStorage.getItem('veggie');

      if(check){
        setVeggie(JSON.parse(check))
      }
      else{
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=dbf7e648ad0b4c20a3290719f9270474&number=9&tags=vegetarian`)
          const data = await api.json()
          localStorage.setItem('veggie', JSON.stringify(data.recipes))
          setVeggie(data.recipes)
      }
      
  }


  return (
    <div>
                <div className="wrapper">
                    <h3>Our Vegetarian Picks</h3>
                    <Splide options={{
                        perPage : 3,
                        arrows : false,
                        pagination : false,
                        drag: "free",
                        gap: "5rem"}
                    }>
                        {veggie.map((recipie) =>{
                            return(
                            <SplideSlide key={recipie.id}>
                            <div className="card">
                            <Link to={'/recipe/' + recipie.id}>
                                <p>{recipie.title}</p>
                                <img src={recipie.image} alt={recipie.title}/>
                                <div className="gradient"/>
                            </Link>
                            </div>
                            </SplideSlide>)
                        })}
                    </Splide>
                </div>
    </div>
  )
}

export default Veggies