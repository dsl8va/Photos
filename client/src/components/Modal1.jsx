import React from 'react';

const Modal1 = (props) => {
  if (!props.open) return null

  return (
    <div>
      hello!!
      <button onClick={props.onClose}>Close Modal</button>
    </div>
  )
}

export default Modal1;