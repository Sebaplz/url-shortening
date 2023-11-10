import { useState } from "react";

export default function ShortingLink() {
  const [inputLink, setInputLink] = useState("");

  const [shortLink, setShortLink] = useState("");
  const [errorFetch, setErrorFetch] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInputLink(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputLink.trim() !== "") {
      fetchLink(inputLink);
    } else {
      setError("Please add a link");
    }
  };

  async function fetchLink(url) {
    const apiUrl = "https://cleanuri.com/api/v1/shorten";
    const params = new URLSearchParams();
    params.append("url", encodeURIComponent(url));

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      if (!response.ok) {
        throw new Error("Error al acortar la URL");
      }
      const data = await response.json();
      setShortLink(data.result_url);
      setErrorFetch(null);
    } catch (e) {
      setErrorFetch(e.message);
    }
  }

  return (
    <section
      id="shorting"
      className="flex flex-col gap-4 bg-gradient-to-b from-white to-[#eee] py-8 lg:px-16 xl:px-24 2xl:px-40"
    >
      <form onSubmit={handleSubmit}>
        <article className="mx-4 flex flex-col gap-4 rounded-lg bg-[#3B3054] bg-[url('/bg-shorten-mobile.svg')] bg-right-top bg-no-repeat p-6 lg:mx-0 lg:flex-row lg:bg-[url('/bg-shorten-desktop.svg')] lg:p-10">
          <div className="flex w-full flex-col gap-2">
            <input
              type="text"
              name="shorten"
              id="shorten"
              placeholder="Shorten a link here..."
              className={`w-full rounded-md p-2 ${
                error ? "ring-2 ring-red-500" : ""
              }`}
              value={inputLink}
              onChange={handleChange}
            />
            <span className="italic text-red-500">{error}</span>
          </div>
          <button className="w-full rounded-md bg-[#2ACFCF] p-2 font-bold text-white hover:bg-[#84d6d6] lg:h-[40px] lg:w-[200px]">
            Shorten It!
          </button>
        </article>
      </form>
      {shortLink && (
        <article className="mx-4 flex flex-col gap-2 rounded-md bg-white lg:mx-0 lg:flex-row lg:items-center lg:justify-between lg:py-2">
          <p className="truncate px-4 pb-2 pt-4 lg:pt-2">{inputLink}</p>
          <div className="h-[1px] w-full bg-[#BFBFBF] lg:hidden"></div>
          <div className="px-4 pb-4 pt-2 lg:flex lg:items-center lg:gap-2 lg:pb-0 lg:pt-0">
            <p className="text-[#2ACFCF]">{shortLink}</p>
            <button className="mt-2 w-full rounded-md bg-[#2ACFCF] p-2 font-bold text-white hover:bg-[#3B3054] lg:mt-0 lg:w-[100px]">
              Copy
            </button>
          </div>
        </article>
      )}

      {errorFetch && (
        <p className="text-center text-red-500">Error: {errorFetch}</p>
      )}
    </section>
  );
}
