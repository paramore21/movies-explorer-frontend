import {useEffect, useState} from "react";
import {Redirect, Route, Switch, useHistory, useLocation} from 'react-router-dom';
import Login from '../Login/Login'
import Register from '../Register/Register'
import Main from "../Main/Main";
import Error from "../Error/Error";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import UserContext from "../../Context/UserContext";
import * as MainApi from "../../utils/MainApi";
import * as MoviesApi from '../../utils/MoviesApi';
import SearchMovie from "../../utils/SearchMovie";
import {getUserInfo} from "../../utils/MainApi";

function App() {
  const history = useHistory()
  const [currentUserContext, setCurrentUserContext] = useState({})
  const [movies, setMovies] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [token, setToken] = useState('');
  const [savedMovies, setSavedMovies] = useState([])
  const [isShort, setIsShort] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchedMovies, setSearchedMovies] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      setLoggedIn(true)
    }
  }, []);

  useEffect(() => {
    if(loggedIn) {
      Promise.all([MainApi.getUserInfo(), MoviesApi.getCards()])
        .then(([userData, moviesData]) => {
          setCurrentUserContext(userData)
          setMovies(moviesData)
        })
    }
  }, [loggedIn])

  function handleRegister(email, name, password){
    MainApi.register({email, name, password}).then(() => {
      history.push('/movies')
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
    history.push('/signin');
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
    MainApi.deleteMovie(id)
      .catch(err => console.log(err))
  }

  function handleSearch(searchValue) {
    // todo сделать отработку поиска только по фильмам владельца осуществимой
    setLoading(true)
    setTimeout(() => {
    setSearchedMovies(SearchMovie(movies, searchValue, isShort))
      setLoading(false)
    }, 500)
  }

  function handleChangeCheckbox() {
    setIsShort(!isShort);
  }

  console.log(loggedIn)
  const { pathname } = useLocation()
  return (
    <div className="App">
      <UserContext.Provider value={currentUserContext} >
      <Switch>
        <Route path='/' exact>
          <Main isLoggedIn={loggedIn}/>
        </Route>
        <ProtectedRoute exact path='/movies'
          movies={searchedMovies}
          savedMovies={savedMovies}
          saveMovie={(movie) => saveMovie(movie)}
          isLoggedIn={loggedIn}
          isShort={isShort}
          deleteMovie={deleteMovie}
          handleCheckbox={handleChangeCheckbox}
          handleSearch={handleSearch}
          loading={loading}
          component={Movies}
        />
        <ProtectedRoute exact path='/profile'
          component={Profile}
          onLogout={handleLogout}
          onUpdateUser={handleUpdateUser}
          isLoggedIn={loggedIn}
        />
      <Route exact path='/saved-movies'>
        <SavedMovies
        movies={movies}
        savedMovies={savedMovies}
        isLoggedIn={loggedIn}
        deleteMovie={deleteMovie}
        handleSearch={handleSearch}
        handleCheckbox={handleChangeCheckbox}
        isShort={isShort}
        /></Route>
        <Route exact path="/signup">
          {!loggedIn ? (
            <Register
              onRegister={handleRegister}
            />
          ) : (
            <Redirect to="/movies" />
          )}
        </Route>
        <Route exact path="/signin">
          {!loggedIn ? (
            <Login
              onLogin={handleLogin}
            />
          ) : (
            <Redirect to="/movies" />
          )}
        </Route>
      <Route exact path="*">
        <Error />
      </Route>
      </Switch>
    </UserContext.Provider>
    </div>
  );
}

export default App;
