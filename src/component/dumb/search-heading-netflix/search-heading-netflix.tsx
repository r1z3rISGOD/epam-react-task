import * as React from 'react'
import './search-heading-neflix.scss'

interface SearchHeadingNetflixProps {
    children?: React.ReactNode
}

export const SearchHeadingNetflix : React.FC<SearchHeadingNetflixProps> = ({ children }) => {
  return (
      <div className='film-heading'>
            <h2 className="search__heading-1">netflixroulette</h2>
          {children}
      </div>
  )
}
