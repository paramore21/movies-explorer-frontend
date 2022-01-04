function SearchMovie (movies, searchValue, isShort) {
  let result = []
  if(movies.length){
    if (movies[0].owner) {
      movies.filter(elem => {
        if(elem.nameRU.toLowerCase().includes(searchValue.toLowerCase())){
          result.push(elem)
        }
        return result
      })
    }
  }
  if(isShort){
    return result.filter(elem => elem.duration <= 40)
  } else {
    return result
  }
}

export default SearchMovie
