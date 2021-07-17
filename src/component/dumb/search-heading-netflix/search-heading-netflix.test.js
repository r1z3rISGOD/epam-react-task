import React from 'react'
import { SearchHeadingNetflix } from './search-heading-netflix.tsx'

it('search heading netflix', () => {
  const comp = shallow(<SearchHeadingNetflix/>)
  expect(comp).toMatchSnapshot()
})
