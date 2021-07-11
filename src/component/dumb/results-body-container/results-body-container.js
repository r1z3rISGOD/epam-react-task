import React from 'react'
import { ResultsBody } from '../results-body/results-body'
import './results-body-container.scss'
import { ResultsItem } from '../results-item/results-item'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export const ResultsBodyContainer = (props) => {
  const { fetchedData, active } = props

  return (
        <Switch>
            <Route path='/search/:films?' render={() =>
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
            <Route path='/film/:id?' render={() =>
            <div className="results-body-container">
                <ResultsBody>
                    <div className="results-body__films">
                        {fetchedData.map(film =>
                            <ResultsItem
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
            <Route exact path='/' render={() =>
                <div className="results-body-container">
                    <ResultsBody>
                        <div className="results-body__no-films">
                            <span className="results-body__text"> No films found </span>
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
