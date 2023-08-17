import React, { useState, useRef } from "react";
import DragDrop from "./DragDrop";

function Cover() {
  const [jobPosition, setJobPosition] = useState("");
  const [jobCompany, setJobCompany] = useState("");
  const [dragActive, setDragActive] = useState(false)

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }


  return (
    <div>
      <DragDrop inputRef={inputRef} />
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="job-position">Position</label>
        <input
          id="job-position"
          type="text"
          value={jobPosition}
          onChange={(e) => setJobPosition(e.target.value)}
        />
        <label for="company-name">Company</label>
        <input
          id="company-name"
          type="text"
          value={jobCompany}
          onChange={(e) => setJobCompany(e.target.value)}
        />
        <input type="submit" value="value"/>
      </form>
    </div>
  );
}

export default Cover;
