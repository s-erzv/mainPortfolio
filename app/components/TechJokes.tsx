'use client';
import React, { useEffect, useState } from "react";

const TechJokes = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://geek-jokes.sameerkumar.website/api?format=json");
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
    console.error(error); // agar error tidak dianggap unused
    setJoke("Oops! Failed to fetch a joke.");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <section className="mx-10 bg-[#A9D1F6] dark:bg-[#463359] py-10 px-5 text-center rounded-2xl shadow-md max-w-[1000px] z-20">
      <h2 className="font-bold text-[25px] md:text-[32px] text-transparent bg-clip-text bg-gradient-to-r dark:from-secondary dark:to-primary from-[#323DC7] to-[#A9D1F6]">Tech Joke of the Moment</h2>
      {loading ? (
        <p className="text-gray-500 italic">Loading...</p>
      ) : (
        <p className="text-lg text-black/85 dark:text-white/80">{joke}</p>
      )}
      <button
        onClick={fetchJoke}
        className="mt-6 px-4 py-2 bg-primary hover:bg-foreground dark:hover:bg-secondary text-white font-semibold rounded-xl transition-all"
      >
        Get Another Joke
      </button>
    </section>
  );
};

export default TechJokes;
