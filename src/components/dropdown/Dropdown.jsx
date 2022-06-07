import React, { useState, useRef, useEffect } from "react";
import "./dropdown.css";

function Dropdown({ options = [], prompt, value, onChange, id, label }) {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    ["click", "touchend"].forEach((e) => {
      document.addEventListener(e, toggle);
    });
    return () =>
      ["click", "touchend"].forEach((e) => {
        document.removeEventListener(e, toggle);
      });
  }, []);

  function toggle(e) {
    setOpen(e && e.target === ref.current);
  }

  function filter(options) {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  }

  function displayValue() {
    if (term.length > 0) return term;
    if (value) return value[label];
    return "";
  }

  function selectOption(option) {
    setTerm("");
    onChange(option);
    setOpen(false);
    console.log(option);
  }

  return (
    <div className="dropdown">
      <div className="control">
        <div className="selected-value">
          <input
            type="text"
            ref={ref}
            placeholder={value ? value[label] : prompt}
            value={displayValue()}
            onChange={(e) => {
              setTerm(e.target.value);
              onChange([]);
            }}
            onClick={toggle}
            onTouchEnd={toggle}
          />
        </div>
        <div className={`arrow ${open ? "open" : null}`}></div>
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {filter(options).map((option) => (
          <div
            key={option[id]}
            className={`option ${value === open ? "selected" : null}`}
            onClick={() => selectOption(option)}
            onTouchEnd={() => selectOption(option)}
          >
            {option[label]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
