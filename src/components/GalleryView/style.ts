import styled from 'styled-components';


export const Container = styled.div`
    padding: 2rem 5%;
`;

export const HeadinOne = styled.h1`
       display: flex;
       justify-content: center;
       align-items: center;
       padding-top: 3rem;
    `;

export const ContainerBox = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(55rem, 1fr));
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

    @media screen and (max-width: 450px){
        width: 100%;
    }
`;