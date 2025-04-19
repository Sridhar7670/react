import { Link } from "react-router-dom"
export const Header=()=>{
    return(
        <nav>
            <Link  to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/reg">Register</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">ContactUs</Link>
            <div className='t'>{t}</div>
        </nav>
    )
}