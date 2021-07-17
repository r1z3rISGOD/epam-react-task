import { Film } from './film.tsx'
import React from 'react'
jest.mock('react-redux')

const film = {
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

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({
    id: 11111
  }),
  useRouteMatch: () => ({ url: '/id' })
}))

const mockDispatch = jest.fn
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}))
mockDispatch.mockImplementation(() => {})

describe('123321', () => {
  beforeEach(() => {
  })

  it('results related', () => {
    const comp = shallow(<Film openedFilm={film}/>)
    expect(comp).toMatchSnapshot()
  })
})
