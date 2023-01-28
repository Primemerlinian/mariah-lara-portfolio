import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/AboutMe'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
