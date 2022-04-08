
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchParams from "./SearchParams";


const App = () => {
  
  return (
    
      <div>
        <Router>
          <header>
            <h1>Demo !</h1>
          </header>
          <Switch>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
  );
};

render(
    <App />, document.getElementById("root")
);
