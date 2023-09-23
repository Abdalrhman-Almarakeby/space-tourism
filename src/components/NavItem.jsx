/* eslint-disable react/prop-types */
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavItem({ href, children, num, ...props }) {
  const resolvedPath = useResolvedPath(href).pathname;
  const isActive = useMatch({ path: resolvedPath, end: true });
  return (
    <li className={`tab ${isActive ? "active-tab" : ""}`}>
      <Link to={href} {...props}>
        <span className="md:hidden xl:inline">0{num}</span> {children}
      </Link>
    </li>
  );
}
