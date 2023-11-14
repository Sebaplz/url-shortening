import { useEffect, useState } from "react";

export default function ShortingLink() {
  const [inputLink, setInputLink] = useState("");
  const [errorFetch, setErrorFetch] = useState("");
  const [error, setError] = useState("");
  const [links, setLinks] = useState([]);
  const [copiedButton, setCopiedButton] = useState(null);

  const handleChange = (e) => {
    setInputLink(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputLink.trim() !== "") {
      fetchLink(inputLink);
      setInputLink("");
    } else {
      setError("Please add a link");
    }
  };

  const handleCopy = (id) => {
    const copyLink = links.find((link) => link.id === id);

    navigator.clipboard
      .writeText(copyLink.short)
      .then(() => {
        setCopiedButton(id);
      })
      .catch((err) => {
        console.error("Error copying to clipboard:", err);
      });
  };

  const handleRemove = (id) => {
    const updateLinks = links.filter((link) => link.id !== id);
    setLinks(updateLinks);
  };

  async function fetchLink(url) {
    const urlBase = "https://url-shortener-service.p.rapidapi.com/shorten";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": import.meta.env.VITE_KEY,
        "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
      },
      body: new URLSearchParams({
        url: url,
      }),
    };

    try {
      const response = await fetch(urlBase, options);
      if (response.ok) {
        const result = await response.json();
        setErrorFetch(null);
        setLinks([
          ...links,
          {
            id: crypto.randomUUID(),
            original: inputLink,
            short: result.result_url,
          },
        ]);
      } else if (response.status === 400) {
        const errorResult = await response.json();
        setErrorFetch(errorResult.error);
      } else {
        throw new Error(`Request error: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Cargar los links desde el localStorage al cargar el componente
  useEffect(() => {
    const storedLinks = localStorage.getItem("shortLinks");
    if (storedLinks) {
      setLinks(JSON.parse(storedLinks));
    }
  }, []);

  // Guardar los links en el localStorage cuando el array se actualiza
  useEffect(() => {
    localStorage.setItem("shortLinks", JSON.stringify(links));
  }, [links]);

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
      {links.map((link) => (
        <article
          key={link.id}
          className="mx-4 flex flex-col gap-2 rounded-md bg-white lg:mx-0 lg:flex-row lg:items-center lg:justify-between lg:py-2"
        >
          <p className="truncate px-4 pb-2 pt-4 lg:pt-2">{link.original}</p>
          <div className="h-[1px] w-full bg-[#BFBFBF] lg:hidden"></div>
          <div className="px-4 pb-4 pt-2 lg:flex lg:items-center lg:gap-2 lg:pb-0 lg:pt-0">
            <p className="text-[#2ACFCF]">{link.short}</p>
            <button
              onClick={() => handleCopy(link.id)}
              className={`mt-2 w-full rounded-md bg-[#2ACFCF] p-2 font-bold text-white hover:bg-[#3B3054] lg:mt-0 lg:w-[100px] ${
                copiedButton === link.id ? "bg-[#3B3054]" : ""
              }`}
            >
              {copiedButton === link.id ? "Copied!" : "Copy"}
            </button>
            <button
              className="mt-2 w-full rounded-md bg-red-700 p-2 font-bold text-white hover:opacity-50 lg:mt-0 lg:w-[100px]"
              onClick={() => handleRemove(link.id)}
            >
              Remove
            </button>
          </div>
        </article>
      ))}

      {errorFetch && (
        <p className="text-center text-red-500">Error: {errorFetch}</p>
      )}
    </section>
  );
}
