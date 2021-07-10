import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { App } from './component/app/app'
import { rootReducer } from './store/redusers'
import { BrowserRouter } from 'react-router-dom'

export const CHANGE_SEARCH_REQUESTED_DATA = 'ACTION_CHANGE_FIRST_NAME'
export const CHANGE_TYPE_OF_SEARCH = 'ACTION_CHANGE_SECOND_NAME'
export const CHANGE_TYPE_OF_RESULTS_SORTING = 'ACTION_CHANGE_RESULTS_SORT'
export const PUT_FETCHED_ARRAY_TO_STORE = 'ACTION_UPDATE_FETCHED_ARRAY'
export const PUT_OPENED_FILM_TO_STORE = 'PUT_OPENED_FILM_TO_STORE'
export const PUT_OPENED_FILMS_GENRE_TO_STORE = 'PUT_OPENED_FILMS_GENRE_TO_STORE'
export const CLEAR_STORE = 'CLEAR_STORE'

const store = createStore(rootReducer)

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
        , document.querySelector('#root'))
