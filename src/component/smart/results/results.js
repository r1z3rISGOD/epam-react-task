import React, { useState } from 'react'
import { ResultsBodyContainer } from '../../dumb/results-body-container'
import { ResultsHeader } from '../../dumb/results-header'
import PropTypes from 'prop-types'

export const Results = (props) => {
  const {
    isOpened,
    fetchedData,
    searchData,
    searchSetting,
    openedFilmsGenre
  } = props
  const [active, setActive] = useState('vote_average')
  const resultsCount = fetchedData.length

  return (
    <>
      <ResultsHeader
        active={active}
        setActive={setActive}
        isOpened={isOpened}
        resultsCount={resultsCount}
        searchData={searchData}
        searchSetting={searchSetting}
        openedFilmsGenre={openedFilmsGenre}
      />
      <ResultsBodyContainer
          active={active}
          fetchedData={fetchedData}
      />
    </>
  )
}

Results.propTypes = {
  resultsCount: PropTypes.number,
  isOpened: PropTypes.bool,
  fetchedData: PropTypes.array
}
