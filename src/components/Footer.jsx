import LogoSVG from "../icons/LogoSVG";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10 bg-[#232127] py-10 lg:flex-row lg:items-start lg:justify-center 2xl:gap-20">
      <LogoSVG fill={"white"} />
      <div className="flex flex-col gap-4 text-center lg:pl-20 lg:text-left">
        <h4 className="font-bold text-white">Features</h4>
        <a href="#" className="text-[#BFBFBF]">
          Link Shortening
        </a>
        <a href="#" className="text-[#BFBFBF]">
          Branded Links
        </a>
        <a href="#" className="text-[#BFBFBF]">
          Analytics
        </a>
      </div>
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <h4 className="font-bold text-white">Resources</h4>
        <a href="#" className="text-[#BFBFBF]">
          Blog
        </a>
        <a href="#" className="text-[#BFBFBF]">
          Developers
        </a>
        <a href="#" className="text-[#BFBFBF]">
          Support
        </a>
      </div>
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <h4 className="font-bold text-white">Company</h4>
        <a href="#" className="text-[#BFBFBF]">
          About
        </a>
        <a href="#" className="text-[#BFBFBF]">
          Our Team
        </a>
        <a href="#" className="text-[#BFBFBF]">
          Careers
        </a>
        <a href="#" className="text-[#BFBFBF]">
          Contact
        </a>
      </div>
      <div className="flex justify-between gap-4">
        <img src="/icon-facebook.svg" alt="icon of facebook" />
        <img src="/icon-twitter.svg" alt="icon of twitter" />
        <img src="/icon-pinterest.svg" alt="icon of pinterest" />
        <img src="/icon-instagram.svg" alt="icon of instagram" />
      </div>
    </footer>
  );
}
