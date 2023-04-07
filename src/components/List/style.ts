import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 5rem;
    padding: 2rem;

    & a {
        color: initial
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 2%;

    & p {
        line-height: 1.8rem;
        font-weight: 500;
        font-size: 1.2rem;
    }
`;

export const Heading = styled.h2`
    color: #45425A;
    margin-bottom: 2rem;
`;

export const Listy = styled.li`
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

`;

export const ImageContainer = styled.div`
    height: 20rem;
`;

export const Image = styled.img`
border-radius: .5rem .5rem 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;