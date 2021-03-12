import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;

  span{
    font-size: 1rem;
  }
`;

const Container = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.color.grayLine};
  margin: 0 1.5rem;
  position: relative;
`;

const ExperienceLine = styled.div`
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.color.green};
`;

const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;

export { Header, Container, ExperienceLine, CurrentExperience };