import styled from 'styled-components';

export const Container = styled.div`
    background-color: #39304A;
    padding: 2rem 5%;
    position: sticky;
    height: 100vh;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 550px){
        position: initial;
        height: 5rem;
        width: 100%;
    }
`;

export const Description = styled.div`
    display: flex;
    gap: .4rem;
    border-bottom: .2rem solid #FFF;
`; 

export const Title = styled.h1`
    font-size: 2rem;
    color: #069E2D;

`;

export const Fanout = styled.h1`
    color: #F7E733;
    text-transform: uppercase;
`;

