import { useEffect, useState } from "react";
import logo from "../assets/shared/logo.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import Tab from "./Tab";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    // document.addEventListener("click", function (e) {
    //   if (!document.getElementById("menu").contains(e.target))
    //     setOpenMenu(false);
    // });
    let prevScrollPos = window.pageYOffset;

    window.addEventListener("scroll", function () {
      let currentScrollPos = window.pageYOffset;
      let scrollDown = currentScrollPos > prevScrollPos;
      let scrollUp = currentScrollPos < prevScrollPos;
      let scrollAmount = Math.abs(currentScrollPos - prevScrollPos);

      if ((scrollDown && scrollAmount > 5) || (scrollUp && scrollAmount > 5))
        setOpenMenu(false);

      prevScrollPos = currentScrollPos;
    });
  }, []);

  const navStyle = {
    right: openMenu ? "0" : "-100%",
  };

  return (
    <header className="flex items-center justify-between p-6 md:pl-10 md:p-0 lg:pt-10 overflow-hidden top-0 left-0 w-full">
      <div onMouseEnter={() => console.log(openMenu)}>
        <img src={logo} alt="Logo" className="h-10 md:h-auto " />
      </div>

      <img
        src={openMenu ? closeIcon : hamburgerIcon}
        alt={`${openMenu ? "Close Icon" : "Hamburger Icon"} Icon`}
        className="w-6 md:hidden cursor-pointer z-50"
        onClick={() => {
          setOpenMenu((prevOpenMenu) => !prevOpenMenu);
        }}
      />

      <nav
        className="font-BarlowCondensed h-[120svh] max-w-[75%] absolute pt-24 md:pt-0 md:static top-0  transition-all md:h-auto text-white bg-[#ffffff0a]  backdrop-blur-2xl md:px-12 lg:pl-20 lg:pr-32 md:block"
        style={navStyle}
        id="menu"
      >
        <ul className="flex gap-2 md:gap-10 md:text-sm tracking-[3px] flex-col md:flex-row lg:text-base">
          <Tab num={0} href="/">
            Home
          </Tab>
          <Tab num={1} href="/destination">
            Destination
          </Tab>
          <Tab num={2} href="/crew">
            Crew
          </Tab>
          <Tab num={3} href="/technology">
            Technology
          </Tab>
        </ul>
      </nav>
    </header>
  );
}
