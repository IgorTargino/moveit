import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 1rem 2rem 2rem 2rem;
  
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;

  padding: 1.5rem 0 3rem;

  @media(max-width: 720px){
    grid-template-columns: 1fr;
  }
`;

export { Container, Section };
