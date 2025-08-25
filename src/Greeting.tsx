// Exercise1.tsx
import { useState } from "react";

// TODO1:  ประกาศ Type ด้วย type หรือ inerface
interface greetingProps {
  name: string,
  age: number
}

// TODO2: กำหนด Type ให้ props
const Greeting = ({name, age}:greetingProps) => {
  // TODO3: กำหนด Type ให้ useState
  const [count, setCount] = useState();

  return (
    <div>
      <h1>
        Hello {name}, you are {age} years old 👋
      </h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

// TODO4 : Render ออกมาใน App.tsx
export default Greeting;
