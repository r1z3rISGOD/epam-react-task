import { ResultsCount } from './results-count.tsx'
import React from 'react'

describe('results count tests', () => {
  it('results count test 1', () => {
    const comp = shallow(<ResultsCount resultsCount={5}/>)
    expect(comp).toMatchSnapshot()
  })
  it('results count test 2', () => {
    const comp = shallow(<ResultsCount resultsCount={0}/>)
    expect(comp).toMatchSnapshot()
  })
})
