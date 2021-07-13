import * as React from 'react'
import { useEffect } from 'react'
import { ResultsBody } from '../results-body'
import './results-body-container.scss'
import { ResultsItem } from '../results-item'
import { fetchData } from '../../services/fetchService'
import { useLocation } from 'react-router'
import { useDispatch } from 'react-redux'
import { changeSearchRequestedData, putFetchedArrayToStore } from '../../../store/actions'

interface ResultsBodyContainerProps {
    fetchedData: any[]
    active: string
    searchSetting: string
}

export const ResultsBodyContainer : React.FC<ResultsBodyContainerProps> = ({ fetchedData, active, searchSetting }) => {
  const dispatch = useDispatch()
  const location = useLocation().search

  useEffect(() => {
    const fetching = async () => {
      const params = new URLSearchParams(location)
      const searchRequest = params.getAll('request')[0]
      if (fetchedData.length === 0 && searchRequest) {
        const newFetchedFilms = await fetchData(searchRequest, searchSetting, active)
        if (newFetchedFilms.data.length > 0) {
          dispatch(putFetchedArrayToStore(newFetchedFilms.data))
          dispatch(changeSearchRequestedData(searchRequest))
        }
      }
    }
    fetching()
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
                            />
                        )}
                    </div>
                </ResultsBody>
            </div>
  )
}
