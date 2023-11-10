export default function GetStarted() {
  return (
    <section
      id="getStarted"
      className="flex h-[250px] flex-col items-center justify-center gap-4 bg-[#3B3054] bg-[url('/bg-boost-mobile.svg')] pt-4 text-center md:bg-center md:bg-no-repeat lg:bg-[url('/bg-boost-desktop.svg')] 2xl:gap-10"
    >
      <h3 className="text-2xl font-bold text-white 2xl:text-4xl">
        Boost your links today
      </h3>
      <a
        href="#"
        className="mx-auto w-[150px] rounded-full bg-[#2ACFCF] p-2 px-6 text-white hover:bg-[#84d6d6]"
      >
        Get Started
      </a>
    </section>
  );
}
