import styled from 'styled-components';

export const Container = styled.main`
    background-color: #f2f2f2;
    width: 80%;
    margin: 2rem auto;
    border-radius: .5rem;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

    
    @media screen and (max-width: 768px){
        width: 100%;
        margin: 0;
    }
`;

export const Hero = styled.div`
    display: flex;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
    width: 60rem;
    max-width: 100%;

    
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const Image = styled.img`
    width: 100%;
    pointer-events: none;
`;

export const Headingup = styled.h1`
    color: rgb(69, 66, 90);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 5%;
    flex: 1;


    & a {
        width: 100%;
        background-color: #778;
        color: #FFF;
        padding: 1rem 0 ;
        font-weight: 700;
        font-size: 1.5rem;
        letter-spacing: 1px;
        border-radius: .3rem;
        text-align: center;
    }
`;

export const Description = styled.p`
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2rem;
`;

export const Gallery = styled.div`
    margin: 2rem auto;
    width: 80%;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;