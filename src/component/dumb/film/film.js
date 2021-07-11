import React from 'react'
import { SearchHeadingNetflix } from '../search-heading-netflix/search-heading-netflix'
import './film.scss'
import { useHistory } from 'react-router-dom'
import { clearStore } from '../../../store/actions'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

export const Film = (props) => {
  console.log(props)
  const dispatch = useDispatch()
  const history = useHistory()
  const { openedFilm } = props
  const date = openedFilm.release_date
  return (
        <div className='film'>
            <SearchHeadingNetflix>
                <button onClick={() => {
                  history.push('/')
                  dispatch(clearStore())
                  console.clear()
                }} className='film__search-button'>SEARCH</button>
            </SearchHeadingNetflix>
            <div className='film-body'>
                <img className='film-body__img' src={openedFilm.poster_path} alt={openedFilm.title}/>
                <div className='film-data'>
                    <div className='film-data__title-rating'>
                        <span className='film-data__title'>{openedFilm.title}</span>
                        <span className='film-data__rating'>{openedFilm.vote_average}</span>
                    </div>
                    <div className='film-data__date-runtime'>
                        <span className='film-data__date'>{date.substr(0, 4)}</span>
                        <span className='film-data__time'>{`${openedFilm.runtime} min`}</span>
                    </div>
                    <span className='film-data__overview'>{openedFilm.overview}</span>
                </div>
            </div>
        </div>
  )
}

Film.propTypes = {
  openedFilm: PropTypes.object
}
