import Home from "./Home/home"
import ContactForm from "./Contact/Contact"
import { Header } from "./Navbar/Navbar"
import Skills from "./skills/skill"
import Projects from "./Projects/projects"
import { BrowserRouter } from "react-router-dom"
import About from "./about/about"

export const App=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <ContactForm/>
        </BrowserRouter>
    )
}