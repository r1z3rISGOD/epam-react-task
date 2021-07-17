import { SearchButton } from './search-button.tsx'
import React from 'react'

function f () {
  return 1
}

const setUp = (request) => shallow(<SearchButton request={request} setting='title' resultsSort='genres' fetchingAllFilms={f}/>)

describe('search button tests', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it('search button test 1', () => {
    const component = setUp('harry')
    expect(component).toMatchSnapshot()
    const btn = component.find('.search-settings__button')
    btn.simulate('click')
  })
  it('search button test 2', () => {
    const component = setUp('')
    expect(component).toMatchSnapshot()
    const btn = component.find('.search-settings__button')
    btn.simulate('click')
  })
})
