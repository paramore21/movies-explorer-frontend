import {useEffect, useState} from "react";
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Login from '../Login/Login'
import Register from '../Register/Register'
import Main from "../Main/Main";
import Error from "../Error/Error";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
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
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/error'>
          <Error />
        </Route>
        <Route path='/profile'>
          < Profile />
        </Route>
      <Route path='/saved-movies'>
        <SavedMovies />
      </Route>
    </div>
  );
}

export default App;
