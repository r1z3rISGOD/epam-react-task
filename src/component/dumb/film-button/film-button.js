import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { clearStore } from '../../../store/actions'
import styled from 'styled-components'

const Button = styled.button`
  width: 130px;
  height: 50px;
  margin-top: 25px;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  color: #e55f64;
  font-weight: bold;`

export const FilmButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  return (
        <Button onClick={() => {
          history.push('/')
          dispatch(clearStore())
          console.clear()
        }}>SEARCH</Button>
  )
}
