import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ImgProfile = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const DataProfile = styled.div`
  margin-left: 1.5rem;

  strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.color.title};
  }

  p img {
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export { Container, ImgProfile, DataProfile };