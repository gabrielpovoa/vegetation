import React from 'react'
import { Container, ContainerBox, FotosArea, HeadinOne } from './style';

type Props = {
    data: string[];
    dataName: string;
}

export const GalleryView = ({ data, dataName }: Props) => {
    return <>
        <Container>
        <HeadinOne>Fotos of {dataName}</HeadinOne>
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
