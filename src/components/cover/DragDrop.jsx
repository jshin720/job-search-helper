import { useState, useRef } from 'react'
import './dragDrop.css'

export default function DragDrop(props) {
  const [dragActive, setDragActive] = useState(false);
  const { inputRef } = props;

  // function handle the drag - if the use is dragging something into the component.
  //drag event listener
 

  const handleChange = (e) => {
    console.log("handleChange", e.target)
    e.preventDefault();
    if (e.target.files && e.target.files[0]){
      
    }

  }

  const handleDrop = (e) => {
    console.log("handleDrop", e);
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {

    }
  }

  const onButtonClick = () => {
    inputRef.current.click()
  }

  return (
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
    </form>
  );
}
