import { SearchSettings } from './search-settings.tsx'
import React from 'react'

it('search settings', () => {
  const comp = shallow(<SearchSettings/>)
  expect(comp).toMatchSnapshot()
})
