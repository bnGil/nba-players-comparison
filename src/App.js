import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataFromNetlify = async () => {
      const endPoint = "/players";
      const url = `/.netlify/functions/fetchData?endpoint=${endPoint}`;
      try {
        setLoading(true);
        const data = await axios.get(url);
        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDataFromNetlify();
  }, []);
  return <h1>{loading ? "Loading..." : "NBA players comparison"}</h1>;
}

export default App;
