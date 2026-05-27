import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function App() {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value);

  const handeChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log(debounceValue);
  }, [debounceValue]);

  return (
    <>
      <div className="App">
        <input value={value} onChange={handeChange} />
        <br />
        <br />

        <h2>Typing Value: {value}</h2>
        <br />
        <br />
        <h2>Debounced Value: {debounceValue}</h2>
      </div>
    </>
  );
}

export default App;
