import LogoSVG from "../icons/LogoSVG";
import IconFacebook from "../icons/IconFacebook";
import IconTwitter from "../icons/IconTwitter";
import IconPinterest from "../icons/IconPinterest";
import IconInstagram from "../icons/IconInstagram";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10 bg-[#232127] py-10 lg:flex-row lg:items-start lg:justify-center 2xl:gap-20">
      <LogoSVG fill={"white"} />
      <div className="flex flex-col gap-4 text-center lg:pl-20 lg:text-left">
        <h4 className="font-bold text-white">Features</h4>
        <a href="#" className="text-[#BFBFBF] hover:text-[#2ACFCF]">
          Link Shortening
        </a>
        <a href="#" className="text-[#BFBFBF] hover:text-[#2ACFCF]">
          Branded Links
        </a>
        <a href="#" className="text-[#BFBFBF] hover:text-[#2ACFCF]">
          Analytics
        </a>
      </div>
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <h4 className="font-bold text-white">Resources</h4>
        <a href="#" className="text-[#BFBFBF] hover:text-[#2ACFCF]">
          Blog
        </a>
        <a href="#" className="text-[#BFBFBF] hover:text-[#2ACFCF]">
          Developers
        </a>
        <a href="#" className="text-[#BFBFBF] hover:text-[#2ACFCF]">
          Support
        </a>
      </div>
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <h4 className="font-bold text-white">Company</h4>
        <a href="#" className="text-[#BFBFBF] hover:text-[#2ACFCF]">
          About
        </a>
        <a href="#" className="text-[#BFBFBF] hover:text-[#2ACFCF]">
          Our Team
        </a>
        <a href="#" className="text-[#BFBFBF] hover:text-[#2ACFCF]">
          Careers
        </a>
        <a href="#" className="text-[#BFBFBF] hover:text-[#2ACFCF]">
          Contact
        </a>
      </div>
      <div className="flex items-center justify-between gap-4">
        <IconFacebook className="cursor-pointer fill-white hover:fill-[#2ACFCF]" />
        <IconTwitter className="cursor-pointer fill-white hover:fill-[#2ACFCF]" />
        <IconPinterest className="cursor-pointer fill-white hover:fill-[#2ACFCF]" />
        <IconInstagram className="cursor-pointer fill-white hover:fill-[#2ACFCF]" />
      </div>
    </footer>
  );
}
