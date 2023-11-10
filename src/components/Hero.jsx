export default function Hero() {
  return (
    <section
      id="hero"
      className="flex-row-reverse lg:flex lg:px-16 xl:px-24 xl:py-20 2xl:px-40"
    >
      <div className="h-[350px] w-full bg-[url('/illustration-working.svg')] bg-cover bg-[15px] bg-no-repeat md:h-[400px] md:bg-contain md:bg-right"></div>
      <div className="flex flex-col items-center gap-4 pt-4 text-center lg:items-start lg:text-left">
        <h1 className="text-4xl font-bold text-[#232127] lg:text-5xl 2xl:text-8xl">
          More than just shorter links
        </h1>
        <p className="px-10 text-[#BFBFBF] lg:px-0 2xl:text-2xl">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing
        </p>
        <a
          href="#"
          className="w-36 rounded-full  bg-[#2ACFCF] p-2 text-white hover:opacity-50 lg:text-center 2xl:text-xl"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
