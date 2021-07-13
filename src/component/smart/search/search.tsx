import * as React from 'react'
import { useState } from 'react'
import { SearchInput } from '../../dumb/search-input'
import { SearchHeadingFind } from '../../dumb/search-heading-find/search-heading-find'
import { SearchSettings } from '../../dumb/search-settings'
import { SearchHeadingNetflix } from '../../dumb/search-heading-netflix'
import './search.scss'

interface SearchProps {
    resultsSort: string
}

export const Search : React.FC<SearchProps> = ({ resultsSort }) => {
  const [request, setRequest] = useState('')
  const [setting, setSetting] = useState('title')

  return (
            <div className="search">
                <SearchHeadingFind>
                    <SearchHeadingNetflix/>
                </SearchHeadingFind>
                <SearchInput
                    setRequest={setRequest}
                    request={request}
                    setting={setting}
                    resultsSort={resultsSort}
                />
                <SearchSettings
                    resultsSort={resultsSort}
                    request={request}
                    setSetting={setSetting}
                    setting={setting}
                />
            </div>
  )
}
