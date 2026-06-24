import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import "./assets/style.css"
import { Routes , Route } from "react-router-dom"

export default function App() {
  return (
    <div>
      <h1>Hello Routing</h1>
      <h1 className='heading'>RESUME</h1>
      <Navbar />
      <Routes>
         <Route path="/home" element = {<Home />}></Route>
         <Route path="/about" element = {<About />}></Route>
         <Route path="/contact" element = {<Contact />}></Route>
      </Routes>
    </div>
  )
}