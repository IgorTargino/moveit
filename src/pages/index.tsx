import Head from 'next/head';
import { GetServerSideProps } from 'next';
import {  useSession } from 'next-auth/client';

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import { Container, Section } from '../styles/pages/Home';

import Redirect from '../components/Redirect';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  toggleTheme: () => { };
}

export default function Home(props: HomeProps) {
  const [session]: any = useSession();
  console.log(session);

  if (!session) {
    return <Redirect to="/login" />;
  }

  return (

    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Container>
        <Head>
          <title>Inicio | pomodoro clock</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <Section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </Section>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}


