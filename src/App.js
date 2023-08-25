import React, { useState } from "react";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("")

  const handleRegistration = () => {
    console.log("ФИО:", fullName);
    console.log("Email:", email);

   

    const output = document.createElement("div");
    output.textContent = `ФИО: ${fullName}, Email: ${email}, Number: ${number}`;
    document.body.appendChild(output);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="ФИО"
        
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="number"
      />
      <button onClick={handleRegistration}>Зарегистрироваться</button>
    </div>
  );
};

export default RegistrationForm;