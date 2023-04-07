import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Image = styled.img`
    width: 70rem;
    pointer-events: none;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    border-radius: .5rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
    margin-bottom: 5rem;
  & h1 {
    font-size: 4rem;
    color: #778;
  }

  & a {
    color: #7159c1;
    font-weight: 700;
    font-size: 2rem;
    margin-top: 2rem;
    text-decoration: underline;
  }
`;
