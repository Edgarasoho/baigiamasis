import React from "react";
import { slide as Menu } from "react-burger-menu";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../Images/Logotipas.png";

import "./Navbar.scss";

const CustomBurgerIcon = () => <img src="path/to/your/icon.png" />;

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} height={150} width={500} />
      <ul>
        <Link to="/Home">Home</Link>

        <CustomLink to="/product">Produktai</CustomLink>
        <CustomLink to="/about">Apie mus</CustomLink>
        <CustomLink to="/contact">Kontaktai</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Navbar;
