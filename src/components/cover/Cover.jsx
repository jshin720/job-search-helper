import React, { useState, useRef } from "react";
// import DragDrop from "./DragDrop";

function Cover() {
  
    
    

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
    // const handleChange = (e) => {
    //   console.log("handleChange", e.target);
    //   e.preventDefault();
    //   if (e.target.files && e.target.files[0]) {
    //   }
    // };


  // const onButtonClick = () => {
  //   inputRef.current.click();
  // };
  return (
    <div>
      <form
        id="form-file-upload"
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="file"
          id="input-file-upload"
          multiple={false}
          onChange={handleChange}
        />
        <label id="label-file-upload" htmlFor="input-file-upload">
          <div>
            <p>Drag and drop your file here or</p>
            <button className="upload-button" onClick={onButtonClick}>
              Upload a file
            </button>
          </div>
        </label>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>

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
        <input type="submit" value="value" />
      </form>
    </div>
  );
}

export default Cover;
