import {
  CHANGE_SEARCH_REQUESTED_DATA,
  CHANGE_TYPE_OF_SEARCH,
  CHANGE_TYPE_OF_RESULTS_SORTING,
  PUT_FETCHED_ARRAY_TO_STORE,
  PUT_OPENED_FILM_TO_STORE,
  PUT_OPENED_FILMS_GENRE_TO_STORE,
  CLEAR_STORE
} from '../index'

export const changeSearchRequestedData = (data : string) => {
  return {
    type: CHANGE_SEARCH_REQUESTED_DATA,
    payload: data
  }
}

export const changeTypeOfSearch = (data : string) => {
  return {
    type: CHANGE_TYPE_OF_SEARCH,
    payload: data
  }
}

export const changeTypeOfResultsSorting = (data : string) => {
  return {
    type: CHANGE_TYPE_OF_RESULTS_SORTING,
    payload: data
  }
}

export const putFetchedArrayToStore = (data : any) => {
  return {
    type: PUT_FETCHED_ARRAY_TO_STORE,
    payload: data
  }
}

export const putOpenedFilmToStore = (data : any) => {
  return {
    type: PUT_OPENED_FILM_TO_STORE,
    payload: data
  }
}

export const putOpenedFilmsGenreToStore = (data : any) => {
  return {
    type: PUT_OPENED_FILMS_GENRE_TO_STORE,
    payload: data
  }
}

export const clearStore = () => {
  return {
    type: CLEAR_STORE
  }
}
