import React from 'react';

function ButtonRounded({ text,onClick }) {
  return (
    <button onClick={onClick} className="btn btn-lg">{text}</button>
  );
}

export default ButtonRounded;
