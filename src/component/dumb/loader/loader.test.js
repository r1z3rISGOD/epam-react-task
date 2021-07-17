import { Loader } from './loader.tsx'
import React from 'react'

it('loader', () => {
  const comp = shallow(<Loader/>)
  expect(comp).toMatchSnapshot()
})
