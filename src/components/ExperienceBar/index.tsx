import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Header, Container, ExperienceLine, CurrentExperience } from './styles';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round((currentExperience * 100)/experienceToNextLevel);

  return(
    <Header>
      <span>0 xp</span>
      <Container>
        <ExperienceLine style={{ width: `${percentToNextLevel}%`}} />
        <CurrentExperience style={{ left: `${percentToNextLevel}%`}}>
          {currentExperience}
        </CurrentExperience>
      </Container>
      <span>{experienceToNextLevel}xp</span>
    </Header>
  );
}