import * as React from 'react'
import './search-filter.scss'

interface SearchFilterProps {
    setSetting: any
    setting: string
}

export const SearchFilter : React.FC<SearchFilterProps> = ({ setSetting, setting }) => {
  if (setting === 'title') {
    return (
            <div className="search-filter">
                <span className="search-filter__text">SEARCH BY</span>
                <button onClick={(e) => {
                  setSetting(e.target.value)
                }} value="title" className="search-filter__button search-filter__button-active">TITLE</button>
                <button onClick={(e) => {
                  setSetting(e.target.value)
                }} value="genres" className="search-filter__button">GENRE</button>
            </div>
    )
  } if (setting === 'genres') {
    return (
            <div className="search-filter">
                <span className="search-filter__text">SEARCH BY</span>
                <button onClick={(e) => {
                  setSetting(e.target.value)
                }} value="title" className="search-filter__button ">TITLE</button>
                <button onClick={(e) => {
                  setSetting(e.target.value)
                }} value="genre" className="search-filter__button search-filter__button-active">GENRE</button>
            </div>
    )
  }
}
