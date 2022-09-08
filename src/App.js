import React from "react";
import "./App.css";
// import Button from "./Components/Button";
// import ClassButton from "./Components/ClassButton";
// import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>

      {/* <Button title={"Click Me"} />
      <ClassButton />
      <br />
      <Form /> */}
    </div>
  );
}

export default App;
