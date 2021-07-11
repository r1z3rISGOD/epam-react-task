import React from 'react'
import './search-button.scss'
import { useDispatch } from 'react-redux'
import { changeSearchRequestedData, changeTypeOfSearch, putFetchedArrayToStore } from '../../../store/actions'
import { fetchData } from '../../services/fetchService'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

export const SearchButton = (props) => {
  const history = useHistory()
  const { request, setting, resultsSort } = props
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

SearchButton.propTypes = {
  request: PropTypes.string,
  setting: PropTypes.string,
  resultsSort: PropTypes.string
}
