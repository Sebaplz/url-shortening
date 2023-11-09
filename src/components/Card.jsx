export default function Card() {
  return (
    <div className="flex flex-col gap-24 lg:flex-row lg:gap-8">
      <article className="relative h-auto rounded-md bg-white p-4 lg:h-[250px]">
        <div
          className={`absolute -top-10 left-1/2 h-[85px] w-[85px] -translate-x-1/2 rounded-full bg-[#3B3054] bg-[url('/icon-brand-recognition.svg')] bg-center bg-no-repeat lg:left-[25%]`}
        ></div>
        <h3 className="pb-4 pt-10 text-2xl font-bold lg:text-left lg:text-xl">
          Brand Recognition
        </h3>
        <p className="pb-8 text-[#BFBFBF] lg:pb-0 lg:text-left">
          Boost your brand recognition with each click. Generic links don&apos;t
          mean a thing. Branded links help instil confidence in your content.
        </p>
        <div className="absolute -bottom-[70px] left-1/2 h-[70px] w-[10px] -translate-x-1/2 bg-[#2ACFCF] lg:hidden"></div>
        <div className="absolute -right-[70px] top-20 hidden h-[10px] w-[70px] bg-[#2ACFCF] lg:block"></div>
      </article>
      <article className="relative rounded-md bg-white p-4 lg:mt-10 lg:h-[250px]">
        <div
          className={`absolute -top-10 left-1/2 h-[85px] w-[85px] -translate-x-1/2 rounded-full bg-[#3B3054] bg-[url('/icon-brand-recognition.svg')] bg-center bg-no-repeat lg:left-[25%]`}
        ></div>
        <h3 className="pb-4 pt-10 text-2xl font-bold lg:text-left lg:text-xl">
          Detailed Records
        </h3>
        <p className="pb-8 text-[#BFBFBF] lg:pb-0 lg:text-left">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
        <div className="absolute -bottom-[70px] left-1/2 h-[70px] w-[10px] -translate-x-1/2 bg-[#2ACFCF] lg:hidden"></div>
        <div className="absolute -right-[70px] top-20 hidden h-[10px] w-[70px] bg-[#2ACFCF] lg:block"></div>
      </article>
      <article className="relative rounded-md bg-white p-4 lg:mt-20">
        <div
          className={`absolute -top-10 left-1/2 h-[85px] w-[85px] -translate-x-1/2 rounded-full bg-[#3B3054] bg-[url('/icon-brand-recognition.svg')] bg-center bg-no-repeat lg:left-[25%]`}
        ></div>
        <h3 className="pb-4 pt-10 text-2xl font-bold lg:text-left lg:text-xl">
          Fully Customizable
        </h3>
        <p className="pb-8 text-[#BFBFBF] lg:pb-0 lg:text-left">
          Improve brand awareness and content discorverability through
          customizable links, supercharging audience engagement.
        </p>
      </article>
    </div>
  );
}
