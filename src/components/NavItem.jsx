import { Link, useMatch, useResolvedPath } from "react-router-dom";
import propTypes from "prop-types";

export default function NavItem({ href, children, num, ...props }) {
  const resolvedPath = useResolvedPath(href).pathname;
  const isActive = useMatch({ path: resolvedPath, end: true });

  return (
    <li className={`nav-item ${isActive ? "active" : ""}`}>
      <Link to={href} {...props}>
        <span className="md:hidden xl:inline">0{num}</span> {children}
      </Link>
    </li>
  );
}

NavItem.propTypes = {
  href: propTypes.string.isRequired,
  children: propTypes.string.isRequired,
  num: propTypes.number.isRequired,
};
