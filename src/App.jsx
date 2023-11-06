import Pages from "./pages/Pages"
import Category from "./components/Category"
import Search from "./components/Search"
import { BrowserRouter } from "react-router-dom"
import { Link } from 'react-router-dom'
import { GiKnifeFork } from "react-icons/gi"


function App() {

  return (
    <>
    <BrowserRouter>
    <div className="nav">
      <GiKnifeFork ></GiKnifeFork>
      <Link className="logo" to={'/'}>deliciousss</Link></div>
      <Search/>
      <Category/>
      <Pages/>
    </BrowserRouter>
    </>
  )
}

export default App
