import { NotFound } from './not-found.tsx'
import React from 'react'

it('not found', () => {
  const comp = shallow(<NotFound/>)
  expect(comp).toMatchSnapshot()
})
