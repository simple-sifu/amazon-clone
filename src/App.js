import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "Header";

// switching page without refresh or reloading the page
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>   
          <Route page="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Home Page !!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
