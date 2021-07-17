import * as React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 130px;
  height: 50px;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  color: #e55f64;
  font-weight: bold;`

interface FilmButtonProps {
    onClick: any
}

export const FilmButton : React.FC<FilmButtonProps> = ({ onClick }) => {
  return (
        <Button className='btn' onClick={() => onClick()}>SEARCH</Button>
  )
}
