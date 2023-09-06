import logo from "../assets/shared/logo.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-6  md:pl-10 md:p-0  lg:pt-10">
      <div>
        <img src={logo} alt="Logo" className="h-10 md:h-auto" />
      </div>

      <img src={hamburgerIcon} alt="Hamburger Icon" className="w-6 md:hidden" />

      <nav className="font-BarlowCondensed text-white bg-[#ffffff0a] backdrop-blur-2xl pl-20 pr-32 hidden md:block">
        <ul className="flex text-sm tracking-[3px] lg:text-base">
          <li className="hover:border-b-[3px] border-white/30 border-solid active-tab">
            <a href="/" className="inline-block py-10 px-5">
              <span className="hidden lg:inline">00</span> Home
            </a>
          </li>
          <li className="hover:border-b-[3px] border-white/30 border-solid">
            <a href="/destination" className="inline-block py-10 px-5">
              <span className="hidden lg:inline">01</span> Destination
            </a>
          </li>
          <li className="hover:border-b-[3px] border-white/30 border-solid">
            <a href="/crew" className="inline-block py-10 px-5">
              <span className="hidden lg:inline">02</span> Crew
            </a>
          </li>
          <li className="hover:border-b-[3px] border-white/30 border-solid">
            <a href="/technology" className="inline-block py-10 px-5">
              <span className="hidden lg:inline">03</span> Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
