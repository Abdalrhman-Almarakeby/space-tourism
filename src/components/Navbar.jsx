import { useEffect, useState } from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import NavItem from "./NavItem";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    window.addEventListener("scroll", function () {
      let currentScrollPos = window.pageYOffset;
      let scrollDown = currentScrollPos > prevScrollPos;
      let scrollUp = currentScrollPos < prevScrollPos;
      let scrollAmount = Math.abs(currentScrollPos - prevScrollPos);

      if ((scrollDown && scrollAmount > 5) || (scrollUp && scrollAmount > 5))
        setMenuOpen(false);

      prevScrollPos = currentScrollPos;
    });
  }, [menuOpen]);

  const navStyle = {
    right: menuOpen ? "0" : "-100%",
  };

  return (
    <header className="top-0 left-0 flex items-center justify-between w-full p-6 overflow-hidden md:pl-10 md:p-0 xl:pt-10">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 md:h-auto" />
        </Link>
      </div>

      <img
        src={menuOpen ? closeIcon : hamburgerIcon}
        alt={`${menuOpen ? "Close" : "Hamburger"} Icon`}
        className="z-50 w-6 cursor-pointer md:hidden"
        onClick={() => {
          setMenuOpen((prevMenuOpen) => !prevMenuOpen);
        }}
      />

      <nav
        className="h-[120svh] max-w-[75%] absolute pt-24 md:pt-0 md:static top-0 transition-all md:h-auto bg-[#ffffff0a] backdrop-blur-2xl md:px-12 xl:pl-20 xl:pr-32 md:block"
        style={navStyle}
        id="menu"
      >
        <ul className="flex gap-2 md:gap-10 md:text-sm tracking-[3px] flex-col md:flex-row xl:text-base">
          <NavItem num={0} href="/">
            Home
          </NavItem>
          <NavItem num={1} href="/destination">
            Destination
          </NavItem>
          <NavItem num={2} href="/crew">
            Crew
          </NavItem>
          <NavItem num={3} href="/technology">
            Technology
          </NavItem>
        </ul>
      </nav>
    </header>
  );
}
