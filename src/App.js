import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import About from "./components/about/About";
import ComparisonPage from "./components/comparisonPage/ComparisonPage";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataFromNetlify = async () => {
      const endPoint = "/players";
      const url = `/.netlify/functions/fetchData?endpoint=${endPoint}`;
      try {
        setLoading(true);
        // const { data } = await axios.get(url);
        // console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDataFromNetlify();
  }, []);
  // return <h1>{loading ? "Loading..." : "NBA players comparison"}</h1>;
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/comparison" component={ComparisonPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
