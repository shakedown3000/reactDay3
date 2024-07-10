import React, { useState } from "react";

// - Erstelle dir Inputfelder und greife auf den value mit Hilfe von React-Hooks zu.
// - Zeige den Output im TSX an.
// - Verwende “useState”-hooks, um die Aufgabe zu lösen.

const Form = () => {
  const [vorname, setVorname] = useState<string>("");
  const [nachname, setNachname] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // * Value holen
  const getVorname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVorname(event.target.value);
  };
  const getNachname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNachname(event.target.value);
  };
  const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <input
        onChange={getVorname}
        type="text"
        placeholder="Vorname"
        value={vorname}
      />
      <input
        onChange={getNachname}
        type="text"
        placeholder="Nachname"
        value={nachname}
      />
      <input
        onChange={getEmail}
        type="text"
        placeholder="Emailadresse"
        value={email}
      />
      <p>Vorname: {vorname}</p>
      <p>Nachname: {nachname}</p>
      <p>Emailadresse: {email}</p>
    </>
  );
};

export default Form;
