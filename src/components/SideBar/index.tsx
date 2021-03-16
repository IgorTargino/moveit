import { signOut } from "next-auth/client";
import { useRouter } from "next/router";
import ToggleButton from "../ToggleButton";

import { Container, ContainerButton, Button } from './styles';

interface SideBarProps {
  toggleTheme: () => void;
}

function SideBar(props: SideBarProps) {
  const router = useRouter();

  return (
    <Container>
      <img src="./icons/logo-azul.svg" alt=""/>
      <ContainerButton>
        <Button>
          Home
        </Button>
        <Button onClick={() => signOut()}>Logout</Button>
      </ContainerButton> 
      <ToggleButton toggleTheme={props.toggleTheme}></ToggleButton>
    </Container>
  );
}

export default SideBar;