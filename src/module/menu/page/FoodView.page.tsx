import { useState, useRef } from "react";


const FoodView = () => {


    const [firstName, setFirstName] = useState('Default value');

  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (ref.current)
    console.log(ref.current.value);
  };

  return (
    <div>
      {/* 👇️ for a controlled input field */}
      <input
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
      />

      {/* 👇️ for a controlled input field */}
      <input ref={ref} defaultValue="My default value" />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default FoodView;