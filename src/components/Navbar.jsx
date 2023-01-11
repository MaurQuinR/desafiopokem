import { Link, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import icono from "../img/pokemon-icon.png";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <Nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <div className="logo">
           <img className="icono" src={icono} alt="icono"/>
       </div>
      </Link>

      <NavLink className={setActiveClass} to="/">
        Home
      </NavLink>
      {" - "}
      <NavLink className={setActiveClass} to="/pokemones">
        Pokémones
      </NavLink>
    </Nav>
  );
}