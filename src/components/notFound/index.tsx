import React from 'react'
import {Link} from 'react-router-dom'
import bioma from '../../assets/biomas.png'
import { Container, Image,Content } from './style'

export const NotFound = () => {
  return (
    <Container>
        <Content>
            <h1>Not Found page</h1>
            <Link to="/">Back to Home</Link>
        </Content>
        <Image src={bioma} alt= "Biomas do Brasil - Página não encontrada" />
    </Container>
  )
}
