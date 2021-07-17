import * as React from 'react'
import './results-count.scss'

interface ResultsCountProps {
  resultsCount: number
}

export const ResultsCount : React.FC<ResultsCountProps> = ({ resultsCount }) => {
  if (resultsCount > 0) {
    return (
            <span className="results-count">
            {resultsCount} movies found
        </span>
    )
  }

  return (
            <></>
  )
}
