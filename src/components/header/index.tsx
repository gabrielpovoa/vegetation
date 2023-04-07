import React from 'react'
import { Container, Title, Fanout, Description } from './style'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Description>
            <Fanout>Brazilian</Fanout>
        <Title>Vegetation</Title>
        </Description>
      </Link>
    </Container>
  )
}
