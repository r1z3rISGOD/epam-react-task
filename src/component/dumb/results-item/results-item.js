import React from 'react'
import PropTypes from 'prop-types'
import './results-item.scss'
import { putOpenedFilmToStore, putOpenedFilmsGenreToStore, putFetchedArrayToStore } from '../../../store/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchData, fetchFilm } from '../../services/fetchService'

export const ResultsItem = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { title, genres, year, picture, id, active } = props
  return (
        <div className="item" onClick={async () => {
          const fetchedFilm = await fetchFilm(id)
          dispatch(putOpenedFilmToStore(fetchedFilm))
          dispatch(putOpenedFilmsGenreToStore(fetchedFilm.genres[0]))
          history.push(`/films/${fetchedFilm.id}`)
          const newFetchedArray = await fetchData(fetchedFilm.genres[0], 'genres', active)
          dispatch(putFetchedArrayToStore(newFetchedArray.data))
        }}>
            <img className="item__img" src={picture} alt={title}/>
            <div className="item-data">
                <div className='item-data__text'>
                    <span className="item-data__title">{title.toUpperCase()}</span>
                    <span className="item-data__genres">{genres[0]}</span>
                </div>
                <span className="item-data__year">{year.substr(0, 4)}</span>
            </div>
        </div>
  )
}

ResultsItem.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.array,
  year: PropTypes.string,
  id: PropTypes.number,
  picture: PropTypes.string
}
