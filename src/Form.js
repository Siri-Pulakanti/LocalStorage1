import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  function handleBtnClick(e) {
    setName(e.target.value);
  }
  const handleSave = () => {
    if (name.trim() !== "") {
      localStorage.setItem("name", name);
      alert("Username saved!");
    } else {
      alert("Please enter a username");
    }
  };
  return (
    <div>
      <input type="text" onChange={(e) => handleBtnClick(e)} value={name} />
      <button onClick={() => handleSave()}>Save</button>
    </div>
  );
}

export default Form;
