import { ResultsData } from './results-data.tsx'
import React from 'react'

it('results data', () => {
  const comp = shallow(<ResultsData children={() => {}}/>)
  expect(comp).toMatchSnapshot()
})
