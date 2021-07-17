import { Search } from './search.tsx'
import React from 'react'

it('search', () => {
  const comp = shallow(<Search/>)
  expect(comp).toMatchSnapshot()
})
