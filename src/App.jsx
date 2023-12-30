import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Portfolio.jsx";
function App() {
    return (
        <main className='bg-slate-300/20'>
            <Router>
                <Routes>
                    <Route path='/Portfolio' element={<Home />} />
                    <Route
                        path='/*'
                        element={
                                <Routes>
                                    <Route path='/Portfolio/about' element={<About />} />
                                    <Route path='/Portfolio/projects' element={<Experience/>} />
                                    <Route path='/Portfolio/contact' element={<Contact/>} />
                                </Routes>
                        }
                    />
                </Routes>
            </Router>
        </main>
  )
}

export default App
