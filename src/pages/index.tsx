import Head from 'next/head';

import { GetServerSideProps } from 'next';

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import ToggleButton from '../components/ToggleButton';

import { ThemeProvider } from 'styled-components';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import { Container, Section } from '../styles/pages/Home';


import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import { useState } from 'react';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  toggleTheme: () => { };
}

export default function Home(props: HomeProps) {

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
        <ToggleButton toggleTheme={props.toggleTheme}/>
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
