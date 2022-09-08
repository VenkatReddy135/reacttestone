import React, { useState } from "react";

export default function Form() {
  const [userName, setUserName] = useState("");
  const [psw, setPsw] = useState("");
  const [state, setState] = useState(false);
  const userNameChange = (e) => {
    setUserName(e.target.value);
  };

  const pswChange = (e) => {
    setPsw(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        if (result.filter((item) => item.username === userName).length > 0) {
          alert("Login Successful");
          setState(true);
          setUserName("");
          setPsw("");
        } else {
          alert("UN andd Psw are wrong");
        }
      });
    // if (userName === "admin" && psw === "admin") {
    //   alert("Login Successful");
    //   setState(true);
    //   setUserName("");
    //   setPsw("");
    // } else {
    //   alert("UN andd Psw are wrong");
    // }
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={userName}
          placeholder="UN"
          onChange={(e) => userNameChange(e)}
        />
        <br />
        <br />
        <input
          type="text"
          value={psw}
          placeholder="PSW"
          onChange={(e) => pswChange(e)}
        />
        <br />
        <br />
        <input type="submit" value="Login" />
        {state && <h1>loginSuccess</h1>}
      </form>
    </div>
  );
}
