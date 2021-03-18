import { signOut } from "next-auth/client";
import { useRouter } from "next/router";

import ToggleButton from "../ToggleButton";
import { AiOutlineLogout, AiOutlineHome } from "react-icons/ai";

import { Container, ContainerButton } from './styles';

interface SideBarProps {
  toggleTheme: () => void;
}

function SideBar(props: SideBarProps) {
  const router = useRouter();

  return (
    <Container>
      <img src="./icons/logo-azul.svg" alt="" />
      <section>
        <ContainerButton>
          <AiOutlineHome/>
        </ContainerButton>
        <ContainerButton
          onClick={() => signOut()
          }>
          <AiOutlineLogout/>
        </ContainerButton>
      </section>
      <ToggleButton toggleTheme={props.toggleTheme}></ToggleButton>
    </Container>
  );
}

export default SideBar;