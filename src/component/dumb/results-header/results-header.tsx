import * as React from 'react'
import './results-header.scss'
import { ErrorBoundary } from '../../smart/error-boundary'
import { ResultsCount } from '../results-count'
import { ResultsSort } from '../results-sort'
import { ResultsData } from '../results-data'
import { ResultsRelated } from '../results-related'

interface ResultsHeaderProps {
    resultsCount: number
    hasOpened: boolean
    active: string
    setActive: any
    searchData: string
    searchSetting: string
    openedFilmsGenre: string
}

export const ResultsHeader : React.FC<ResultsHeaderProps> = ({
  resultsCount,
  hasOpened,
  active,
  setActive,
  searchData,
  searchSetting,
  openedFilmsGenre
}) => {
  if (resultsCount > 0 && !hasOpened) {
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
  } else if (hasOpened) {
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
