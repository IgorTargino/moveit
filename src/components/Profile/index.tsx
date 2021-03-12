import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, ImgProfile, DataProfile } from './styles';

export function Profile(){
  const { level } = useContext(ChallengesContext);
  return(
    <Container>
      <ImgProfile src="https://github.com/igortargino.png" alt="Igor Targino"/>
      <DataProfile>
        <strong>Igor Targino</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </DataProfile>
    </Container>
  );
}