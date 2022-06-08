import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import About from "./components/about/About";
import ComparisonPage from "./components/comparisonPage/ComparisonPage";
import CommentsPage from "./components/commentsPage/CommentsPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/comparison" component={ComparisonPage} />
          <Route exact path="/comments/:id" component={CommentsPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
