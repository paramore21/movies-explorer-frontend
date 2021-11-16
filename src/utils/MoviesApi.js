const baseUrl = 'https://api.nomoreparties.co/beatfilm-movies'

const _checkResponse = (res) => {
  if(res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res}`)
}

export const getCards = () => {
  return fetch(`${baseUrl}`, {
    method: "GET"
  })
    .then(res => _checkResponse(res))
}
