import { SearchFilter } from './search-filter.tsx'
import React from 'react'

function f () {
  return 1
}

const setUp = (setting) => shallow(<SearchFilter setSetting={f} setting={setting}/>)

describe('search filter tests', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it('search filter test 1', () => {
    const component = setUp('title')
    expect(component).toMatchSnapshot()
    const btn = component.find('.btn')
    btn.simulate('click')
  })
  it('search filter test 2', () => {
    const component = setUp('genres')
    expect(component).toMatchSnapshot()
    const btn = component.find('.btn')
    btn.simulate('click')
  })
})
