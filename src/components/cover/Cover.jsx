import React, { useState, useRef } from 'react';
import DragDrop from './DragDrop';

function Cover() {
  const inputRef = useRef(null);


  return (
    <div>
      <DragDrop inputRef={inputRef}/>
    </div>
  );
}

export default Cover;
