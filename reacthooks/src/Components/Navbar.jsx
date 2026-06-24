import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      {/* /<a href="#">Home</a> */}
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

    </div>
  )
}
