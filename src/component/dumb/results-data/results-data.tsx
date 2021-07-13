import * as React from 'react'

interface ResultsDataProps {
    children: React.ReactNode
}

export const ResultsData : React.FC<ResultsDataProps> = ({ children }) => {
  return (
        <div className="results-data">
            {children}
        </div>
  )
}
