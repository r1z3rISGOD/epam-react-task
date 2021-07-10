import React from 'react'
import { ErrorBoundary } from '../../smart/error-boundary'
import { ResultsCount } from '../results-count'
import { ResultsSort } from '../results-sort'
import { ResultsData } from '../results-data'
import { ResultsRelated } from '../results-related'
import './results-header.scss'

export const ResultsHeader = (props) => {
  const { resultsCount, isOpened, active, setActive, searchData, searchSetting, openedFilmsGenre } = props

  if (resultsCount > 0 && !isOpened) {
    return (
            <div className="results-header">
                <ResultsData>
                    <ErrorBoundary>
                        <ResultsCount
                            resultsCount={resultsCount}
                        />
                    </ErrorBoundary>
                    <ResultsSort
                        active={active}
                        setActive={setActive}
                        resultsCount={resultsCount}
                        searchData={searchData}
                        searchSetting={searchSetting}
                    />
                </ResultsData>
            </div>
    )
  } else if (isOpened) {
    return (
            <div className="results-header">
                <ResultsData>
                    <ResultsRelated openedFilmsGenre={openedFilmsGenre}/>
                </ResultsData>
            </div>
    )
  } else {
    return (
            <div className="results-header"/>
    )
  }
}
