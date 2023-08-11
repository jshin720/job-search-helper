import { useState } from 'react'

export default function DragDrop() {
  const [files, setFiles] = useState(null);


  return (
    <>
      {!files && (
        <div
          className='dropzone'
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h1>Drag or Drop Cover Letter to Upload</h1>
          <h1>Or</h1>
          <button>Select File</button>
        </div>
       )
      }
    </>
  )
}
