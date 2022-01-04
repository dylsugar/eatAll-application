import Frontend from "./Frontend";
<<<<<<< HEAD
import React, { useEffect } from "react";
import './App.css';
=======
import "./App.css";
import React, { Component } from 'react';
import { render } from "@testing-library/react";

>>>>>>> Deploy app to Heroku



function App(){
<<<<<<< HEAD
  useEffect(()=>{

  })
    return (
      
        <Frontend></Frontend>
      
    );
  }
=======


  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (<Frontend />);
}
>>>>>>> Deploy app to Heroku


export default App;