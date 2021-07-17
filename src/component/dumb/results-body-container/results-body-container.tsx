import * as React from 'react'
import { useEffect } from 'react'
import { ResultsBody } from '../results-body'
import './results-body-container.scss'
import { ResultsItem } from '../results-item'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

const resultsBodyContainerProps = {
  fetchedData: PropTypes.array,
  active: PropTypes.string,
  searchSetting: PropTypes.string,
  fetchingAllFilms: PropTypes.func,
  fetchingFilm: PropTypes.func
}

export const ResultsBodyContainer : React.FC<InferProps<typeof resultsBodyContainerProps>> = ({ fetchedData, active, searchSetting, fetchingAllFilms, fetchingFilm }) => {
  useEffect(() => {
    fetchingAllFilms(fetchedData, searchSetting, active)
  })

  if (fetchedData.length === 0) {
    return (
          <div className="results-body-container">
              <ResultsBody>
                  <div className="results-body__no-films">
                      <span className="results-body__text"> No films found </span>
                  </div>
              </ResultsBody>
          </div>
    )
  }
  return (
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
                                fetchingFilm={fetchingFilm}
                            />
                        )}
                    </div>
                </ResultsBody>
            </div>
  )
}
