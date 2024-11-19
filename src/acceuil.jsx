import React, { useState } from 'react';

function Appp() {
  // Declare a state variable
  const [message, setMessage] = useState('Hello, World!');

  // Define a function to update the state
  const handleClick = () => {
    setMessage('You clicked the button!');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Appp;
