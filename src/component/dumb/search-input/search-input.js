import React from 'react'
import './search-input.scss'
import { changeSearchRequestedData, changeTypeOfSearch, putFetchedArrayToStore } from '../../../store/actions'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { fetchData } from '../../services/fetchService'

export const SearchInput = (props) => {
  const history = useHistory()
  const { setRequest, request, setting, resultsSort } = props
  const dispatch = useDispatch()

  return (
            <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  dispatch(changeSearchRequestedData(request))
                  dispatch(changeTypeOfSearch(setting))
                  const response = await fetchData(request, setting, resultsSort)
                  dispatch(putFetchedArrayToStore(response.data))
                  history.push(`/search/?request=${request}`)
                }}>
            <input value={request} onChange={(e) => setRequest(e.target.value)} type="text" className="search__input"/>
            </form>
  )
}

SearchInput.propTypes = {
  setRequest: PropTypes.func,
  request: PropTypes.string,
  setting: PropTypes.string,
  resultsSort: PropTypes.string
}
