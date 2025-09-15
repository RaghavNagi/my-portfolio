import { useState, useRef, useEffect } from "react";

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const scrambleRef = useRef(null);
  const unscrambleRef = useRef(null);
  const timeoutRef = useRef(null);

  // Shuffle only using original characters (Fisher-Yates shuffle)
  const shuffleArray = (arr) => {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getShuffled = () => shuffleArray([...text]).join("");

  const handleMouseEnter = () => {
    // Prevent stacking animations
    if (scrambleRef.current || unscrambleRef.current) return;

    // Scramble for ~0.75s
    scrambleRef.current = setInterval(() => {
      setDisplayText(getShuffled());
    }, 30);

    timeoutRef.current = setTimeout(() => {
      clearInterval(scrambleRef.current);
      scrambleRef.current = null;

      // Progressive unscramble (lock characters one by one in correct place)
      const original = text.split("");
      let step = 0;

      unscrambleRef.current = setInterval(() => {
        step++;

        const locked = original.slice(0, step); // Correct part
        const remaining = shuffleArray(original.slice(step)); // Shuffle the rest
        const newDisplay = [...locked, ...remaining].join("");

        setDisplayText(newDisplay);

        if (step >= original.length) {
          clearInterval(unscrambleRef.current);
          unscrambleRef.current = null;
        }
      }, 50);
    }, 750);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearInterval(scrambleRef.current);
      clearInterval(unscrambleRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <span
      className="cursor-pointer inline-block text-[#eeeeee]"
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;