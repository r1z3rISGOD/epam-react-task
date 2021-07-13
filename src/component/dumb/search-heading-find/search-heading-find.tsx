import * as React from 'react'
import './search-heading-find.scss'

interface SearchHeadingFindProps {
    children: React.ReactNode
}

export const SearchHeadingFind : React.FC<SearchHeadingFindProps> = ({ children }) => {
  return (
        <>
                {children}
            <h1 className="search__heading-2">FIND YOUR MOVIE</h1>
        </>
  )
}
