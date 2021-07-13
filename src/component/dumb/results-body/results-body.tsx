import * as React from 'react'

interface ResultsBodyProps {
    children: React.ReactNode
}

export const ResultsBody : React.FC<ResultsBodyProps> = ({ children }) => {
  return (
        <div className="results-body">
          {children}
        </div>
  )
}
