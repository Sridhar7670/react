import SearchIcon from '@mui/icons-material/Search';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Navbar(){

    return (
        <div className="Nav">
            <div className="left-nav"><h1>Matches</h1></div>
            <div className="right-nav">
              <div><SearchIcon  id="icon"/></div>
              <div><ContactMailIcon  id="icon"/></div>
            </div>
        </div>
    )
}
export default Navbar