import { brazilVegetation } from '../../Data';
import { Container, Listy, Heading, Image, ImageContainer, Content } from './style'

export const List = () => {
    const vegetation = brazilVegetation.biomes;

    return (
        <Container>
            {vegetation.map((item, index) => (
                <Listy key={index}>
                    <ImageContainer>
                        <Image src={item.image} alt={item.description} />
                    </ImageContainer>
                    <Content>
                    <Heading>{item.name}</Heading>
                    <p>{item.description}</p>
                    </Content>
                </Listy>
            ))}
        </Container>
    )
}
