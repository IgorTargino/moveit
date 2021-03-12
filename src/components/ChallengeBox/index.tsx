import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { 
  Container, 
  ChallengeActive,
  ChallengeNotActive,
  FailedButton,
  SuccededButton
} from './styles';

export function ChallengeBox(){
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded(){
    completeChallenge();
    resetCountdown();

  }

  function handleChallengeFailed(){
    resetChallenge();
    resetCountdown();
  }

  return(
    <Container>
      { activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <FailedButton onClick={handleChallengeFailed} >
              Falhei
            </FailedButton>
            <SuccededButton onClick={handleChallengeSucceeded} >
              Completei
            </SuccededButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
        <strong>Inicie um ciclo para receber desafios</strong>  
        <p>   
        <img src="icons/level-up.svg" alt="level-up"/> 
          Avance de level completando os desafios</p>
        </ChallengeNotActive>
      )}

    </Container>
  )
}