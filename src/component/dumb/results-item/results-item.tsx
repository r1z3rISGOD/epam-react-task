import * as React from 'react'
import './results-item.scss'

interface ResultsItemProps {
    title: string,
    genres: any[],
    year: string,
    picture: string,
    id: number,
    active : string,
    fetchingFilm: any
}

export const ResultsItem : React.FC<ResultsItemProps> = ({
  title,
  genres,
  year,
  picture,
  id,
  active,
  fetchingFilm
}) => {
  return (
        <div className="item" onClick={() => fetchingFilm(id, active)}>
            <img className="item__img" src={picture} alt={title}/>
            <div className="item-data">
                <div className='item-data__text'>
                    <span className="item-data__title">{title.toUpperCase()}</span>
                    <span className="item-data__genres">{genres[0]}</span>
                </div>
                <span className="item-data__year">{year.substr(0, 4)}</span>
            </div>
        </div>
  )
}
