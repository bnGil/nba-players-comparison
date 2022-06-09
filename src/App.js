import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import ComparisonPage from "./pages/comparisonPage/ComparisonPage";
import CommentsPage from "./pages/commentsPage/CommentsPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/comparison" component={ComparisonPage} />
          <Route exact path="/comments/:id/:name" component={CommentsPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
