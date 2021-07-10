import React from 'react'
import PropTypes from 'prop-types'

export const ResultsBody = (props) => {
  return (
        <div className="results-body">
          {props.children}
        </div>
  )
}

ResultsBody.propTypes = {
  children: PropTypes.any
}
