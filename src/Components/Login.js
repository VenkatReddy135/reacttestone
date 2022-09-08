import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [psw, setPsw] = useState("");
  const navigate = useNavigate();
  const changeName = (e) => {
    setUserName(e.target.value);
  };
  const changePsw = (e) => {
    setPsw(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (userName === "Admin" && psw === "Admin") {
      localStorage.setItem("code", 1);
      navigate("/About");
    } else {
      alert("wrong userName and Password");
    }
  };
  return (
    <div mt="10">
      <form onSubmit={submitForm}>
        <input type="text" value={userName} onChange={(e) => changeName(e)} />
        <br />
        <br />
        <input type="password" value={psw} onChange={changePsw} />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
