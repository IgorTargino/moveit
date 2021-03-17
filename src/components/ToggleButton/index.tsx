import { useContext } from "react";
import { ThemeContext } from "styled-components";

import Switch  from "react-switch";
import { shade } from "polished";

import { Container } from './styles';
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
        offHandleColor={color.dark}
      />
    </Container>
  )
}

export default ToggleButton;