import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Navbar() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink className="Pokedex" to="/pokedex">
            Pokedex
          </NavLink>
        </li>
        <li>
          <NavLink className="Equipo" to="/equipo">
            Equipo
          </NavLink>
        </li>
        <li>
          <NavLink className="Login" to="/login">
            Entrar
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
