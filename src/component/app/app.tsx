import * as React from 'react'
import { useEffect } from 'react'
import { Route, Switch, useHistory, BrowserRouter } from 'react-router-dom'
import './app.scss'
import { Search } from '../smart/search'
import { Film } from '../smart/film'
import { Results } from '../smart/results'
import { Footer } from '../dumb/footer'
import { useSelector } from 'react-redux'
import { NotFound } from '../dumb/not-found'

interface DefaultRootState {
    filmHasOpened: boolean
    fetchedData: any[]
    resultsSort: string
    searchSetting: string
    searchData: string
    openedFilm: undefined | any[]
    openedFilmsGenre: string
}

export const App : React.FC = () => {
  const history = useHistory()
  const hasOpened = useSelector((state : DefaultRootState) => state.filmHasOpened)
  const fetchedData = useSelector((state : DefaultRootState) => state.fetchedData)
  const resultsSort = useSelector((state : DefaultRootState) => state.resultsSort)
  const searchSetting = useSelector((state : DefaultRootState) => state.searchSetting)
  const searchData = useSelector((state : DefaultRootState) => state.searchData)
  const openedFilm = useSelector((state : DefaultRootState) => state.openedFilm)
  const openedFilmsGenre = useSelector((state : DefaultRootState) => state.openedFilmsGenre)

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
                               render={(props) => <Search data={props} resultsSort={resultsSort}/>}/>
                        <Route exact path='/film/:id?'
                               render={(props) => <Film data={props} openedFilm={openedFilm}/>}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>
                </div>
                <Results
                    openedFilmsGenre={openedFilmsGenre}
                    hasOpened={hasOpened}
                    fetchedData={fetchedData}
                    searchData={searchData}
                    searchSetting={searchSetting}
                />
                <Footer/>
            </div>
      </BrowserRouter>
  )
}
