import React from 'react'
import './results-related.scss'
import PropTypes from 'prop-types'

export const ResultsRelated = (props) => {
  const { openedFilmsGenre } = props
  return (
        <span className="results-related">Films by {openedFilmsGenre} genre</span>
  )
}

ResultsRelated.propTypes = {
  openedFilmsGenre: PropTypes.string
}
