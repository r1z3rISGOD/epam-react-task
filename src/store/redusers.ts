import {
  CHANGE_SEARCH_REQUESTED_DATA,
  CHANGE_TYPE_OF_SEARCH,
  CHANGE_TYPE_OF_RESULTS_SORTING,
  PUT_FETCHED_ARRAY_TO_STORE,
  PUT_OPENED_FILM_TO_STORE,
  PUT_OPENED_FILMS_GENRE_TO_STORE,
  CLEAR_STORE
} from '../index'

export const initialState = {
  searchData: '',
  searchSetting: 'title',
  resultsSort: 'vote_average',
  fetchedData: [],
  filmHasOpened: false,
  openedFilm: undefined,
  openedFilmsGenre: ''
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_REQUESTED_DATA:
      return { ...state, searchData: action.payload }

    case CHANGE_TYPE_OF_SEARCH:
      return { ...state, searchSetting: action.payload }

    case CHANGE_TYPE_OF_RESULTS_SORTING:
      return { ...state, resultsSort: action.payload }

    case PUT_FETCHED_ARRAY_TO_STORE:
      return { ...state, fetchedData: action.payload }

    case PUT_OPENED_FILM_TO_STORE:
      return { ...state, openedFilm: action.payload, filmHasOpened: true }

    case PUT_OPENED_FILMS_GENRE_TO_STORE:
      return { ...state, openedFilmsGenre: action.payload }

    case CLEAR_STORE:
      return {
        ...state,
        searchData: '',
        searchSetting: 'title',
        fetchedData: [],
        filmHasOpened: false,
        openedFilm: {},
        openedFilmsGenre: null
      }
  }

  return state
}
