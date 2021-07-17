import { Results } from './results.tsx'
import React from 'react'

it('results', () => {
  const comp = shallow(<Results/>)
  expect(comp).toMatchSnapshot()
})
