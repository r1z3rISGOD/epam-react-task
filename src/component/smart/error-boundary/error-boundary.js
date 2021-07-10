import React from 'react'
import PropTypes from 'prop-types'

export const ErrorBoundary = (props) => {
  const OopsText = () => (
        <h2>
            Something went wrong!
        </h2>
  )
  const isEverythingOk = true

  return <>{isEverythingOk ? props.children : <OopsText />}</>
}

ErrorBoundary.propTypes = {
  children: PropTypes.element
}
