import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      {/* <a href="url">Home</a> */}
      <nav className="nav">
        <Link to="/home" className="nav-tem">about me</Link>
        <Link to="/about" className="nav-tem">skills</Link>
        <Link to="/contact" className="nav-tem">project</Link>
      </nav>
    </div>
  )
}