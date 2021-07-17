import * as React from 'react'
import { SearchFilter } from '../search-filter'
import { SearchButton } from '../search-button'
import './search-settings.scss'

interface SearchSettingsProps {
    request: string
    setting: string
    setSetting: any
    resultsSort: string
    fetchingAllFilms: any
}

export const SearchSettings : React.FC<SearchSettingsProps> = ({ request, setting, setSetting, resultsSort, fetchingAllFilms}) => {
  return (
        <div className="search-settings">
            <SearchFilter
                setSetting={setSetting}
                setting={setting}
            />
            <SearchButton
                resultsSort={resultsSort}
                request={request}
                setting={setting}
                fetchingAllFilms={fetchingAllFilms}
            />
        </div>
  )
}
