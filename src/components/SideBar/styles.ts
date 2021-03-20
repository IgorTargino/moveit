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

  @media(max-width: 1150px) {
    width: 100%;
    height: 10px;
    padding: 30px 18px;
    bottom: 0;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > section {
      display: flex;
      height: 100%;
      justify-content: center;
    }
  }

  > section {
    width: 100%;
    height: auto;
    background: ${props => props.theme.color.primary};
  }


`;

const ContainerButton = styled.div`
  width: 100%;
  height: 100px;
  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.color.primary};
  color: ${prosp => prosp.theme.color.title};


  &:hover {
    border-right: 2px solid ${props => props.theme.color.green};
    cursor: pointer;
  }

  @media(max-width: 1150px){
    height: 100%;
    padding-bottom: 10px;
    width: 20%;

    &:hover {
      border: 0;
      border-bottom: 2px solid ${props => props.theme.color.green};
    }
  }

`;

export { Container, ContainerButton };