const baseUrl = 'https://api.movies-diploma.nomoredomains.rocks'

const _checkResponse = (res) => {
  if(res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}, ${res.message}`)
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
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
      "password": password
    })
  })
    .then(res => _checkResponse(res))
}