// libs
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// src
import { Home, Login, Register } from './Pages';
import { Header } from './Components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
