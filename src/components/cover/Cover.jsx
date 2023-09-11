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

      
  );
}

export default Cover;
