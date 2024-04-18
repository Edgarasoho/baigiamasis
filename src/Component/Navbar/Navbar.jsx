import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../Images/Logotipas.png";
import "./Navbar.scss";
function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} height={150} width={500} />
      </Link>
      <ul>
        <CustomLink to="/pricing">Produktai</CustomLink>
        <CustomLink to="/about">Apie mus</CustomLink>
      </ul>
    </nav>
  );
}

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
