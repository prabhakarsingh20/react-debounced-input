import { useState, useEffect } from "react";

export default function useDebounce(inputValue, delay = 3000) {
  const [debounceValue, setDebounceValue] = useState(inputValue);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(inputValue), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, delay]);

  return debounceValue;
}
