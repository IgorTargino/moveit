import { useContext } from "react";

import { shade } from "polished";
import Switch  from "react-switch";

import { Container } from './styles';

import { ThemeContext } from "styled-components";


interface ToggleButtonProps {
  toggleTheme: () => void;
}

function ToggleButton(props: ToggleButtonProps){
  const { color, title } = useContext(ThemeContext);
  
  return (
    <Container>
      <Switch
        onChange={props.toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.1, color.background)}
        onColor={color.grayLine}
      />
    </Container>
  )
}

export default ToggleButton;