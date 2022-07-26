import React, { useState } from "react";
import Button from "@mui/material/Button";

function InputArea(props) {
  const [input, setInput] = useState("");

  function handleInput(entry) {
    const newInput = entry.target.value;
    setInput(newInput);
  }

  return (
    <div>
      <input
        placeholder="Enter to-do item here"
        className="input"
        onChange={handleInput}
        type="text"
        value={input}
      />
      <Button
        variant="contained"
        onClick={() => {
          props.add(input);
          setInput("");
        }}
      >
        Add
      </Button>
    </div>
  );
}

export default InputArea;
