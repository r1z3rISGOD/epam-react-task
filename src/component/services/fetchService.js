export const fetchData = async (request, setting, sort) => {
  const res = await fetch(`http://react-cdp-api.herokuapp.com/movies?sortBy=${sort}&sortOrder=desc&search=${request}&searchBy=${setting}&limit=10`)
  return await res.json()
}

export const fetchFilm = async (id) => {
  const res = await fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`)
  return await res.json()
}
