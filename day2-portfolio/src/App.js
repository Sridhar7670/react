import ContactForm from "./components/Contact/Contact"
import { Header } from "./components/Navbar/Navbar"
import { BrowserRouter } from "react-router-dom"
export const App=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <ContactForm/>
        </BrowserRouter>
    )
}