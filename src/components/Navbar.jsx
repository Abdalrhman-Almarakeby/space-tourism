import { useEffect, useState } from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import NavItem from "./NavItem";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // close the menu when the window is scrolled by down or up more than 50px
    let prevScrollPos = window.scrollY;

    window.addEventListener("scroll", () => {
      let currentScrollPos = window.scrollY;
      let scrollDown = currentScrollPos > prevScrollPos;
      let scrollUp = currentScrollPos < prevScrollPos;
      let scrollAmount = Math.abs(currentScrollPos - prevScrollPos);

      if (
        (menuOpen && scrollDown && scrollAmount > 50) ||
        (scrollUp && scrollAmount > 50)
      ) {
        setMenuOpen(false);
      }

      prevScrollPos = currentScrollPos;
    });

    // close the menu when click out side it
    // and when the target of the event isn't the open and close icon
    const navbar = document.getElementById("navbar");

    document.addEventListener("click", (e) => {
      if (
        !navbar.contains(e.target) &&
        e.target !== document.getElementById("icon")
      ) {
        setMenuOpen(false);
      }
    });
  }, [menuOpen]);

  const navStyle = {
    right: menuOpen ? "0" : "-100%",
  };

  return (
    <header className="top-0 left-0 flex items-center justify-between w-full p-6 overflow-hidden md:pl-10 md:p-0 xl:pt-10">
      <div>
        <Link to={`/space-tourism/`}>
          <img src={logo} alt="Logo" className="h-10 md:h-auto" />
        </Link>
      </div>

      <img
        src={menuOpen ? closeIcon : hamburgerIcon}
        alt={`${menuOpen ? "Close" : "Hamburger"} Icon`}
        id="icon"
        className="z-50 w-6 cursor-pointer md:hidden"
        onClick={() => {
          setMenuOpen((prevMenuOpen) => !prevMenuOpen);
        }}
      />

      <nav
        className="h-[120svh] max-w-[75%] absolute pt-24 md:pt-0 md:static top-0 transition-all md:h-auto bg-[#ffffff0a] backdrop-blur-2xl md:px-12 xl:pl-20 xl:pr-32 md:block z-50"
        style={navStyle}
        id="navbar"
      >
        <ul className="flex gap-2 md:gap-10 md:text-sm tracking-[3px] flex-col md:flex-row xl:text-base">
          <NavItem
            num={0}
            href={`/space-tourism/`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavItem>
          <NavItem
            num={1}
            href={`/space-tourism/destination`}
            onClick={() => setMenuOpen(false)}
          >
            Destination
          </NavItem>
          <NavItem
            num={2}
            href={`/space-tourism/crew`}
            onClick={() => setMenuOpen(false)}
          >
            Crew
          </NavItem>
          <NavItem
            num={3}
            href={`/space-tourism/technology`}
            onClick={() => setMenuOpen(false)}
          >
            Technology
          </NavItem>
        </ul>
      </nav>
    </header>
  );
}
