import React from 'react'
import PropTypes from 'prop-types'

export const FilmBody = (props) => {
  const { film } = props
  return (
        <div className='film-body'>
            <img className='film-body__img' src={film.poster_path} alt={props.title}/>
            <div className='film-data'>
                <div className='film-data__title-rating'>
                    <span className='film-data__title'>{film.title}</span>
                    <span className='film-data__rating'>{film.vote_average}</span>
                </div>
                <div className='film-data__date-runtime'>
                    <span className='film-data__date'>{film.release_date.substr(0, 4)}</span>
                    <span className='film-data__time'>{`${film.runtime} min`}</span>
                </div>
                <span className='film-data__overview'>{film.overview}</span>
            </div>
        </div>
  )
}

FilmBody.propTypes = {
  openedFilm: PropTypes.object
}
