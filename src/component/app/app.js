import React, { useEffect } from 'react'
import './app.scss'
import './netflix-bg.jpg'
import { Search } from '../smart/search'
import { Film } from '../dumb/film/film'
import { Results } from '../smart/results'
import { Footer } from '../dumb/footer'
import { useSelector } from 'react-redux'
import { NotFound } from '../dumb/not-found/not-found'
import { Redirect, Route, Switch, useHistory, BrowserRouter } from 'react-router-dom'

export const App = () => {
  const history = useHistory()
  const state = useSelector(state => state)
  const hasOpened = state.filmHasOpened
  const fetchedData = state.fetchedData
  const resultsSort = state.resultsSort
  const searchSetting = state.searchSetting
  const searchData = state.searchData
  const openedFilm = state.openedFilm
  const openedFilmsGenre = state.openedFilmsGenre

  useEffect(() => {
    if (window.location.pathname.includes('/search/films')) {
      history.push(`/search/films/:${searchData}&:${searchSetting}&:${resultsSort}`)
    }
  })

  return (
      <BrowserRouter>
            <div className="app-wrapper">
                <div className="app-header">
                    <Switch>
                        <Route exact path='/'
                               render={() => <Search resultsSort={resultsSort}/>}/>
                        <Route path='/search/films/:request&:type&:filter'
                               render={(props) => <Search data={props} resultsSort={resultsSort}/>}/>
                        <Route path='/films/:id'
                               render={(props) => <Film data={props} openedFilm={openedFilm}/>}/>
                        <Route component={NotFound}/>
                        <Redirect from='*' to='/'/>
                    </Switch>
                </div>
                <Results
                    openedFilmsGenre={openedFilmsGenre}
                    isOpened={hasOpened}
                    fetchedData={fetchedData}
                    searchData={searchData}
                    searchSetting={searchSetting}
                />
                <Footer/>
            </div>
      </BrowserRouter>
  )
}
