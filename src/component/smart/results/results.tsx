import * as React from 'react'
import { useState } from 'react'
import { ResultsBodyContainer } from '../../dumb/results-body-container'
import { ResultsHeader } from '../../dumb/results-header'

interface ResultsProps {
  hasOpened: boolean
  fetchedData: any[]
  searchData: string
  searchSetting: string
  openedFilmsGenre: string
}

export const Results : React.FC<ResultsProps> = ({
  hasOpened,
  fetchedData,
  searchData,
  searchSetting,
  openedFilmsGenre
}) => {
  const [active, setActive] = useState('vote_average')
  const resultsCount = fetchedData.length

  return (
    <>
      <ResultsHeader
        active={active}
        setActive={setActive}
        hasOpened={hasOpened}
        resultsCount={resultsCount}
        searchData={searchData}
        searchSetting={searchSetting}
        openedFilmsGenre={openedFilmsGenre}
      />
      <ResultsBodyContainer
          searchSetting={searchSetting}
          active={active}
          fetchedData={fetchedData}
      />
    </>
  )
}

