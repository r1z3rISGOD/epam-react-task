import * as React from 'react'
import './search-input.scss'
import { changeSearchRequestedData, changeTypeOfSearch, putFetchedArrayToStore } from '../../../store/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchData } from '../../services/fetchService'
import { FormEvent } from 'react'

interface SearchInputProps {
    setRequest: any
    request: string
    setting: string
    resultsSort: string
}

export const SearchInput : React.FC<SearchInputProps> = ({ setRequest, request, setting, resultsSort }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  return (
            <form onSubmit={async (event : FormEvent<HTMLFormElement>) => {
              event.preventDefault()
              if (request) {
                dispatch(changeSearchRequestedData(request))
                dispatch(changeTypeOfSearch(setting))
                const response = await fetchData(request, setting, resultsSort)
                dispatch(putFetchedArrayToStore(response.data))
                history.push(`/search/?request=${request}`)
              }
            }}>
            <input onChange={(event : React.ChangeEvent<HTMLInputElement>) => setRequest(event.target.value)} type="text" className="search__input"/>
            </form>
  )
}
