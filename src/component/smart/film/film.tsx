import * as React from 'react'
import { useEffect, useState } from 'react'
import { SearchHeadingNetflix } from '../../dumb/search-heading-netflix'
import './film.scss'
import { FilmButton } from '../../dumb/film-button'
import { FilmBody } from '../../dumb/film-body'
import { useDispatch } from 'react-redux'
import { fetchData, fetchFilm } from '../../services/fetchService'
import { useParams } from 'react-router'
import {
  clearStore,
  putFetchedArrayToStore,
  putOpenedFilmsGenreToStore,
  putOpenedFilmToStore
} from '../../../store/actions'
import { Loader } from '../../dumb/loader'
import { useHistory } from 'react-router-dom'

interface FilmProps {
    openedFilm: any[]
}

export const Film : React.FC<FilmProps> = ({ openedFilm }) => {
  const [load, setLoad] = useState<boolean>(openedFilm === undefined)
  const dispatch = useDispatch()
  const location = useParams()
  const history = useHistory()

  async function fetching () : Promise<void> {
    const fetchedFilm = await fetchFilm(location['id'])
    dispatch(putOpenedFilmToStore(fetchedFilm))
    dispatch(putOpenedFilmsGenreToStore(fetchedFilm.genres[0]))
    const newFetchedArray = await fetchData(fetchedFilm.genres[0], 'genres', 'release_date')
    dispatch(putFetchedArrayToStore(newFetchedArray.data))
    setLoad(false)
  }

  useEffect(() => {
    if (load) {
      fetching()
    }
  })

  const onClick = () => {
    history.push('/')
    dispatch(clearStore())
    console.clear()
  }

  const content = load
    ? <Loader/>
    : <div className='film'>
                <SearchHeadingNetflix>
                    <FilmButton onClick={onClick}/>
                </SearchHeadingNetflix>
                <FilmBody
                    openedFilm={openedFilm}
                />
            </div>
  return (
        <div>
            {content}
        </div>
  )
}
