import Card from "./Card";

export default function Statistics() {
  return (
    <section className="flex flex-col gap-4 bg-[#eee] p-4 pb-20 text-center lg:px-16 xl:px-24 2xl:px-40">
      <h2 className="text-3xl font-bold">Advanced Statistics</h2>
      <p className="pb-12 text-[#BFBFBF] lg:mx-auto lg:w-[450px]">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <Card />
    </section>
  );
}
