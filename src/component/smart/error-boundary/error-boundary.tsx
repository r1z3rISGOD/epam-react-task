import * as React from 'react'

interface ErrorBoundaryProps {
    children: React.ReactNode
}

export const ErrorBoundary : React.FC<ErrorBoundaryProps> = ({ children }) => {
  const OopsText = () => (
        <h2>
            Something went wrong!
        </h2>
  )
  const isEverythingOk = true

  return <>{isEverythingOk ? children : <OopsText />}</>
}
