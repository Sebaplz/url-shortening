export default function ShortingLink() {
  return (
    <section
      id="shorting"
      className="bg-gradient-to-b from-white to-[#eee] py-8"
    >
      <article className="mx-4 flex flex-col gap-4 rounded-lg bg-[#3B3054] bg-[url('/bg-shorten-mobile.svg')] bg-right-top bg-no-repeat p-6">
        <input
          type="text"
          name="shorten"
          id="shorten"
          placeholder="Shorten a link here..."
          className="w-full rounded-md p-2"
        />
        <button className="w-full rounded-md bg-[#2ACFCF] p-2 font-bold text-white">
          Shorten It!
        </button>
      </article>
    </section>
  );
}