import {useEffect, useState} from "react";
import {Route, Switch, Redirect, useHistory, useLocation} from 'react-router-dom';
import Login from '../Login/Login'
import Register from '../Register/Register'
import Main from "../Main/Main";
import Error from "../Error/Error";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import { UserContext } from "../../Context/UserContext";
import * as MainApi from "../../utils/MainApi";

function App() {
  const history = useHistory()
  const [currentUserContext, setCurrentUserContext] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  function handleRegister(email, name, password){
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
      setLoggedIn(true)

      history.push('/movies')
    })
      .catch(err => console.log(err))
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    setCurrentUserContext({})
    history.push('/sign-in');
  }

  function handleUpdateUser(email, name) {
    return MainApi.updateUser({email, name})
      .then(res => {
        setCurrentUserContext(res)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    MainApi.checkToken(token)
      .then(res => {
        if(res){
          setCurrentUserContext(res)
          //setLoggedIn(true)
          //history.push('/movies')
        }
      })
  }, [loggedIn])
  const { pathname } = useLocation()
  return (
    <div className="App">
      <UserContext.Provider value={currentUserContext} >
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
          < Profile
            onLogout={handleLogout}
            onUpdateUser={handleUpdateUser}
          />
        </Route>
      <Route path='/saved-movies'>
        <SavedMovies />
      </Route>
    </UserContext.Provider>
    </div>
  );
}

export default App;
