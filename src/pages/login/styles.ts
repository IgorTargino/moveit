import styled, { ThemeConsumer } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background: ${props => props.theme.color.loginBackground};
  color: ${props => props.theme.color.white};
`;

const Background = styled.img`
  width: 50%;
  position: absolute; 
  left: 0;
  top: 0;

  opacity: 0.5;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  width: 95%;
  padding-right: 5rem;

  h2 {
    margin-top: 5rem;
    font-size: 2rem;
    font-weight: 500;
  }

  div {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  > div p {
    margin-left: 15px;
    opacity: 0.6;
    font-weight: 400;
  }

  > img {
    fill: white;
  }
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 0;
  margin-top: 25px;

  span {
    margin-left: 20px;
  }

  div {
    background-color: ${props => props.theme.color.green};
    padding: 1rem;
    margin: 0;

    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export { Container, Background, LoginContainer, Button };