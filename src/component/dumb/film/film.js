import React from 'react'
import { SearchHeadingNetflix } from '../search-heading-netflix'
import './film.scss'
import { FilmButton } from '../film-button'
import PropTypes from 'prop-types'
import { FilmBody } from '../film-body'

export const Film = (props) => {
  const { openedFilm } = props

  return (
        <div className='film'>
            <SearchHeadingNetflix>
                <FilmButton/>
            </SearchHeadingNetflix>
            <FilmBody
                film={openedFilm}
            />
        </div>
  )
}

Film.propTypes = {
  openedFilm: PropTypes.object
}
