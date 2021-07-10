import React from 'react'
import PropTypes from 'prop-types'
import './results-count.scss'

export const ResultsCount = (props) => {
  const { resultsCount } = props

  if (resultsCount > 0) {
    return (
            <span className="results-count">
            {resultsCount} movies found
        </span>
    )
  } else {
    return (
            <></>
    )
  }
}

ResultsCount.propTypes = {
  resultsCount: PropTypes.number.isRequired
}
