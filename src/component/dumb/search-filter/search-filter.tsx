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
                <button className="search-filter__button search-filter__button-active">TITLE</button>
                <button onClick={() => {
                  setSetting('genres')
                }} value="genres" className="search-filter__button btn">GENRE</button>
            </div>
    )
  } if (setting === 'genres') {
    return (
            <div className="search-filter">
                <span className="search-filter__text">SEARCH BY</span>
                <button onClick={() => {
                  setSetting('title')
                }} value="title" className="search-filter__button btn">TITLE</button>
                <button className="search-filter__button search-filter__button-active">GENRE</button>
            </div>
    )
  }
}
