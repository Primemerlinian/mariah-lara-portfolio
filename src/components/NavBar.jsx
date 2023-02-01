import { Link } from "react-router-dom";

function NavBar () {
  return (
    <div className='navbar'>
    <header>
  <img src="../src"></img>
  <Link to="/">Home</Link>
  <Link to="/Projects">Projects</Link>
  <Link to="/Resume">Resume</Link>
  <Link to="/Contact">Contact</Link>
  <Link to="/AboutMe">About Me</Link>
  </header>
    </div>
  )
}

export default NavBar;