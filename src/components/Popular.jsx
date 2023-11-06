import { useEffect, useState } from "react"
import { Splide , SplideSlide} from '@splidejs/react-splide'
import { Link } from "react-router-dom";
import '@splidejs/react-splide/css';

function Popular() {

    const [popular, setPopular] = useState([])

    useEffect( () =>{
        getPopular()
    },[])
    const getPopular = async () =>{
        const check = localStorage.getItem('popular');

        if(check){
            setPopular(JSON.parse(check))
        }
        else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=dbf7e648ad0b4c20a3290719f9270474&number=9`)
            const data = await api.json()
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes)
        }
        
    }

  return (
    <div>
                <div className="wrapper">
                    <h3>Popular Picks</h3>
                    <Splide options={{
                        perPage : 4,
                        arrows : false,
                        pagination : false,
                        drag: "free",
                        gap: "5rem"}
                    }>
                        {popular.map((recipie) =>{
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


export default Popular