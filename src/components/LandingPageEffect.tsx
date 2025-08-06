import { useEffect, useState } from "react";

const LandingPageEffect = () => {
  const [initial, setInitial] = useState(true);
  const words = ["account.", "campaign.", "visitor.", "ad."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      if (initial) {
        setInitial(false);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length, initial, setInitial]);

  return (
    <span className="inline-block mt-1.5">
      <span className="bg-gradient-to-r from-sky-500/75 to-purple-400/80 bg-clip-text text-transparent">
        For every{" "}
      </span>
      <span
        key={words[currentWordIndex]}
        className={`inline-block ${
          !initial ? "animate-hero-title-fade-in" : ""
        }`}
      >
        <span className="bg-gradient-to-r from-purple-400/80 to-fuchsia-300 bg-clip-text text-transparent">
          {words[currentWordIndex]}
        </span>
      </span>
    </span>
  );
};

export default LandingPageEffect;
