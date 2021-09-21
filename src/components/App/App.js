import {useEffect, useState} from "react";
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Login from '../Login/Login'
import Register from '../Register/Register'
import Main from "../Main/Main";
import Header from '../Header/Header'
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
      </Switch>
      <Movies />
    </div>
  );
}

export default App;
