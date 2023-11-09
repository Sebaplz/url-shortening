import Card from "./Card";

export default function Statistics() {
  return (
    <section className="flex flex-col gap-4 bg-[#eee] p-4 pb-20 text-center">
      <h2 className="text-3xl font-bold">Advanced Statistics</h2>
      <p className="pb-12 text-[#BFBFBF]">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <Card />
    </section>
  );
}
