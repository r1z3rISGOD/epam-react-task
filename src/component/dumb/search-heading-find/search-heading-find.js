import React from 'react'
import './search-heading-find.scss'
import PropTypes from 'prop-types'

export const SearchHeadingFind = (props) => {
  return (
        <>
                {props.children}
            <h1 className="search__heading-2">FIND YOUR MOVIE</h1>
        </>
  )
}

SearchHeadingFind.propTypes = {
  children: PropTypes.any
}
