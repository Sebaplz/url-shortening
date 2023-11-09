export default function Card() {
  return (
    <div className="flex flex-col gap-24">
      <article className="relative rounded-md bg-white p-4">
        <div
          className={`absolute -top-10 left-1/2 h-[85px] w-[85px] -translate-x-1/2 rounded-full bg-[#3B3054] bg-[url('/icon-brand-recognition.svg')] bg-center bg-no-repeat`}
        ></div>
        <h3 className="pb-4 pt-10 text-2xl font-bold">Brand Recognition</h3>
        <p className="pb-8 text-[#BFBFBF]">
          Boost your brand recognition with each click. Generic links don&apos;t
          mean a thing. Branded links help instil confidence in your content.
        </p>
        <div className="absolute -bottom-[70px] left-1/2 h-[70px] w-[10px] -translate-x-1/2 bg-[#2ACFCF]"></div>
      </article>
      <article className="relative rounded-md bg-white p-4">
        <div
          className={`absolute -top-10 left-1/2 h-[85px] w-[85px] -translate-x-1/2 rounded-full bg-[#3B3054] bg-[url('/icon-detailed-records.svg')] bg-center bg-no-repeat`}
        ></div>
        <h3 className="pb-4 pt-10 text-2xl font-bold">Detailed Records</h3>
        <p className="pb-8 text-[#BFBFBF]">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
        <div className="absolute -bottom-[70px] left-1/2 h-[70px] w-[10px] -translate-x-1/2 bg-[#2ACFCF]"></div>
      </article>
      <article className="relative rounded-md bg-white p-4">
        <div
          className={`absolute -top-10 left-1/2 h-[85px] w-[85px] -translate-x-1/2 rounded-full bg-[#3B3054] bg-[url('/icon-fully-customizable.svg')] bg-center bg-no-repeat`}
        ></div>
        <h3 className="pb-4 pt-10 text-2xl font-bold">Fully Customizable</h3>
        <p className="pb-8 text-[#BFBFBF]">
          Improve brand awareness and content discorverability through
          customizable links, supercharging audience engagement.
        </p>
      </article>
    </div>
  );
}
