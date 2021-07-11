import React from 'react'
import './search-heading-neflix.scss'
import PropTypes from 'prop-types'

export const SearchHeadingNetflix = (props) => {
  return (
      <div className='film-heading'>
            <h2 className="search__heading-1">netflixroulette</h2>
          {props.children}
      </div>
  )
}

SearchHeadingNetflix.propTypes = {
  children: PropTypes.any
}
