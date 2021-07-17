import * as React from 'react'
import { useEffect, useState } from 'react'
import { ResultsBodyContainer } from '../../dumb/results-body-container'
import { ResultsHeader } from '../../dumb/results-header'
import {
  changeSearchRequestedData, changeTypeOfResultsSorting,
  putFetchedArrayToStore,
  putOpenedFilmsGenreToStore,
  putOpenedFilmToStore
} from '../../../store/actions'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { fetchData, fetchFilm } from '../../services/fetchService'
import { useHistory } from 'react-router-dom'

interface ResultsProps {
  hasOpened: boolean
  fetchedData: any[]
  searchData: string
  searchSetting: string
  openedFilmsGenre: string
}

export const Results : React.FC<ResultsProps> = ({
  hasOpened,
  fetchedData,
  searchData,
  searchSetting,
  openedFilmsGenre
}) => {
  const [active, setActive] = useState('vote-average')
  const [headerType, setHeaderType] = useState(0)
  const [sortVision, setSortVision] = useState(0)
  const resultsCount = fetchedData.length
  const dispatch = useDispatch()
  const location = useLocation().search
  const history = useHistory()

  const fetchingAllFilms = async (data, setting, activeGenre) => {
    const params = new URLSearchParams(location)
    const searchRequest = params.getAll('request')[0]
    if (data.length === 0 && searchRequest) {
      const newFetchedFilms = await fetchData(searchRequest, setting, activeGenre)
      if (newFetchedFilms.data.length > 0) {
        dispatch(putFetchedArrayToStore(newFetchedFilms.data))
        dispatch(changeSearchRequestedData(searchRequest))
      }
    }
  }

  const fetchingFilm = async (id, activeGenre) => {
    const fetchedFilm = await fetchFilm(id)
    dispatch(putOpenedFilmToStore(fetchedFilm))
    dispatch(putOpenedFilmsGenreToStore(fetchedFilm.genres[0]))
    history.push(`/film/${fetchedFilm.id}`)
    const newFetchedArray = await fetchData(fetchedFilm.genres[0], 'genres', activeGenre)
    dispatch(putFetchedArrayToStore(newFetchedArray.data))
  }

  const sortingResults = async (sort, setting, data) => {
    dispatch(changeTypeOfResultsSorting(sort))
    const response = await fetchData(data, setting, sort)
    dispatch(putFetchedArrayToStore(response.data))
    setActive(sort)
  }

  useEffect(() => {
    if (resultsCount > 0 && !hasOpened) {
      setHeaderType(1)
    } else if (hasOpened) {
      setHeaderType(2)
    } else {
      setHeaderType(0)
    }
    if (resultsCount > 0 && active === 'release_date') {
      setSortVision(1)
    } else if (resultsCount > 0 && active === 'vote-average') {
      setSortVision(2)
    } else {
      setSortVision(0)
    }
  })

  return (
    <>
      <ResultsHeader
        resultsCount={resultsCount}
        searchData={searchData}
        searchSetting={searchSetting}
        openedFilmsGenre={openedFilmsGenre}
        headerType={headerType}
        sortingResults={sortingResults}
        sortVision={sortVision}
      />
      <ResultsBodyContainer
          fetchingAllFilms={fetchingAllFilms}
          searchSetting={searchSetting}
          active={active}
          fetchedData={fetchedData}
          fetchingFilm={fetchingFilm}
      />
    </>
  )
}
