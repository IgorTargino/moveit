
import Head from "next/head";

import { signIn, signOut, useSession } from 'next-auth/client'

import Redirect from '../../components/Redirect';

import { Container, Background, LoginContainer, Button } from './styles';
import { AiOutlineArrowRight, AiFillGithub } from 'react-icons/ai';


export default function Page() {
  const [session, loading] = useSession()

  if (session) {
    return <Redirect to="/" />;
  }
  
  return (
    <>
      <Head>
        <title>Login | MoveIt</title>
      </Head>
      <Background src="./icons/simbolo.svg" alt="background logo" />
      <Container>
        <section>
          <LoginContainer>
            <img src="./icons/logo-full.svg" alt="" />
            <h2>Bem-vindo</h2>
            <div>
              <AiFillGithub size={40} />
              <p>Faça login com seu GitHub para começar. </p>
            </div>
            <Button onClick={() => signIn("github")}>
              <span>Logar com Github</span>
              <div>
                <AiOutlineArrowRight size={36} color="#fff"/>
              </div>
            </Button>
          </LoginContainer>
        </section>
      </Container>
    </>

  )

}