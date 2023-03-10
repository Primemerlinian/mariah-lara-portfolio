import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/resume' element={<Resume />} />
    <Route path='/aboutme' element={<AboutMe />} />
    <Route path='/projects' element={<Projects />} />
    </Routes>

    </>
  );
}

export default App;
