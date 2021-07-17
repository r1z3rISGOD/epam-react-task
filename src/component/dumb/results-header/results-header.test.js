import { ResultsHeader } from './results-header.tsx'
import React from 'react'

function f () {
  return 1
}

function f1 () {
  return 1
}

describe('results header tests', () => {
  it('results header test 1', () => {
    const comp = shallow(<ResultsHeader headerType={1} openedFilmsGenre='drama' resultsCount={10} searchData='avenger' searchSetting='title' sortingResults={f} sortVision={f1}/>)
    expect(comp).toMatchSnapshot()
  })
  it('results header test 2', () => {
    const comp = shallow(<ResultsHeader headerType={2} openedFilmsGenre='drama' resultsCount={10} searchData='avenger' searchSetting='title' sortingResults={f} sortVision={f1}/>)
    expect(comp).toMatchSnapshot()
  })
  it('results header test 3', () => {
    const comp = shallow(<ResultsHeader headerType={0} openedFilmsGenre='drama' resultsCount={10} searchData='avenger' searchSetting='title' sortingResults={f} sortVision={f1}/>)
    expect(comp).toMatchSnapshot()
  })
})
