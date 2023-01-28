import { Link } from "react-router-dom"

function NavBar () {
  return (
    <header class="App-Header">
  <Link to="/">Home</Link>
  <Link to="/Projects">Projects</Link>
  <Link to="/Resume">Resume</Link>
  <Link to="/Contact">Contact</Link>
  <Link to="/AboutMe">About Me</Link>
  </header>
  )
}

export default NavBar;