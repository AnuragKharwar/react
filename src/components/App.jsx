import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function handleClick() {}

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>
          Hello {contact.fname} {contact.lname}
        </h1>
        <p>{contact.email}</p>
        <input
          onChange={handleChange}
          name="fname"
          type="text"
          placeholder="firstname"
        />
        <input
          onChange={handleChange}
          name="lname"
          type="text"
          placeholder="lastname"
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Type your email"
        />
        <button> Submit </button>
      </form>
    </div>
  );
}

export default App;
