import React from 'react'
import { Container, ContainerBox, FotosArea } from './style';

type Props = {
    data: string[];
    dataName: string;
}

export const GalleryView = ({ data, dataName }: Props) => {
    return <>
        <Container>
        <h1>Fotos of {dataName}</h1>
            <ContainerBox>
            {data.map((item, index) => (
                <FotosArea key={index}>
                    <img src={item} alt={dataName} title={dataName} />
                </FotosArea>
            ))}
            </ContainerBox>
        </Container>
    </>
}
