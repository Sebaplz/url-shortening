import { useState } from "react";
import LogoSVG from "../icons/LogoSVG";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-4 py-8">
      <nav className="flex items-center justify-between">
        <LogoSVG fill={"#232127"} />
        <button onClick={handleMenu} className="block lg:hidden">
          <img src="/menu.svg" alt="svg de menú" className="h-8 w-8" />
        </button>

        {/* Menú */}
        <ul
          className={`absolute top-20 flex w-[90%] flex-col items-center gap-6 rounded-lg bg-[#3B3054] py-8 text-white md:w-[95%] ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <div className="h-[1px] w-[80%] bg-[#BFBFBF]"></div>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <button className="w-[280px] rounded-full bg-[#2ACFCF] p-2 text-white">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
