
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Routes/Home";
import Form from "./components/Routes/Form";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/form" exact component={() => <Form />} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
