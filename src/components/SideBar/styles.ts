import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100px;

  padding: 1rem 0 1rem 0; 

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  background-color: ${(props) => props.theme.color.primary};

  @media(max-width: 720px) {
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const ContainerButton = styled.div`
  width: 100%;
  height: auto;
  background: ${props => props.theme.color.secondary};
`

const Button = styled.button`
  width: 100%;
  height: 100px;
  border: 0;

  background: ${props => props.theme.color.primary};
  color: ${prosp => prosp.theme.color.title};


  &:hover {
    border-right: 2px solid ${props => props.theme.color.green};
  }

  &:active {
    border: 0;
  }

`;

export { Container, ContainerButton, Button };