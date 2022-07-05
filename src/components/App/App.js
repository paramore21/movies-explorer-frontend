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
import * as path from "path";

function App() {
  const history = useHistory()
  const [currentUserContext, setCurrentUserContext] = useState({})
  const [movies, setMovies] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [savedMovies, setSavedMovies] = useState([])
  const [isShort, setIsShort] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchedMovies, setSearchedMovies] = useState([])
  const [isSearching, setIsSearching] = useState(false)

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
    if(loggedIn) {
      Promise.all([MainApi.getUserInfo(), MoviesApi.getCards()])
        .then(([userData, moviesData]) => {
          setCurrentUserContext(userData)
          setMovies(moviesData)
        })
    }
  }, [loggedIn])

  // useEffect(() => {
  //   MoviesApi.getCards()
  //     .then(moviesData => {
  //       setMovies(moviesData)
  //   })
  // }, [])

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
            movies={searchedMovies}
            savedMovies={savedMovies}
            saveMovie={(movie) => saveMovie(movie)}
            isLoggedIn={loggedIn}
            isShort={isShort}
            deleteMovie={deleteMovie}
            handleCheckbox={handleChangeCheckbox}
            handleSearch={handleSearch}
            loading={loading}
          />
        </Route>
        <Route path={pathname !== '/' || pathname !== '/saved-movies' || pathname !== '/movies' || pathname !== '/profile' ? '/error' : pathname}>
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
          movies={movies}
          savedMovies={savedMovies}
          isLoggedIn={loggedIn}
          deleteMovie={deleteMovie}
          handleSearch={handleSearch}
          handleCheckbox={handleChangeCheckbox}
          isShort={isShort}
        />
      </Route>
    </UserContext.Provider>
    </div>
  );
}

export default App;
