import Frontend from "./Frontend";
import "./App.css";





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