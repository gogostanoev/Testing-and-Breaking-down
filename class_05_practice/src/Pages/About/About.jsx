import { useEffect, useState } from "react";

export const About = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Trying to understand, also first render");
  }, []);

  useEffect(() => {
    console.log("Na sekoja promena, ke se ispishuvam")
  }, [message])

  const handleMessage = (value) => {
    setMessage(value);
  };

  return (
    <div>
      <h1>About page</h1>
      <h4>{message}</h4>
      <input
        type="text"
        value={message}
        onChange={(event) => handleMessage(event.target.value)}
      />
    </div>
  );
};
