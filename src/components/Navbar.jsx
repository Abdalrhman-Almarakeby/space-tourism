import { useEffect, useState } from "react";
import logo from "../assets/shared/logo.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

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
          console.log(openMenu);
        }}
      />

      <nav
        className="font-BarlowCondensed h-[120svh] max-w-[75%] absolute pt-24 md:pt-0 md:static top-0  transition-all md:h-auto text-white bg-[#ffffff0a]  backdrop-blur-2xl md:px-12 lg:pl-20 lg:pr-32 md:block"
        style={navStyle}
        id="menu"
      >
        <ul className="flex gap-2 md:gap-10 md:text-sm tracking-[3px] flex-col md:flex-row lg:text-base">
          <li className="tab active-tab">
            <a href="/">
              <span className="md:hidden lg:inline">00</span> Home
            </a>
          </li>
          <li className="tab">
            <a href="/destination">
              <span className="md:hidden lg:inline">01</span> Destination
            </a>
          </li>
          <li className="tab">
            <a href="/crew">
              <span className="md:hidden lg:inline">02</span> Crew
            </a>
          </li>
          <li className="tab">
            <a href="/technology">
              <span className="md:hidden lg:inline">03</span> Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
