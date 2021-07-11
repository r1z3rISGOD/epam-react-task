import React, { useEffect } from 'react'
import { ResultsBody } from '../results-body'
import './results-body-container.scss'
import { ResultsItem } from '../results-item'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { fetchData } from '../../services/fetchService'
import { useLocation } from 'react-router'
import { useDispatch } from 'react-redux'
import { changeSearchRequestedData, putFetchedArrayToStore } from '../../../store/actions'

export const ResultsBodyContainer = (props) => {
  const dispatch = useDispatch()
  const { fetchedData, active } = props
  const location = useLocation().search

  useEffect(() => {
    const fetching = async () => {
      const params = new URLSearchParams(location)
      const searchRequest = params.getAll('request')[0]

      if (fetchedData.length === 0 && searchRequest) {
        const newFetchedFilms = await fetchData(searchRequest, 'title', active)
        dispatch(putFetchedArrayToStore(newFetchedFilms.data))
        dispatch(changeSearchRequestedData(searchRequest))
      }
    }
    fetching()
  })
  return (
        <Switch>
            <Route exact path='/' render={() =>
                <div className="results-body-container">
                    <ResultsBody>
                        <div className="results-body__no-films">
                            <span className="results-body__text"> No films found </span>
                        </div>
                    </ResultsBody>
                </div>
            }/>
            <Route path='*' render={() =>
            <div className="results-body-container">
                <ResultsBody>
                    <div className="results-body__films">
                        {fetchedData.map(film =>
                            <ResultsItem
                                active={active}
                                title={film.title}
                                key={film.id}
                                year={film.release_date}
                                picture={film.poster_path}
                                genres={film.genres}
                                id={film.id}
                            />
                        )}
                    </div>
                </ResultsBody>
            </div>
        }/>
        </Switch>
  )
}

ResultsBodyContainer.propTypes = {
  fetchedData: PropTypes.array,
  active: PropTypes.string
}
