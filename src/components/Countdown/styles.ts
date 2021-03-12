import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${props => props.theme.color.title};

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${props => props.theme.color.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  > div span {
    flex: 1;
  }

  > div span:first-child{
    border-right: 1px solid #f0f1f3;
  }

  > div span:last-child{
    border-left: 1px solid #f0f1f3;
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${props => props.theme.color.blue};
  color: ${props => props.theme.color.white};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  &:hover{
    background-color: ${props => props.theme.color.blueDark};
  }

  &:disabled{
    background: ${props => props.theme.color.white};
    color: ${props => props.theme.color.text};
    border-bottom: 4px solid ${props => props.theme.color.green};
    cursor: not-allowed;
  }
`;

const ButtonActive = styled(Button)`
  background: ${props => props.theme.color.white};
  color: ${props => props.theme.color.title};
  border: 0;

  &:hover{
    background: ${props => props.theme.color.red};
    color: ${props => props.theme.color.white};
  }
`;

export { Container, Button, ButtonActive };