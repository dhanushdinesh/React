import Home from "./Home";
import About from "./About";
import Homeclass from "./Classcomponents/homeclass";
import Contactclass from "./Classcomponents/Contactclass";
import Greeting from "./Greeting";


function App() {
  let name = "Dhanush";
  let age = 25;
  return(
    <>
    <h1>Hello Everyone!</h1>
    <h3>Welcome to react!!!</h3>
    <Home />
    <Homeclass />
    <About />
    <Contactclass />
    <Greeting Firstname={name} age={age} favcolor="Crimson"/>
    </>
  )
}
export default App;