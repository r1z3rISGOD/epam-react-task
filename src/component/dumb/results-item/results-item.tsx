import * as React from 'react'
import './results-item.scss'
import { putOpenedFilmToStore, putOpenedFilmsGenreToStore, putFetchedArrayToStore } from '../../../store/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchData, fetchFilm } from '../../services/fetchService'

interface ResultsItemProps {
    title: string,
    genres: any[],
    year: string,
    picture: string,
    id: number,
    active : string
}

export const ResultsItem : React.FC<ResultsItemProps> = ({
  title,
  genres,
  year,
  picture,
  id,
  active
}) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const fetching = async () => {
    const fetchedFilm = await fetchFilm(id)
    dispatch(putOpenedFilmToStore(fetchedFilm))
    dispatch(putOpenedFilmsGenreToStore(fetchedFilm.genres[0]))
    history.push(`/film/${fetchedFilm.id}`)
    const newFetchedArray = await fetchData(fetchedFilm.genres[0], 'genres', active)
    dispatch(putFetchedArrayToStore(newFetchedArray.data))
  }

  return (
        <div className="item" onClick={async () : Promise<void> => {
          await fetching()
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
