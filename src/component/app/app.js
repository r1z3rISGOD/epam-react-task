import React, { useEffect } from 'react'
import './app.scss'
import './netflix-bg.jpg'
import { Search } from '../smart/search'
import { Film } from '../dumb/film'
import { Results } from '../smart/results'
import { Footer } from '../dumb/footer'
import { useSelector } from 'react-redux'
import { NotFound } from '../dumb/not-found'
import { Route, Switch, useHistory, BrowserRouter } from 'react-router-dom'

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
      history.push(`/search/?request=${searchData}`)
    }
  })

  return (
      <BrowserRouter>
            <div className="app-wrapper">
                <div className="app-header">
                    <Switch>
                        <Route exact path='/'
                               render={() => <Search resultsSort={resultsSort}/>}/>
                        <Route path='/search/:request?'
                               render={(props) => <Search searchData={searchData} data={props} resultsSort={resultsSort}/>}/>
                        <Route exact path='/film/:id?'
                               render={(props) => <Film data={props} openedFilm={openedFilm}/>}/>
                        <Route path='*' component={NotFound}/>
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
