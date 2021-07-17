import * as React from 'react'
import { useState } from 'react'
import { SearchInput } from '../../dumb/search-input'
import { SearchHeadingFind } from '../../dumb/search-heading-find/search-heading-find'
import { SearchSettings } from '../../dumb/search-settings'
import { SearchHeadingNetflix } from '../../dumb/search-heading-netflix'
import './search.scss'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeSearchRequestedData, changeTypeOfSearch, putFetchedArrayToStore } from '../../../store/actions'
import { fetchData } from '../../services/fetchService'

interface SearchProps {
    resultsSort: string
}

export const Search : React.FC<SearchProps> = ({ resultsSort }) => {
  const [request, setRequest] = useState('')
  const [setting, setSetting] = useState('title')
  const history = useHistory()
  const dispatch = useDispatch()

  const fetchingAllFilms = async (request, setting, sort) => {
    const response = await fetchData(request, setting, sort)
    dispatch(changeSearchRequestedData(request))
    dispatch(changeTypeOfSearch(setting))
    dispatch(putFetchedArrayToStore(response.data))
    history.push(`/search/?request=${request}`)
  }

  return (
            <div className="search">
                <SearchHeadingFind>
                    <SearchHeadingNetflix/>
                </SearchHeadingFind>
                <SearchInput
                    setRequest={setRequest}
                    request={request}
                    setting={setting}
                    resultsSort={resultsSort}
                    fetchingAllFilms={fetchingAllFilms}
                />
                <SearchSettings
                    resultsSort={resultsSort}
                    request={request}
                    setSetting={setSetting}
                    setting={setting}
                    fetchingAllFilms={fetchingAllFilms}
                />
            </div>
  )
}
