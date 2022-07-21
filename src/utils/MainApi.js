const baseUrl = 'https://api.movies-diploma.nomoredomains.rocks'
const token = `Bearer ${localStorage.getItem('token')}`

const _checkResponse = (res) => {
  if(res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res}`)
}

export const register = ({email, name, password}) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
      "name": name,
      "password": password
    })
  })
  .then(res => _checkResponse(res))
}


export const login = ({email, password}) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": email,
      "password": password
    })
  })
    .then(res => _checkResponse(res))
}

export const updateUser = (data) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      authorization: token
    },
    body: JSON.stringify(data)
  })
    .then(res => _checkResponse(res))
}

export const getSavedMovies = () => {
  return fetch(`${baseUrl}/movies`, {
    method: "GET",
    headers: {
      authorization: token
    }
  })
    .then(res => _checkResponse(res))
}

export const saveMovie = (movie) => {
  let {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId
  } = movie

  movieId = movieId.toString()
  return fetch(`${baseUrl}/movies`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: token
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      nameRU,
      nameEN,
      thumbnail,
      movieId
    })
  })
    .then(() => getSavedMovies())
    .then(res => _checkResponse(res))
}

export const getUserInfo = () => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "content-Type": "application/json",
      authorization: token,
    }
  })
    .then(res => _checkResponse(res))
}

export const deleteMovie = (id) => {
  return fetch(`${baseUrl}/movies/${id}`, {
    method: "DELETE",
    headers: {
      "content-Type": "application/json",
      authorization: token
    }
  })
}
