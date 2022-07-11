import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import UsersList from "./public/usersList";

function App() {
  const [name, setName] = useState("");
  const inputEl = useRef("");
  const prevNameRef = useRef("");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("name ==>", name);
    console.log("ref name ==>", inputEl.current.value);
    prevNameRef.current = name;
    function getData() {
      fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
        return res.json().then((json) => {
          console.log("data ==>", json);
          setData(json);
        });
      });
    }
    //getData();
  }, [name]);
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <input
          ref={inputEl}
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <h3>My name is {name}</h3>
        {prevNameRef.current && (
          <h4>My previous name is {prevNameRef.current}</h4>
        )}
      </div>
      <div>
        <UsersList name={name} />
      </div>
    </div>
  );
}

export default App;
