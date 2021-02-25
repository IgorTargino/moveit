import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
<<<<<<< HEAD
import { CountdownContext } from '../contexts/CountdownContext';
=======
>>>>>>> ContextApi implementado

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
<<<<<<< HEAD
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
=======
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);
>>>>>>> ContextApi implementado

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
<<<<<<< HEAD
              onClick={handleChallengeFailed}
=======
              onClick={resetChallenge}
>>>>>>> ContextApi implementado
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSuccededButton}
<<<<<<< HEAD
              onClick={handleChallengeSucceeded}
=======
>>>>>>> ContextApi implementado
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>Inicie um ciclo para receber desafios</strong>  
        <p>   
        <img src="icons/level-up.svg" alt="level-up"/> 
          Avance de level completando os desafios</p>
        </div>
      )}

    </div>
  )
}