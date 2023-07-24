import { useEffect, useState } from "react";

export const About = () => {
  // prvata vrednost, promenlivata ke bide so vrednost od inicijalnata vrednost na useState()
  // a vtorata vrednost, funkcijata ke ja menuva promenlivata(vrednosta na message)
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Trying to understand, also first render");
  }, []);

  useEffect(() => {
    console.log("Na sekoja promena, ke se ispishuvam")
    // bidejki useState se koristi za dinamichno menuvanje na vrednosti shto sakame da gi pokazheme na korisnikot
    // vo dependency nizata ja stavame vrednosta shto e prazen string i se menuva spored toa shto pishuvame (dinamichno)
    // na sekoja mala promena(pishuvanje na edna ili povekje bukvi, brishenje od prethodnata momentalna sostojba) se menuva stateot
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
