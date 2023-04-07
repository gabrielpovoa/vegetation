import styled from 'styled-components';


export const Container = styled.div`
    padding: 2rem 5%;
    & h1 {
        padding: 4rem 0;
        text-align: center;
        font-size: 4rem;
        color: rgb(69, 66, 90);
    }
`;

export const ContainerBox = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
gap: 2rem;
place-items: center;
`;

export const FotosArea = styled.div`
    padding: 2rem 5%;
    width:50rem;
    & img {
        border-radius: .5rem;
        width: 100%;
        object-fit: cover;
    }
`;