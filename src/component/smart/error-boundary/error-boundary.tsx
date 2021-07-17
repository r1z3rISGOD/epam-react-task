import * as React from 'react'

interface ErrorBoundaryProps {
    children: React.ReactNode
    ok: boolean
}

export const ErrorBoundary : React.FC<ErrorBoundaryProps> = ({ children, ok }) => {
  const OopsText = () => (
        <h2>
            Something went wrong!
        </h2>
  )

  return <>{ok ? children : <OopsText />}</>
}
