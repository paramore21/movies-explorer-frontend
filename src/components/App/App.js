import {useEffect, useState} from "react";
import {Route, Switch, Redirect, useHistory, useLocation} from 'react-router-dom';
import Login from '../Login/Login'
import Register from '../Register/Register'
import Main from "../Main/Main";
import Error from "../Error/Error";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import UserContext from "../../Context/UserContext";
import * as MainApi from "../../utils/MainApi";
import * as MoviesApi from '../../utils/MoviesApi';
import SearchMovie from "../../utils/SearchMovie";

function App() {
  const history = useHistory()
  const [currentUserContext, setCurrentUserContext] = useState({})
  const [movies, setMovies] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [savedMovies, setSavedMovies] = useState([])
  const [isShort, setIsShort] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      MainApi.getUserInfo(token)
        .then(res => {
          if(res){
            setLoggedIn(true)
          }
        })
        .catch(error => {
          console.log(error)
          history.push("/signin")
        })
      MainApi.getSavedMovies()
        .then(res => {
          setSavedMovies(res.data)
        })
    }
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(loggedIn) {
      Promise.all([MainApi.getUserInfo(token), MoviesApi.getCards()])
        .then(([userData, moviesData]) => {
          setCurrentUserContext(userData)
          setMovies(moviesData)
        })
    }
  }, [loggedIn])

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
      if(res.token){
        localStorage.setItem('token', `${res.token}`)
        setLoggedIn(true)
        history.push('/movies')
      }
    })
      .catch(err => console.log(err))
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    setCurrentUserContext({})
    history.push('/sign-in');
  }

  function handleUpdateUser(data) {
    return MainApi.updateUser(data)
      .then(res => {
        setCurrentUserContext(res.data)
      })
      .catch(err => console.log(err))
  }

  function saveMovie(movie) {
    MainApi.saveMovie(movie)
      .then(res => {
        setSavedMovies([res, ...savedMovies])
      })
      .catch(err => console.log(err))
  }

  function deleteMovie(id) {
    console.log(id)
    // MainApi.deleteMovie(id)
    //   .catch(err => console.log(err))
  }

  function handleSearch(searchValue) {
    // todo сделать отработку поиска только по фильмам владельца осуществимой
    SearchMovie(movies, searchValue, isShort)
  }

  function handleChangeCheckbox() {
    setIsShort(!isShort);
  }

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
          <Main isLoggedIn={loggedIn}/>
        </Route>
        <Route path='/movies'>
          <Movies
            movies={movies}
            saveMovie={saveMovie}
            isLoggedIn={loggedIn}
            isShort={isShort}
            handleCheckbox={handleChangeCheckbox}
            handleSearch={handleSearch}
          />
        </Route>
        <Route path={pathname === '/' || '/saved-movies' || '/movies' || 'profile' ? '/error' : 'pathname'}>
          <Error />
        </Route>
        <Route path='/profile'>
          <Profile
            onLogout={handleLogout}
            onUpdateUser={handleUpdateUser}
            isLoggedIn={loggedIn}
          />
        </Route>
      <Route path='/saved-movies'>
        <SavedMovies
          movies={savedMovies}
          saveMovie={saveMovie}
          isLoggedIn={loggedIn}
          deleteMovie={deleteMovie}
        />
      </Route>
    </UserContext.Provider>
    </div>
  );
}

export default App;
