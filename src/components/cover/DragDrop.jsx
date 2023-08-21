import { useState, useRef } from 'react'
import './dragDrop.css'

export default function DragDrop(props) {
  const [dragActive, setDragActive] = useState(false);
  const { inputRef } = props;

  // function handle the drag - if the use is dragging something into the component.
  //drag event listener
 




  

  return (
    
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
          <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
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
    
  );
}
