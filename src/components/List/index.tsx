import { Link } from 'react-router-dom';
import { brazilVegetation } from '../../Data';
import { Container, Listy, Heading, Image, ImageContainer, Content } from './style'

export const List = () => {
    const vegetation = brazilVegetation.biomes;

    return (
        <Container>
            {vegetation.map((item, index) => (
                <Listy key={index}>
                    <Link to={`/details/${item.id}`} >
                    <ImageContainer>
                        <Image src={item.image} alt={item.description} />
                    </ImageContainer>
                    <Content>
                    <Heading>{item.name}</Heading>
                    <p>{item.description}</p>
                    </Content>
                    </Link>
                </Listy>
            ))}
        </Container>
    )
}
