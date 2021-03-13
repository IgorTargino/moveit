import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  background: 
    ${props => props.theme.title === 'dark'
    ? props.theme.color.dark 
    : props.theme.color.white};
  border-radius: 5%;
  box-shadow: 0 0 60px rgba(0, 0 ,0 , 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;

  text-align: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
  }
  
  p img {
    margin-bottom: 1rem;
  }
`;

export const ChallengeActive = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    color: ${props => props.theme.color.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${props => props.theme.color.grayLine};
    width: 100%;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main strong{
    font-size: 2rem;
    font-weight: 600;
    color: ${props => props.theme.color.title};
    margin: 1.5rem 0rem 1rem
  }

  main p {
    line-height: 1.5;
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    width: 100%;
  }

  footer button{
    color: ${props => props.theme.color.white};

    font-size: 1rem;
    font-weight: 600;

    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    transition: filter 0.2s;
    
    &:hover{
      filter: brightness(0.9)
    }
  }


`;

export const FailedButton = styled.button`
  background: ${props => props.theme.color.red};
`;

export const SuccededButton = styled.button`
  background: ${props => props.theme.color.green};
`;

