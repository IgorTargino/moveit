import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Button, Container, Overlay } from './styles';

export function LevelUpModal(){
  const { level, closeLevelUpModal } = useContext(ChallengesContext)
  return(
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <Button onClick={closeLevelUpModal} >
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </Button>
      </Container>
    </Overlay>
  )
}