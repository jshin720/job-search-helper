import React, { useState, useRef } from "react";
import DragDrop from "./DragDrop";

function Cover() {
  const [jobPosition, setJobPosition] = useState("");
  const [jobCompany, setJobCompany] = useState("");
  const [dragActive, setDragActive] = useState(false)

  const inputRef = useRef(null);

   const handleDrag = (e) => {
     e.preventDefault();
     e.stopPropagation();

     if (e.type === "dragenter" || e.type === "dragover") {
       setDragActive(true);
     } else if (e.type === "dragleave") {
       setDragActive(false);
     }
   };
     const handleDrop = (e) => {
       console.log("handleDrop", e);
       e.preventDefault();
       e.stopPropagation();
       setDragActive(false);

       if (e.dataTransfer.files && e.dataTransfer.files[0]) {
       }
     };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
    const handleChange = (e) => {
      console.log("handleChange", e.target);
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
      }
    };


  const onButtonClick = () => {
    inputRef.current.click();
  };
  return (
    <div>
      <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      
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
