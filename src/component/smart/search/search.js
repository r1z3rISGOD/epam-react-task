import React, { useState } from 'react'
import { SearchInput } from '../../dumb/search-input'
import { SearchHeadingFind } from '../../dumb/search-heading-find/search-heading-find'
import { SearchSettings } from '../../dumb/search-settings'
import { SearchHeadingNetflix } from '../../dumb/search-heading-netflix/search-heading-netflix'
import './search.scss'
import PropTypes from 'prop-types'

export const Search = (props) => {
  const { resultsSort } = props
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

Search.propTypes = {
  resultsSort: PropTypes.string
}
