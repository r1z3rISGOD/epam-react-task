import * as React from 'react'
import './results-header.scss'
import { ErrorBoundary } from '../../smart/error-boundary'
import { ResultsCount } from '../results-count'
import { ResultsSort } from '../results-sort'
import { ResultsData } from '../results-data'
import { ResultsRelated } from '../results-related'

interface ResultsHeaderProps {
    resultsCount: number
    searchData: string
    searchSetting: string
    openedFilmsGenre: string
    headerType: number
    sortingResults: any
    sortVision: number
}

export const ResultsHeader : React.FC<ResultsHeaderProps> = ({
  resultsCount,
  searchData,
  searchSetting,
  openedFilmsGenre,
  headerType,
  sortingResults,
  sortVision
}) => {
  switch (headerType) {
    case 1:
      return (
          <div className="results-header">
              <ResultsData>
                  <ErrorBoundary ok={true}>
                      <ResultsCount
                          resultsCount={resultsCount}/>
                  </ErrorBoundary>
                  <ResultsSort
                      searchData={searchData}
                      searchSetting={searchSetting}
                      sortingResults={sortingResults}
                      sortVision={sortVision}
                  />
              </ResultsData>
          </div>
      )
    case 2:
      return (
          <div className="results-header">
              <ResultsData>
                  <ResultsRelated openedFilmsGenre={openedFilmsGenre}/>
              </ResultsData>
          </div>
      )
    default:
      return (
          <div className="results-header"/>
      )
  }
}
