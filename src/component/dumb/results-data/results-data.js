import React from 'react'
import PropTypes from 'prop-types'

export const ResultsData = (props) => {
  return (
        <div className="results-data">
            {props.children}
        </div>
  )
}

ResultsData.propTypes = {
  children: PropTypes.any
}
