import { ResultsItem } from './results-item.tsx'
import React from 'react'

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

const mockFetchingFilm = jest.fn((id, active) => { console.log(id, active) })

it('results item', () => {
  const comp = shallow(<ResultsItem active='genres' fetchingFilm={mockFetchingFilm} genres={film.genres} id={film.id} picture={film.poster_path} title={film.title} year={film.release_date}/>)
  expect(comp).toMatchSnapshot()
  const btn = comp.find('.item')
  btn.simulate('click')
  expect(mockFetchingFilm.mock.calls.length).toBe(1)
})
