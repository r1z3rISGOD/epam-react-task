import React from 'react'
import { FilmButton } from './film-button.tsx'

const mockOnClick = jest.fn(() => 1)

const setUp = () => shallow(<FilmButton onClick={mockOnClick}/>)

it('film button', () => {
  const comp = setUp()
  expect(comp).toMatchSnapshot()
  const btn = comp.find('.btn')
  btn.simulate('click')
  expect(mockOnClick.mock.calls.length).toBe(1)
})
