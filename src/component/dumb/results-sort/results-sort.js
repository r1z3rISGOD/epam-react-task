import React from 'react'
import './results-sort.scss'
import { changeTypeOfResultsSorting, putFetchedArrayToStore } from '../../../store/actions'
import { useDispatch } from 'react-redux'
import { fetchData } from '../../services/fetchService'

export const ResultsSort = (props) => {
  const dispatch = useDispatch()
  const { active, setActive, resultsCount, searchSetting, searchData } = props

  if (resultsCount > 0) {
    if (active === 'release_date') {
      return (
                <div className="results-sort">
                    <span className="results-sort__text">Sort by</span>
                    <button value="release_date" className="results-sort__link results-sort__link-active">release date</button>
                    <button onClick={ async () => {
                      setActive('vote_average')
                      dispatch(changeTypeOfResultsSorting('vote_average'))
                      const response = await fetchData(searchData, searchSetting, 'vote_average')
                      dispatch(putFetchedArrayToStore(response.data))
                    }} value="vote_average" className="results-sort__link">rating</button>
                </div>
      )
    }

    if (active === 'vote_average') {
      return (
                <div className="results-sort">
                    <span className="results-sort__text">Sort by</span>
                    <button onClick={async () => {
                      setActive('release_date')
                      dispatch(changeTypeOfResultsSorting('release_date'))
                      const response = await fetchData(searchData, searchSetting, 'release_date')
                      dispatch(putFetchedArrayToStore(response.data))
                    }} value="release_date" className="results-sort__link">release date</button>
                    <button value="vote_average" className="results-sort__link results-sort__link-active">rating</button>
                </div>
      )
    }
  } else {
    return (
            <></>
    )
  }
}
