import { SearchHeadingFind } from './search-heading-find.tsx'
import React from 'react'

it('search heading find', () => {
  const comp = shallow(<SearchHeadingFind/>)
  expect(comp).toMatchSnapshot()
})
