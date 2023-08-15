import React, { useState, useRef } from 'react';
import DragDrop from './DragDrop';

function Cover() {
  const [jobPosition, setJobPosition] = useState("");
  const [jobCompany, setJobCompany] = useState("")

  const inputRef = useRef(null);



  return (
    <div>
      <DragDrop inputRef={inputRef} />
      <form>
        <label>Position</label>
        <input type="text" />
        <label>Company</label>
        <input type="text" />
      </form>
    </div>
  );
}

export default Cover;
