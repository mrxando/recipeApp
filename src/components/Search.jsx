import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {

  const [input, setinput] = useState("");
  const navigate = useNavigate();

  const submitHander = (e) => {
    e.preventDefault();
    navigate('/searched/'+input)
  }

  return (
    <form className='formStyle' onSubmit={submitHander}>
      <div>
        <FaSearch></FaSearch>
      <input onChange={(e)=>{
        setinput(e.target.value)
      }} type="text"  value={input}/>
      </div>
    </form>
  )
}

export default Search