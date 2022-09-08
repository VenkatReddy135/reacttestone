import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [state, setState] = useState(localStorage.getItem("code"));
  // const navigate = useNavigate();
  console.log(state);
  return (
    <div>
      <h1>This is about component</h1>
      {state === null && <Navigate to="/Login" replace={true} />}
    </div>
  );
}
