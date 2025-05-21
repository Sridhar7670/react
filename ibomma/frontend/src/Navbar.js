import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Navbar({ onSearchClick }) {
  return (
    <div className="Nav">
      <div className="left-nav">
        <h1><Link to="/">I BOMMA</Link></h1>
      </div>
      <div className="right-nav">
        <div onClick={onSearchClick}><SearchIcon id="icon" /></div>
      </div>
    </div>
  );
}

export default Navbar;