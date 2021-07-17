import * as React from 'react'
import './search-button.scss'

interface SearchButtonProps {
  request: string
  setting: string
  resultsSort: string
  fetchingAllFilms: any
}

export const SearchButton : React.FC<SearchButtonProps> = ({ request, setting, resultsSort, fetchingAllFilms }) => {
  return (
        <button onClick={() => {
          if (request !== '') {
            fetchingAllFilms(request, setting, resultsSort)
          }
        }} className="search-settings__button">SEARCH</button>
  )
}
