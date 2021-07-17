import { ErrorBoundary } from './error-boundary.tsx'
import React from 'react'

const child = <div>Hello</div>

describe('error boundary tests', () => {
  it('error boundary test 1', () => {
    const comp = shallow(<ErrorBoundary children={child} ok={true}/>)
    expect(comp).toMatchSnapshot()
  })
  it('error boundary test 2', () => {
    const comp = shallow(<ErrorBoundary children={child} ok={false}/>)
    expect(comp).toMatchSnapshot()
  })
})
