import { useState } from "react";
import LogoSVG from "../icons/LogoSVG";
import MenuMobile from "../icons/MenuMobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-4 py-8 lg:px-16 xl:px-24 2xl:px-40">
      <nav className="flex items-center justify-between lg:justify-start">
        <LogoSVG fill={"#232127"} width={150} />
        <button onClick={handleMenu} className="block lg:hidden">
          <MenuMobile className="h-8 w-8" />
        </button>

        {/* Menú mobile*/}
        <ul
          className={`absolute top-20 flex w-[92%] flex-col items-center gap-6 rounded-lg bg-[#3B3054] py-8 text-white md:w-[96%] lg:hidden ${
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

        {/* Menú */}
        <div className="hidden lg:flex lg:w-full lg:items-center lg:justify-between lg:pl-4">
          <ul className="flex gap-4">
            <li>
              <a href="#" className="font-bold text-[#BFBFBF] hover:text-black">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="font-bold text-[#BFBFBF] hover:text-black">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="font-bold text-[#BFBFBF] hover:text-black">
                Resources
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="font-bold text-[#BFBFBF] hover:text-black">
                Login
              </a>
            </li>
            <li>
              <button
                href="#"
                className="w-24 rounded-full bg-[#2ACFCF] p-2 font-bold text-white hover:opacity-50"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
