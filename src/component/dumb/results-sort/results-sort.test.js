import { ResultsSort } from './results-sort.tsx'
import React from 'react'

const mockSortingResults = jest.fn((value, setting, data) => { console.log(value, setting, data) })

const setUp = (sort) => shallow(<ResultsSort searchSetting='title' searchData='harry' sortingResults={mockSortingResults} sortVision={sort}/>)

describe('results sort test', () => {
  it('results sort test 1', () => {
    const comp = setUp(1)
    expect(comp).toMatchSnapshot()
    const btn = comp.find('.btn')
    btn.simulate('click')
    expect(mockSortingResults.mock.calls.length).toBe(1)
  })
  it('results sort test 2', () => {
    const comp = setUp(2)
    expect(comp).toMatchSnapshot()
    const btn = comp.find('.btn')
    btn.simulate('click')
    expect(mockSortingResults.mock.calls.length).toBe(1)
  })
  it('results sort test 3', () => {
    const comp = setUp(0)
    expect(comp).toMatchSnapshot()
  })
})
