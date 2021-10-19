import {useEffect, useState} from "react";
import {Route, Switch, Redirect, useHistory, useLocation} from 'react-router-dom';
import Login from '../Login/Login'
import Register from '../Register/Register'
import Main from "../Main/Main";
import Error from "../Error/Error";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import * as MainApi from "../../utils/MainApi"

function App() {
  const history = useHistory()

  function handleRegister(email, name, password){
    console.log(email, name, password)
    MainApi.register({email, name, password}).then(() => {
      history.push('/signin')
    })
      .catch(err => {
        console.log(err)
      })
  }

  function handleLogin(email, password) {
    MainApi.login({email, password}).then((res) => {
      localStorage.setItem('token', `${res.token}`)
      history.push('/movies')
    })
      .catch(err => console.log(err))
  }
  const { pathname } = useLocation()
  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Register onRegister={handleRegister}/>
        </Route>
        <Route path="/signin">
          <Login  onLogin={handleLogin} />
        </Route>
      </Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path={pathname === '/' || '/saved-movies' || '/movies' || 'profile' ? '/error' : 'pathname'}>
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
