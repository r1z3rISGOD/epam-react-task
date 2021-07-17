import * as React from 'react'
import './results-sort.scss'

interface ResultsSortProps {
    searchSetting: string
    searchData: string
    sortingResults: any
    sortVision: number
}

export const ResultsSort : React.FC<ResultsSortProps> = ({
  searchSetting,
  searchData,
  sortingResults,
  sortVision
}) => {
  switch (sortVision) {
    case 1:
      return (
                <div className="results-sort">
                    <span className="results-sort__text">Sort by</span>
                    <button value="release_date" className="results-sort__link results-sort__link-active">release date</button>
                    <button onClick={async () => await sortingResults('vote-average', searchSetting, searchData)} value="vote_average" className="results-sort__link btn">rating</button>
                </div>
      )
    case 2:
      return (
                <div className="results-sort">
                    <span className="results-sort__text">Sort by</span>
                    <button onClick={async () => await sortingResults('release_date', searchSetting, searchData)} value="release_date" className="results-sort__link btn">release date</button>
                    <button value="vote_average" className="results-sort__link results-sort__link-active">rating</button>
                </div>
      )
    default:
      return (
              <></>
      )
  }
}
