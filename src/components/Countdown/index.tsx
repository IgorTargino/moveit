import { fileURLToPath } from 'node:url';
import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, Button, ButtonActive } from './styles';


export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      { hasFinished ? (
        <Button disabled>Ciclo Encerrado </Button>
      ) : (
        <>
          { isActive ? (
            <ButtonActive onClick={resetCountdown}> Abandonar Ciclo </ButtonActive>
          ) : (
            <Button onClick={startCountdown}> Inicia Ciclo </Button>
          )}
        </>
      )}
    </div>
  );
}