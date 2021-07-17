import { Footer } from './footer.tsx'
import React from 'react'

it('footer', () => {
  const comp = shallow(<Footer/>)
  expect(comp).toMatchSnapshot()
})
