import { useState } from "react";
import { ThemeProvider } from "styled-components"
import GlobalStyle from '../styles/global';
import usePersistedState from '../hooks/usePersistedState'
import dark from "../styles/themes/dark";

import light from "../styles/themes/light"

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState('@THEME/index', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }  
  
  return (  

  
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Component {...pageProps} toggleTheme={toggleTheme} />
  </ThemeProvider>


  )
}

export default MyApp
