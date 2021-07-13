import * as React from 'react'
import './results-related.scss'

interface ResultsRelatedProps {
  openedFilmsGenre: string
}

export const ResultsRelated : React.FC<ResultsRelatedProps> = ({ openedFilmsGenre }) => {
  return (
        <span className="results-related">Films by {openedFilmsGenre} genre</span>
  )
}
