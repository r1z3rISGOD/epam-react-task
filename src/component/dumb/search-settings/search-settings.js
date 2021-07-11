import React from 'react'
import { SearchFilter } from '../search-filter'
import { SearchButton } from '../search-button'
import PropTypes from 'prop-types'
import './search-settings.scss'

export const SearchSettings = (props) => {
  const { request, setting, setSetting, resultsSort } = props

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
            />
        </div>
  )
}

SearchSettings.propTypes = {
  request: PropTypes.string,
  setting: PropTypes.string,
  setSetting: PropTypes.func,
  active: PropTypes.string,
  setActive: PropTypes.func,
  resultsSort: PropTypes.string
}
