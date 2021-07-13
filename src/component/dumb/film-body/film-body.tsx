import * as React from 'react'

interface FilmBodyProps {
    openedFilm: object
}

export const FilmBody : React.FC<FilmBodyProps> = ({ openedFilm }) => {
  return (
        <div className='film-body'>
            <img className='film-body__img' src={openedFilm["poster_path"]} alt={openedFilm["title"]}/>
            <div className='film-data'>
                <div className='film-data__title-rating'>
                    <span className='film-data__title'>{openedFilm["title"]}</span>
                    <span className='film-data__rating'>{openedFilm["vote_average"]}</span>
                </div>
                <div className='film-data__date-runtime'>
                    <span className='film-data__date'>{openedFilm["release_date"].substr(0, 4)}</span>
                    <span className='film-data__time'>{`${(openedFilm["runtime"])} min`}</span>
                </div>
                <span className='film-data__overview'>{openedFilm["overview"]}</span>
            </div>
        </div>
  )
}
