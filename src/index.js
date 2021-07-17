import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { App } from './component/app/app'
import { rootReducer } from './store/redusers'
import { BrowserRouter } from 'react-router-dom'

export const CHANGE_SEARCH_REQUESTED_DATA = 'CHANGE_SEARCH_REQUESTED_DATA'
export const CHANGE_TYPE_OF_SEARCH = 'CHANGE_TYPE_OF_SEARCH'
export const CHANGE_TYPE_OF_RESULTS_SORTING = 'CHANGE_TYPE_OF_RESULTS_SORTING'
export const PUT_FETCHED_ARRAY_TO_STORE = 'PUT_FETCHED_ARRAY_TO_STORE'
export const PUT_OPENED_FILM_TO_STORE = 'PUT_OPENED_FILM_TO_STORE'
export const PUT_OPENED_FILMS_GENRE_TO_STORE = 'PUT_OPENED_FILMS_GENRE_TO_STORE'
export const CLEAR_STORE = 'CLEAR_STORE'

const loggerMiddleware = store => next => action => {
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state: ', store.getState())
  console.log('action', action)
  const result = next(action)
  console.log('next state: ', store.getState())
  console.groupEnd()
  return result
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware))

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
        , document.querySelector('#root'))
