import * as React from 'react'
import './search-input.scss'
import { FormEvent } from 'react'

interface SearchInputProps {
    setRequest: any
    request: string
    setting: string
    resultsSort: string
    fetchingAllFilms: any
}

export const SearchInput : React.FC<SearchInputProps> = ({ setRequest, request, setting, resultsSort, fetchingAllFilms }) => {
  return (
            <form className='search__form' onSubmit={(event : FormEvent<HTMLFormElement>) => {
              event.preventDefault()
              if (request) {
                fetchingAllFilms(request, setting, resultsSort)
              }
            }}>
            <input onChange={(event : React.ChangeEvent<HTMLInputElement>) => setRequest(event.target.value)} type="text" className="search__input"/>
            </form>
  )
}
