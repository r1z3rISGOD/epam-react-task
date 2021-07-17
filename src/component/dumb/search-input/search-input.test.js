import { SearchInput } from './search-input.tsx'
import React from 'react'

const mockFetchingAllFilms = jest.fn(() => 1)
const mockSetRequest = jest.fn(() => 1)
const setUp = (request) => shallow(<SearchInput setRequest={mockSetRequest} request={request} setting='title' resultsSort='genres' fetchingAllFilms={mockFetchingAllFilms}/>)

it('search input 1', () => {
  const comp = setUp('harry')
  expect(comp).toMatchSnapshot()
  const form = comp.find('.search__form')
  form.simulate('submit', {
    preventDefault: () => {
    }
  })
  expect(mockFetchingAllFilms.mock.calls.length).toBe(1)
})

it('search input 2', () => {
  const comp = setUp()
  expect(comp).toMatchSnapshot()
  const input = comp.find('.search__input')
  input.simulate('change', {
    target: () => {

    }
  })
  expect(mockSetRequest.mock.calls.length).toBe(1)
})
