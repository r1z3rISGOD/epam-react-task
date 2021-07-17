import { ResultsBody } from './results-body.tsx'
import React from 'react'

it('results body', () => {
  const TextInputComponent = shallow(<ResultsBody children={() => {}}/>)
  expect(TextInputComponent).toMatchSnapshot()
})
