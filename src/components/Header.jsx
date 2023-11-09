import LogoSVG from "../icons/LogoSVG";

export default function Header() {
  const handleMenu = () => {
    console.log("Click en el boton del menu");
  };
  return (
    <header className="px-4 py-8">
      <nav className="flex items-center justify-between">
        <LogoSVG fill={"#232127"} />
        <button onClick={handleMenu}>
          <img src="/menu.svg" alt="svg de menu" className="h-8 w-8" />
        </button>
      </nav>
    </header>
  );
}
