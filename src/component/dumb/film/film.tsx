import * as React from 'react'
import { useEffect, useState } from 'react'
import { SearchHeadingNetflix } from '../search-heading-netflix'
import './film.scss'
import { FilmButton } from '../film-button'
import { FilmBody } from '../film-body'
import { useDispatch } from 'react-redux'
import { fetchData, fetchFilm } from '../../services/fetchService'
import { useParams } from 'react-router'
import { putFetchedArrayToStore, putOpenedFilmsGenreToStore, putOpenedFilmToStore } from '../../../store/actions'
import { Loader } from '../loader'

interface FilmProps {
    openedFilm: any[]
}

export const Film : React.FC<FilmProps> = ({ openedFilm }) => {
  const [load, setLoad] = useState<boolean>(openedFilm === undefined)
  const dispatch = useDispatch()
  const location = useParams()

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

  const content = load
    ? <Loader/>
    : <div className='film'>
                <SearchHeadingNetflix>
                    <FilmButton/>
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
