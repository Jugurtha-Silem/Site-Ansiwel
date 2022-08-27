import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
        <ul>
            <NavLink to="/" className={(nav) => (nav.isActive ?  "nav-active" : "")}>
                <li>Accueil</li>
            </NavLink>
            <NavLink to="/actualite" className={(nav) => (nav.isActive ?  "nav-active" : "")}>
                <li>Actualitées</li>
            </NavLink>
            <NavLink to="/video" className={(nav) => (nav.isActive ?  "nav-active" : "")}>
                <li>Video</li>
            </NavLink>
            <NavLink to="/contact" className={(nav) => (nav.isActive ?  "nav-active" : "")}>
                <li>Contact</li>
            </NavLink>
            
        </ul>
    </div>
  );
};

export default Navigation;
