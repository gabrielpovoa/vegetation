import { Link, useParams } from 'react-router-dom'
import { brazilVegetation } from '../../Data'
import { Container, ImageContainer, Image, Hero, Description, Content, Headingup, Gallery } from './style'
import { GalleryView } from '../GalleryView'

export const Details = () => {
    const { id } = useParams()
    const vegetation = brazilVegetation.biomes[Number(id)];
    return <>
        <Container>
            <Hero>
                <ImageContainer>
                    <Image src={vegetation.image} alt={vegetation.description} />
                </ImageContainer>
                <Content>
                    <Headingup>{vegetation.name}</Headingup>
                    <Description>{vegetation.description}</Description>
                    <Link to="/">Voltar</Link>
                </Content>
            </Hero>
        </Container>
        <Gallery>
            <GalleryView data={vegetation.gallery} dataName={vegetation.name} />
        </Gallery>
    </>

}
