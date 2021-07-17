import { ResultsBodyContainer } from './results-body-container.tsx'
import React from 'react'

const film = [
  {
    id: 412302,
    title: 'Gemini',
    tagline: '',
    vote_average: 10,
    vote_count: 3,
    release_date: '2018-03-30',
    poster_path: 'https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg',
    overview: 'A heinous crime tests the complex relationship between a tenacious personal assistant and her Hollywood starlet boss. As the assistant travels across Los Angeles to unravel the mystery, she must stay one step ahead of a determined policeman and confront her own understanding of friendship, truth and celebrity.',
    budget: 0,
    revenue: 0,
    genres: [
      'Mystery',
      'Thriller'
    ],
    runtime: 92
  }
]

const mockFetchingAllFilms = jest.fn((fetchedData, searchSetting, active) => console.log(fetchedData, searchSetting, active))

describe('results-body-container tests', () => {
  it('results body container test 1', () => {
    const comp = shallow(<ResultsBodyContainer fetchedData={[]} fetchingAllFilms={mockFetchingAllFilms} searchSetting='title' active='vote_average'/>)
    expect(comp).toMatchSnapshot()
  })
  it('results body container test 2', () => {
    const comp = shallow(<ResultsBodyContainer fetchedData={film} fetchingAllFilms={mockFetchingAllFilms} searchSetting='title' active='vote_average'/>)
    expect(comp).toMatchSnapshot()
  })
})
