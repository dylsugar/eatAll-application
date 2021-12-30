import Frontend from "./Frontend";
import "./App.css";
import React, { Component } from 'react';
import { render } from "@testing-library/react";




function App(){


  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (<Frontend />);
}


export default App;