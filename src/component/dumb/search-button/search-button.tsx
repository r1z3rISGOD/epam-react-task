import * as React from 'react'
import './search-button.scss'
import { useDispatch } from 'react-redux'
import { changeSearchRequestedData, changeTypeOfSearch, putFetchedArrayToStore } from '../../../store/actions'
import { fetchData } from '../../services/fetchService'
import { useHistory } from 'react-router-dom'

interface SearchButtonProps {
  request: string
  setting: string
  resultsSort: string
}

export const SearchButton : React.FC<SearchButtonProps> = ({ request, setting, resultsSort }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  return (
        <button onClick={async () => {
          if (request !== '') {
            const response = await fetchData(request, setting, resultsSort)
            dispatch(changeSearchRequestedData(request))
            dispatch(changeTypeOfSearch(setting))
            dispatch(putFetchedArrayToStore(response.data))
            history.push(`/search/?request=${request}`)
          }
        }} className="search-settings__button">SEARCH</button>
  )
}
