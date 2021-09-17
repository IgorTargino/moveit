import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, ImgProfile, DataProfile } from './styles';

interface Props {
  name: string;
  icon: string;
}

export function Profile({name, icon}: Props){
  const { level } = useContext(ChallengesContext);
  return(
    <Container>
      <ImgProfile src={icon} alt={name}/>
      <DataProfile>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </DataProfile>
    </Container>
  );
}