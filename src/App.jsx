import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Portfolio.jsx";
import {Suspense} from "react";
import Loader from "./components/Loader.jsx";
function App() {
    return (
        <main className='bg-slate-300/20'>
            <Router>
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/projects' element={<Experience/>} />
                        <Route path='/contact' element={<Contact/>} />
                    </Routes>
                </Suspense>
            </Router>
        </main>
  )
}

export default App
