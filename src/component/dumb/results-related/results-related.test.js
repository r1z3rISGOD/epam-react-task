import { ResultsRelated } from './results-related.tsx'
import React from 'react'

it('results related', () => {
  const comp = shallow(<ResultsRelated/>)
  expect(comp).toMatchSnapshot()
})
