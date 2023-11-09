export default function Hero() {
  return (
    <section id="hero">
      <div className="bg-left- h-[350px] w-full bg-[url('/illustration-working.svg')] bg-cover bg-[15px] bg-no-repeat"></div>
      <div className="flex flex-col items-center  gap-4 pt-4 text-center">
        <h1 className="text-4xl font-bold text-[#232127]">
          More than just shorter links
        </h1>
        <p className="text-[#BFBFBF]">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing
        </p>
        <a href="#" className="w-36 rounded-full  bg-[#2ACFCF] p-2 text-white">
          Get Started
        </a>
      </div>
    </section>
  );
}
