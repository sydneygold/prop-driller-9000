import React from 'react';

function Transformer({url, name}) {

  return (
    <img
      className = 'transformer'
      src ={url}
      alt ={name}
    />
  );
}

export default Transformer;
