import Frontend from "./Frontend";
import "./App.css";
import React from 'react';






function App(){
  console.log("In the app...");
  React.useEffect(() => {
    console.log("fetching...");
    fetch("https://documenu.p.rapidapi.com/restaurants/zip_code/90210?size=30&cuisine=Italian&top_cuisines=true&page=2", {
      "method": "GET",
      "headers": {
        "x-api-key": "82dbeaac7b3078a26ab28e0736ecf8ee",
        "x-rapidapi-key": "SIGN-UP-FOR-KEY",
        "x-rapidapi-host": "documenu.p.rapidapi.com"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (<Frontend />);
}


export default App;