import '../styles/global.css'

<<<<<<< HEAD
import {  ChallengesProvider } from "../contexts/ChallengesContext"
import { CountdownProvider } from '../contexts/CountdownContext'
=======
import { ChallengesContext, ChallengesProvider } from "../contexts/ChallengesContext"
>>>>>>> ContextApi implementado

function MyApp({ Component, pageProps }) {

  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
