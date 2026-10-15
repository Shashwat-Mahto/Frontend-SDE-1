import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import "./Debounce.css";

function Debounce() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  return (
    <div className="debounce">
      <h2 className="debounce-title">Debounce</h2>
      <input
        type="text"
        className="debounce-input"
        placeholder="Start typing..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <div className="debounce-values">
        <p className="debounce-row">
          <span className="debounce-label">Normal Value</span>
          <span className="debounce-value">{value}</span>
        </p>
        <p className="debounce-row">
          <span className="debounce-label">Debounced Value</span>
          <span className="debounce-value">{debouncedValue}</span>
        </p>
      </div>
    </div>
  );
}

export default Debounce;
