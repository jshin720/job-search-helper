import React, { useState, useRef } from "react";
// import DragDrop from "./DragDrop";

function Cover() {
  
    
    
  return (
    
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
