import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
   return (
   <nav className="Navbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/soda">Soda</NavLink>
      <NavLink exact to="/chips">Chips</NavLink>
      <NavLink exact to="/candy">Candy</NavLink>
   </nav>
   ) 
}

export default Navbar;